import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import LazyWrapper from '@/components/common/LazyWrapper';
import App from '@/App';

// Lazy load screens
const TelesalesScreen = lazy(() => import('@/pages/TelesalesScreen'));

// Router config
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // 👈 App layout includes Header
    children: [
      {
        index: true,
        element: (
          <LazyWrapper>
            <TelesalesScreen />
          </LazyWrapper>
        ),
      },
    ],
  },
]);
