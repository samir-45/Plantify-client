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
        Component: AddPlants
      },
      {
        path: 'myPlants',
        Component: MyPlants
      },
      {
        path: 'updatePlants',
        Component: UpdatePlants
      },
      {
        path: 'allPlants',
        loader: () => fetch('http://localhost:3000/plants'),
        Component: AllPlants
      },
      {
        path: 'plantDetails/:id',
        loader: ({params}) => fetch(`http://localhost:3000/plants/${params.id}`),
        Component: PlantDetails
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
  <RouterProvider router={router} />
  </StrictMode>,
)
