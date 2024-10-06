# The FOMO Factory

## Description
Events are constantly occurring in our local area, yet my friends often overlook them. To address this, I created "**The FOMO Factory**." As the name implies, no one will miss out on what's happening nearby. Users can upload various file types, including images and videos, to this web application, along with the location where the event is happening. User will provide the location using Map feature in the web app and then upload the image or the video of the happening event. Then, the nearby user around 10 miles will get this notification on their phone in the realtime and visit the event without missing them. This project utilizes **Pinata’s** Files API for smooth file storage and retrieval on the **IPFS** network.

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