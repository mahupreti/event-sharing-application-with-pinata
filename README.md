# Event Sharing Application

## Description
This is a web application for sharing events, allowing users to add new events along with images and videos, and view a list of all events. The application uses IPFS pinata for storing images, videos and Leaflet.js for displaying event locations on a map.

Pinata cloud IPFS is used to store all the images and videos uploaded by the user. Users are then able to share the images and videos or the location of the event. The pinata cloud image data are then removed after 7 days period automatically since the posted event won't be reliable. All calls to pinata are made through API using pinata access key and secret key.

## Features
- Add new events with titles, descriptions, image or video, and geographical locations in the Pinata Cloud.
- View a list of all added events.
- Each event displays its image or video and location on an interactive map.
- Automatically unpins expired events from IPFS after 7 days.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, jQuery, Leaflet.js
- **Backend**: Node.js, Express.js
- **Storage**: IPFS via Pinata
- **Database**: JSON file for storing event data locally.

## Installation

### Prerequisites
- Node.js
- npm
- Pinata account (for IPFS storage)

### Steps
1. Clone the repository:
   ```bash
   git clone repo
   cd event-sharing-application-with-pinata
2. Install dependencies
    ```npm install```
3. Create .env file in the root directory with following variables
    ```bash
    PORT=3000
    PINATA_API_KEY=your_pinata_api_key
    PINATA_SECRET_API_KEY=your_pinata_secret_api_key
4. Start server 
    ```node server.js```
    

### Production Deployment
For now, I have deployed it in render platform. The public domain is : https://event-sharing-application-with-pinata.onrender.com/ . The website might be slow as it is running in free version but the function of website can be performed easily.