import axios from 'axios';
import { baseUrl } from '../config/config';

const client = axios.create({
  baseURL: baseUrl
});

export const getAllEventsForUser = (userId) => {
  return client.get(`/event/${userId}`).then((res) => res.data);
};

export const getAllTasksForUser = (userId, taskName) => {
  return client.get(`/event/${userId}/${taskName}`).then((res) => res.data);
};

export const postEvent = () => client.post('/events').then((res) => res.data);
