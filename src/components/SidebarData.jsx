import React from "react";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const SidebarData = [
    

    
    {
        title: "Tableau de bord",
        icon: <SpaceDashboardIcon />,
        link: "/Dashboard"
    },
    {
        title:"Messages",
        icon: <ChatIcon />,
        link: "/chat"
    },
    {
        title: "Rendez-vous",
        icon: <ChecklistRtlIcon />,
        link: "/Rendez-vous"
    },
    {
        title: "Ordonnances",
        icon: <ReceiptIcon />,
        link: "/Ordonnances et factures"
    },
    {
        title: "Modifier le profil",
        icon: <AccountCircleIcon />,
        link: "/account"
    },
    {
        title: "Se déconnecter",
        icon: <LogoutIcon />,
        link: "/Log out"
    }


]