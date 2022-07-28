import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
export const api = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com',
});

api.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem('@token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (err) {
    console.log(err);
  }
});
