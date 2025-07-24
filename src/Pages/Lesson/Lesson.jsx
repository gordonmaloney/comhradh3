import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CircularProgress,
  List,
  ListItem,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


// Import lessons data for lookup
import { lessonsData } from "../../Data/LessonData";

export default function Lesson() {
  const { lessonId } = useParams();
  const lesson = lessonsData.find((l) => l.id.toString() === lessonId);

  if (!lesson) {
    return (
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h6">Lesson not found</Typography>
        <Button component={Link} to="/lessons" startIcon={<ArrowBackIcon />}>
          Back to Lessons
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Button component={Link} to="/lessons" startIcon={<ArrowBackIcon />}>
        Back
      </Button>
      <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
        {lesson.title}
      </Typography>
      <Card sx={{ mb: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image={lesson.img}
          alt={lesson.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Duration: {lesson.duration} min
          </Typography>
        </CardContent>
      </Card>
      {lesson.content}

      {lesson.recap}

      {lesson.vocabulary}

      {lesson.practice}
    </Box>
  );
}
