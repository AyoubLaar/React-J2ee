import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx'
import SignIn from './Pages/SignIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import RendezVous from './Pages/RendezVous.jsx';
import SignUpMedecin from './Pages/SingUpMedecin.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css"
import StickyHeadTable from "./components/TableEspaceClient.jsx"
import Sidebar from "./components/Sidebar"
import EspaceClient from './Pages/Espaceclient.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBarButtons from './components/NavBarButtons.jsx';

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
    path: "/Client/table",
    element: <StickyHeadTable />
  },
  {
    path: "/client/sidebar",
    element: <Sidebar />
  },
  {
    path: "/patient/monespace",
    element: <EspaceClient />
  },
  {
    path: "/medecin/signup",
    element: <SignUpMedecin />
  },

]);


export const context = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <context.Provider value={<NavBarButtons />}>
      <RouterProvider router={router} />
    </context.Provider>
  </React.StrictMode>,
)
