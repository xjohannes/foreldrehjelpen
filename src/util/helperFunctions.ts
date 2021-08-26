// eslint-disable-next-line import/prefer-default-export

import dayjs from 'dayjs';
import { EventType, User } from '../commonTypes/commonTypes';

export const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const sortEvents = (events: EventType[]) => {
  events.sort((a, b) => {
    if (dayjs(a.startTime).isBefore(b.startTime)) return -1;
    if (dayjs(a.startTime).isAfter(b.startTime)) return 1;
    return 0;
  });
};

interface Auth0User extends User {
  sub?: string;
}

export const getUserIdFromAuth0 = (sub: string | undefined) =>
  sub && sub.split('|')[1];
