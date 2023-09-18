import { createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Order from '@pages/Order';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/order',
        element: <Order />,
      },
    ],
  },
]);

export default router;
