import axios from 'axios';
import { baseUrl } from '../config/config';
import { User, EventType } from '../commonTypes/commonTypes';

const client = axios.create({
  baseURL: baseUrl
});

export const getUser = (userId) =>
  client.get(`/user?userId=${userId}`).then((res) => res.data);

export const postUser = (userId) =>
  client.post(`/user?userId=${userId}`).then((res) => res.data);
