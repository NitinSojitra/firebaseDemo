import React from 'react';
import MainNavigation from './src/navigation/mainNavigation';
import {Provider as AuthProvider} from './src/context/authContext';

const App = () => {
  return (
    <AuthProvider>
      <MainNavigation />
    </AuthProvider>
  );
};

export default App;
