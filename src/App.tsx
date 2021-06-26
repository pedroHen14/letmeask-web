import Routes from './routes'

import { GlobalStyles } from './GlobalStyles';
import { useState } from 'react';
import { useAuth } from './hooks/useAuth';

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
