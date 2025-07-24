// src/components/BottomNav/BottomNav.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

export default function Menu() {
  const location = useLocation();
  const [value, setValue] = React.useState(() => {
    // Map current path to index
    if (location.pathname.startsWith("/lessons")) return "lessons";
    if (location.pathname.startsWith("/vocab")) return "vocab";
    if (location.pathname === "/") return "menu";
    return null;
  });
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleChange = (e, newValue) => {
    if (newValue === "more") {
      setDrawerOpen(true);
    } else {
      setValue(newValue);
    }
  };

  return (
    <>
      <Box sx={{ pb: 7 }}>
        {/* Spacer to push content above the nav */}
        {/* Your page content goes here */}
      </Box>

      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="menu"
          icon={<HomeRoundedIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Lessons"
          value="lessons"
          icon={<AutoStoriesRoundedIcon />}
          component={Link}
          to="/lessons"
        />
        <BottomNavigationAction
          label="Vocab"
          value="vocab"
          icon={<QuestionAnswerRoundedIcon />}
          component={Link}
          to="/vocab"
        />
        <BottomNavigationAction
          label="More"
          value="more"
          icon={<SettingsRoundedIcon />}
        />
      </BottomNavigation>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          onKeyDown={() => setDrawerOpen(false)}
        >
          <List>
            <ListItem button component={Link} to="/settings">
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={Link} to="/help">
              <ListItemText primary="Help & Feedback" />
            </ListItem>
            {/* add more items as needed */}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
