// src/components/Vocab/Vocab.jsx
import React, { useState, useMemo } from "react";
import {
  Box,
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Paper,
} from "@mui/material";
import { lessonsData } from "../../Data/LessonData";

// Helper to pull plain text out of any React node
function extractText(node) {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }
  if (React.isValidElement(node)) {
    return extractText(node.props.children);
  }
  return "";
}

// Recursively collect all <TableRow> elements from lesson.vocabulary
function extractRows(node) {
  let rows = [];
  if (!React.isValidElement(node)) return rows;
  if (node.type === TableRow) {
    rows.push(node);
  }
  React.Children.forEach(node.props.children, (child) => {
    rows = rows.concat(extractRows(child));
  });
  return rows;
}

export default function Vocab() {
  const [search, setSearch] = useState("");

  // 1) Flatten all lessons' vocab rows into [{gaelic, english, lessonTitle}]
  const allVocab = useMemo(() => {
    return lessonsData.flatMap((lesson) => {
      const rows = extractRows(lesson.vocabulary);
      return rows.map((tr) => {
        const cells = React.Children.toArray(tr.props.children);
        // Extract text from first two cells
        const gaelic = extractText(cells[0].props.children);
        const english = extractText(cells[1].props.children);
        return { gaelic, english };
      });
    });
  }, []);

  // 2) Filter on gaelic or english
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return allVocab;
    return allVocab.filter(
      ({ gaelic, english }) =>
        gaelic.toLowerCase().includes(q) || english.toLowerCase().includes(q)
    );
  }, [search, allVocab]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Vocabulary
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search Gaelic or English…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Paper elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Gaelic</TableCell>
              <TableCell>English</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((v, i) => (
              <TableRow key={`${v.gaelic}-${i}`}>
                <TableCell>{v.gaelic}</TableCell>
                <TableCell>{v.english}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
