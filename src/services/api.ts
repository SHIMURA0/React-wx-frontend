import axios from 'axios';

const API_URL = 'http://your-fastapi-url.com/api'; // 替换为你的 FastAPI 后端 URL

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const addUser = async (user: { fullName: string; email: string; role: string; status: string }) => {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
};
