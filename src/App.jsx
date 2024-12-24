import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useNotification from './hooks/useNotification';
import { AuthRoute } from './components';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useNotification();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1 className='font-roboto'>Shared layout</h1>}>
            <Route path="vip-photographs" element={<h1>Main Page</h1>} />
          </Route>
          <Route element={<AuthRoute type="public" />}>
            <Route path="login" element={<h1>Login</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
