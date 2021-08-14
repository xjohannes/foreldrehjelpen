import axios from 'axios';
import { baseUrl } from '../config/config';

const client = axios.create({
  baseURL: baseUrl
});

export const getEvent = (userId) => {
  console.log('EVENT CLIENT userId', userId);
  return client.get(`/event/${userId}`).then((res) => res.data);
};

export const postEvent = () => client.post('/events').then((res) => res.data);
