// src/components/Lessons/Lessons.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Chip,
  List,
  ListItem,
  Card,
  CardMedia,
  CardContent,
  Drawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { lessonsData } from "../../Data/LessonData";

export default function Lessons() {
  const [search, setSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredLessons = lessonsData.filter((lesson) =>
    lesson.title.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ["Grammar", "Vocabulary", "Listening", "Pronunciation"];

  return (
    <Box>
      {/* Top Bar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flex: 1, textAlign: "center" }}>
            Lessons
          </Typography>
          <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Search Field */}
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search lessons"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ bgcolor: "background.paper", borderRadius: 1 }}
        />
      </Box>

      {/* Category Chips 
      <Box sx={{ px: 2, py: 1, display: "flex", gap: 1, overflowX: "auto" }}>
        {categories.map((cat) => (
          <Chip key={cat} label={cat} clickable variant="outlined" />
        ))}
      </Box>
      */}

      {/* Lessons List */}
      <List sx={{ px: 2 }}>
        {filteredLessons.map(({ id, title, duration, img }) => (
          <ListItem
            key={id}
            disableGutters
            component={Link}
            to={`/lesson/${id}`}
            sx={{ textDecoration: "none" }}
          >
            <Card sx={{ display: "flex", width: "100%", height: 72}}>
              <CardMedia
                component="img"
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: 1,
                  objectFit: "fill",
                }}
                image={img}
                alt={title}
              />
              <CardContent sx={{ flex: 1, pl: 2 }}>
                <Typography variant="subtitle1" component="div">
                  {title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {duration} min
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>

      {/* Settings Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 240, p: 2 }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
        >
          <Typography variant="h6">More Options</Typography>
          {/* Add Drawer items here */}
        </Box>
      </Drawer>
    </Box>
  );
}
