import React from "react";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const SidebarData = [
    

    {
        // Profile Picture
        isProfile: true,
        profileImage: '../pic.jpg', // Replace with the actual URL of your profile picture
    },
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
        icon: <ReceiptIcon />,
        link: "/Rendez-vous"
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