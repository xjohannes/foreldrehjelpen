import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import User from './user/User';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isAuthenticated) {
    return <User user={user} />;
  }
  return <div>Could not Authenticate</div>;
};

export default Profile;
