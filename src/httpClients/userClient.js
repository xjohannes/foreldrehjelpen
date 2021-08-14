import axios from 'axios';
import { baseUrl } from '../config/config';

const client = axios.create({
  baseURL: baseUrl
});

export const getUser = (name) =>
  client.get(`/user?user=${name}`).then((res) => res.data);

export const postUser = (userId) =>
  client.post(`/user?userId=${userId}`).then((res) => res.data);
