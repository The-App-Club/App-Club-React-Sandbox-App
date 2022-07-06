import React from 'react';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import NotFound from '../pages/not-found';

const routes = [
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    isPrivate: true,
  },
  {
    path: '/*',
    component: NotFound,
    isPrivate: true,
  },
];

export default routes;
