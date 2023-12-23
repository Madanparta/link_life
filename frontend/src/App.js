
import Main from './components/Main';
import Header from './components/Header';
import { useState } from 'react';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Header isAuthenticated={isAuthenticated}/>
      <Main isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    </>
  )
}

export default App
