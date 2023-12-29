import Main from './components/Main';
import Header from './components/Header';
import {Toaster} from 'react-hot-toast';

const App = () => {

  return (
    <>
      <Toaster position="bottom-right" toastOptions={{duration:2000}} reverseOrder={false} />
      <Header />
      <Main />
    </>
  );
}

export default App
