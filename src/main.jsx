import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx'
import SignIn from './Pages/SignIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import RendezVous from './Pages/RendezVous.jsx';
import SignUpMedecin from './Pages/SingUpMedecin.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/patient/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "/rendezvous/:id",
    element: <RendezVous />
  },
  {
    path: "/medecin/signup",
    element: <SignUpMedecin />
  },

]);
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
