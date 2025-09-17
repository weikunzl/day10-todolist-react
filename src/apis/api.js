import axios from "axios";
import {message} from 'antd';

const instance = axios.create({
    // baseURL: 'https://68c78c8b5d8d9f5147322265.mockapi.io/a',
    baseURL: 'https://todo-service-dev-9ce0.up.railway.app',
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    (config) => {
        // request configuration
        console.log("request success", config)
        config.metadata = {
            startTime: Date.now()
        }
        return config;
    },
    (error) => {
        // handle request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        // handle response
        console.log("response success", response)
        console.log('Api duration is' + (Date.now() - response.config.metadata.startTime) +'ms')
        return response;
    },
    (error) => {
        // handle response error
        const {status, data} = error.response;
        message.error(`response Error ${status} ${data}`)

        if (status === 401) {
            console.log(error.response)
            // do something
        }
        return Promise.reject(error);
    }
);



export const getTodos = async () => {
    const response = await instance.get('/todos')
    return response
}

export const addTodo = async (todo) => {
    const response = await instance.post('/todos', todo)
    return response
}
