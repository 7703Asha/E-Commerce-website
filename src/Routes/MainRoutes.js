import React from 'react'
import Dashboard from '../View/MainLayout/Dashboard'

const MainRoutes = {
  path: '/',
  // element: <MinimalLayout />,
  children: [
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    // {
    //   path: '/pages/register/register3',
    //   element: <AuthRegister3 />
    // }
  ]
}

export default MainRoutes
