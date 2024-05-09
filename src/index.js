// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const BrowserRouter = createBrowserRouter({
  routes,
});

ReactDOM.render(
  <RouterProvider router={BrowserRouter}>
    {routes}
  </RouterProvider>,
  document.getElementById('root')
);
