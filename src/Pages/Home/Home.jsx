// src/pages/Home.jsx
import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        py: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{ maxWidth: 360, width: "100%", borderRadius: 4, boxShadow: 3 }}
      >
        <CardMedia
          component="img"
          height="200"
          image="/images/hero.png"
          alt="Comhradh Hero"
          sx={{
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            objectFit: "fill",
          }}
        />
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom fontWeight={700}>
            Learn Gaelic in 5 Minutes a Day
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Master Gaelic with bite-sized lessons, interactive exercises, and
            cultural insights. Start your language journey today!
          </Typography>
          <Box
            component="img"
            src="/images/illustration.png"
            alt="Illustration"
            sx={{ width: "100%", borderRadius: 2, mb: 2 }}
          />
          <Stack spacing={1}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
            >
              Get Started
            </Button>
            <Button variant="outlined" color="secondary" size="large" fullWidth>
              Learn More
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
