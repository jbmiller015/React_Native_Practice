import axios from 'axios';
import {AsyncStorage} from "react-native";

const instance = axios.create({
    baseURL: 'http://ad419a69b545.ngrok.io/'
});

//automatically add authorization to requests once logged in
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;