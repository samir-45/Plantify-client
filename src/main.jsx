import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx';
import AddPlants from './pages/AddPlants.jsx';
import MyPlants from './pages/MyPlants.jsx';
import UpdatePlants from './pages/UpdatePlants.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import PlantDetails from './pages/PlantDetails.jsx';
import AllPlants from './pages/AllPlants.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import PrivetRoute from './provider/PrivetRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'addPlants',
        element: <PrivetRoute><AddPlants></AddPlants></PrivetRoute>
      },
      {
        path: 'myPlants',
        element: <PrivetRoute><MyPlants></MyPlants></PrivetRoute>
      },
      {
        path: 'updatePlants/:id',
        loader: ({params}) => fetch(`http://localhost:3000/plants/${params.id}`),
        element: <UpdatePlants></UpdatePlants>
      },
      {
        path: 'allPlants',
        loader: () => fetch('http://localhost:3000/plants'),
        Component: AllPlants
      },
      {
        path: 'plantDetails/:id',
        loader: ({params}) => fetch(`http://localhost:3000/plants/${params.id}`),
        element: <PrivetRoute><PlantDetails></PlantDetails></PrivetRoute>
      }
    ]
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      {
        path: '/auth/signIn',
        Component: Signin
      },
      {
        path: '/auth/signUp',
        Component: Signup
      }
    ]
  },
  {
    path: '/*',
    Component: ErrorPage
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
    <RouterProvider router={router} />
</AuthProvider>
  </StrictMode>,
)
