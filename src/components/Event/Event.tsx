import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

type EventProps = {
  title: string;
};
const Event = (props: EventProps): ReactElement => {
  const { title } = props;
  return <Link to={`/${title}`}>{title}</Link>;
};

export default Event;
