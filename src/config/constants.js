const DEV_MODE = process.env.REACT_APP_DEV_MODE;
export const API_BASE = DEV_MODE == true ? 'http://localhost:3333/v1':'https://anna-chatbot-api.onrender.com/v1';