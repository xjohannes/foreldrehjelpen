import React from 'react';
import User from './Avatar';

export default {
  title: 'User',
  component: User
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <User {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {};
