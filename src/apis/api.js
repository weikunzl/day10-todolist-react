import axios from "axios";
import {message} from 'antd';

const instance = axios.create({
    baseURL: 'https://68c78c8b5d8d9f5147322265.mockapi.io/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getTodos = async () => {
    const response = await instance.get('/todos')
    return response
}

export const addTodo = async (todo) => {
    const response = await instance.post('/todos', todo)
    return response
}
