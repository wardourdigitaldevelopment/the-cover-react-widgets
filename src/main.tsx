import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  MobileFirstWidgetSocialCare
} from './components/widgets/social-care-providers/mobile-first-widget-social-care/mobile-first-widget-social-care';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "social-care-providers",
    element: <MobileFirstWidgetSocialCare />,
  },
],
  { basename: '/images/uploads/infographics/'});


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
