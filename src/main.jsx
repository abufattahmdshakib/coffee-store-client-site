import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout';
import Header from './components/Header';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import ViewDetails from './page/ViewDetails';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:4000/coffees'),
        Component: Home
      },
      {
        path: "/AddCoffee",
        Component: AddCoffee
      },
      {
        path: "/coffees/:id",
        loader: ({ params }) => fetch(`http://localhost:4000/coffees/${params.id}`),
        Component: ViewDetails
      },
      {
        path: "/UpdateCoffee/:id",
         loader: ({ params }) => fetch(`http://localhost:4000/coffees/${params.id}`),
        Component: UpdateCoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
