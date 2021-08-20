import React from 'react';
import { EventDetails } from '../components/Event';
import EventWithLocale from '../components/Event/EventTypes';

const Trafikkvakt = (props: EventWithLocale) => {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <EventDetails {...props} />
    </>
  );
};

export default Trafikkvakt;
