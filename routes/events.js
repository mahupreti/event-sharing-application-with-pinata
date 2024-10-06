const express = require('express');
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

let events = [];

// Load events from events.json
function loadEvents() {
    try {
        const data = fs.readFileSync('./events.json', 'utf-8');
        events = data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error reading events.json:', error);
        events = [];
    }
}

// Upload event
router.post('/upload', upload.single('image'), async (req, res) => {
    const { title, description, lat, lng } = req.body;
    const file = req.file;

    if (!file || !title || !description || !lat || !lng) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    try {
        const formData = new FormData();
        formData.append('file', file.buffer, { filename: file.originalname });

        // Upload to Pinata 
        const pinataResponse = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
            headers: {
                ...formData.getHeaders(),
                pinata_api_key: process.env.PINATA_API_KEY,
                pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY
            }
        });

        const ipfsHash = pinataResponse.data.IpfsHash;
        const currentTime = new Date().toISOString();

        events.push({ title, description, lat, lng, ipfsHash, uploadedAt: currentTime });
        fs.writeFileSync('./events.json', JSON.stringify(events, null, 2));

        res.redirect('/view-events.html');
    } catch (error) {
        console.error('Error during upload:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Upload failed. Please try again later.' });
    }
});

router.get('/events', (req, res) => {
    res.json(events);
});

loadEvents();

module.exports = router;
