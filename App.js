import React from 'react';
import MainNavigation from './src/navigation/mainNavigation';
import {Provider as AuthProvider} from './src/context/authContext';
import {Provider as UserDataProvider} from './src/context/userDataContext';

const App = () => {
  return (
    <UserDataProvider>
      <AuthProvider>
        <MainNavigation />
      </AuthProvider>
    </UserDataProvider>
  );
};

export default App;
