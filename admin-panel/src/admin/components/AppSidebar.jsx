import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MovieIcon from "@mui/icons-material/Movie";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PeopleIcon from "@mui/icons-material/People";
import PaymentsIcon from "@mui/icons-material/Payments";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const items = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
  { text: "Movies", icon: <MovieIcon />, path: "/admin/movies" },
  { text: "Theatres", icon: <TheaterComedyIcon />, path: "/admin/theatres" },
  { text: "Shows", icon: <ScheduleIcon />, path: "/admin/shows" },
  { text: "Bookings", icon: <BookOnlineIcon />, path: "/admin/bookings" },
  { text: "Users", icon: <PeopleIcon />, path: "/admin/users" },
  { text: "Payments", icon: <PaymentsIcon />, path: "/admin/payments" },
];

export default function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar>
        <strong>BookMyShow Admin</strong>
      </Toolbar>
      <List>
        {items.map((item) => (
          <ListItemButton
            key={item.text}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}