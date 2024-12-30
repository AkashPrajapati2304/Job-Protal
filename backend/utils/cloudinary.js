import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();



cloudinary.config({ 
    cloud_name: 'dajh35qpu', 
    api_key: '352471312555998', 
    api_secret: 'GGMRTdUxIU6NmZ4OSnwdZjxFTgQ' // Click 'View API Keys' above to copy your API secret
});

export default cloudinary;