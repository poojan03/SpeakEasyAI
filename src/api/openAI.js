const { apiKey } = require("../constants")
import axios from 'axios';

const client = axios.create({
    headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json"
    }
})

const geminiEndpoint = 'https://api.gemini.com/v1/chat'; // Replace with actual endpoint

export const apiCall = async (prompt, messages) => {
    try {
        const res = await client.post(geminiEndpoint, {
            model: "gemini-1.5-flash",
            messages: [{
                role: 'user',
                content: `Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . Simply answer with a yes or no.`
            }]
        })
        console.log('data: ', res.data);
    } catch (err) {
        console.log('error: ', err);
        return Promise.resolve({ success: false, msg: err.message });
    }
}
