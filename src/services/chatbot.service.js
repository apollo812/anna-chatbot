import  { handleResponse } from '../utils';
import { API_BASE } from '../config/constants';

const sendUserInput = async (user) => {
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
        },
        body: JSON.stringify(user)
    };

    const response = fetch(`${API_BASE}/send`, requestOptions);
    return await handleResponse(response);
}

export const chatbotService = {
    sendUserInput
}