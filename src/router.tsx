import { createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout/Layout';
import PrivateLayout from '@components/Layout/PrivateLayout';
import PublicLayout from '@components/Layout/PublicLayout';
import Home from '@pages/Home';
import Intro from '@pages/Intro';
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
        element: <PublicLayout />, // 공개 페이지에 레이아웃 적용
        children: [
          {
            path: '/intro',
            element: <Intro />,
          },
        ],
      },
      {
        element: <PrivateLayout />, // 비공개 페이지에 레이아웃 적용
        children: [
          {
            path: '/home',
            element: <Order />,
          },
        ],
      },
    ],
  },
]);

export default router;
