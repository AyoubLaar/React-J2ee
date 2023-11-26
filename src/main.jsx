import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx'
import SignIn from './Pages/SignIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import SignUpMedecin from './Pages/SingUpMedecin.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css"
import EspaceClient from './Pages/Espaceclient.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBarButtons from './components/NavBarButtons.jsx';
import UserProfile from './Pages/UserProfile.jsx';
import EspaceMedecin from './Pages/EspaceMedecin.jsx';
import RequireAuthentification from "./components/RequireAuthentification.jsx"
import SignInAdmin from './Pages/SignInAdmin.jsx';
import EspaceAdmin from './Pages/EspaceAdmin.jsx';

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
    path: "/patient/monespace",
    element: <RequireAuthentification role={"patient"}><EspaceClient /></RequireAuthentification>
  },
  {
    path: "/patient/monespace/userprofile",
    element: <RequireAuthentification role={"patient"}><UserProfile /></RequireAuthentification>
  },
  {
    path: "/medecin/signup",
    element: <SignUpMedecin />
  },
  {
    path: "/medecin/monespace",
    element: <RequireAuthentification role={"medecin"}><EspaceMedecin /></RequireAuthentification>
  },
  {
    path: "/admin/signin",
    element: <SignInAdmin />
  }, {
    path: "/admin/monespace",
    element: <RequireAuthentification role={"admin"} ><EspaceAdmin /></RequireAuthentification>
  }

]);


export const context = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <context.Provider value={<NavBarButtons />}>
      <RouterProvider router={router} />
    </context.Provider>
  </React.StrictMode>,
)
