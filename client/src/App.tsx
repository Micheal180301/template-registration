import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import { PATHS } from './paths';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import HomePage from './pages/home/HomePage';

const router = createBrowserRouter([
  {
    path: PATHS.login,
    element: <LoginPage />,
  },
  {
    path: PATHS.register,
    element: <RegisterPage />,
  },
  {
    path: PATHS.home,
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
