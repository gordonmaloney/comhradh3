// src/components/Exercises/LessonFlashcards.jsx
import React, { useState, useMemo } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { TableRow } from "@mui/material";
import { lessonsData } from "../../Data/LessonData";



/*
TWO OPTIONS:

Use vocabulary object:
      <LessonFlashcards lessonId={0} />

OR use simple array:
      <LessonFlashcards
        list={[
          ['tha', 'am/are/is'],
          ['mi', 'I'],
          ['mòr', 'big'],
          ['beag', 'small'],
        ]}
      />
*/




// Helper: extract plain text from any React node
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

// Helper: recursively collect all <TableRow> elements
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

export default function LessonFlashcards({ lessonId, list }) {


  console.log(lessonsData.find((lesson) => lesson.id == lessonId));
  const vocabulary = lessonsData.find(lesson => lesson.id  ==  lessonId).vocabulary

 // const vocabulary = lessonsData[0].vocabulary

  // Build initial deck
  const deck = useMemo(() => {
    let cards = [];
    if (vocabulary) {
      const rows = extractRows(vocabulary);
      cards = rows.map((tr) => {
        const cells = React.Children.toArray(tr.props.children);
        return {
          gaelic: extractText(cells[0].props.children),
          english: extractText(cells[1].props.children),
          streak: 0,
        };
      });
    } else if (Array.isArray(list)) {
      cards = list.map(([ga, en]) => ({ gaelic: ga, english: en, streak: 0 }));
    }
    return cards;
  }, [vocabulary, list]);

  const [queue, setQueue] = useState(deck);
  const [current, setCurrent] = useState(deck[0] || null);
  const [revealed, setRevealed] = useState(false);

  const advance = (action) => {
    if (!current) return;
    const nextQueue = queue.slice(1);
    const card = { ...current };

    if (action === "wrong") {
      card.streak = 0;
      nextQueue.push(card);
    } else if (action === "correct") {
      card.streak += 1;
      if (card.streak < 2) nextQueue.push(card);
    }
    // 'easy' drops the card

    setQueue(nextQueue);
    setCurrent(nextQueue[0] || null);
    setRevealed(false);
  };

  if (!current) {
    return (
      <Typography variant="h6" color="success.main">
        You’ve mastered this set! 🎉
      </Typography>
    );
  }

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {current.gaelic}
      </Typography>

      {!revealed ? (
        <Button variant="outlined" onClick={() => setRevealed(true)}>
          Reveal English
        </Button>
      ) : (
        <Typography variant="h6" gutterBottom>
          {current.english}
        </Typography>
      )}

      {revealed && (
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Button color="error" onClick={() => advance("wrong")}>
            Wrong
          </Button>
          <Button color="primary" onClick={() => advance("correct")}>
            Correct
          </Button>
          <Button color="success" onClick={() => advance("easy")}>
            Easy
          </Button>
        </Stack>
      )}
    </Box>
  );
}
