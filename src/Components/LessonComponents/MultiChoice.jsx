// src/components/Exercises/MultiChoice.jsx
import React, { useState, useMemo } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";


/*
<MultiChoice
  prompt="Translate 'big'"
  answer="mòr"
  wrongAnswers={['beag','sgìth','tha']}
/>
*/



function shuffle(arr) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default function MultiChoice({ prompt, answer, wrongAnswers = [] }) {
  const [selected, setSelected] = useState(null);
  const options = useMemo(
    () => shuffle([answer, ...wrongAnswers]),
    [answer, wrongAnswers]
  );

  const handleClick = (option) => {
    if (selected == null) setSelected(option);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {prompt}
      </Typography>
      <Stack spacing={1}>
        {options.map((opt) => {
          const isCorrect = opt === answer;
          const isSelected = opt === selected;
          let color = "inherit";
          let variant = "outlined";

          if (selected != null && isSelected) {
            variant = "contained";
            color = isCorrect ? "success" : "error";
          }

          return (
            <Button
              key={opt}
              variant={variant}
              color={color}
              onClick={() => handleClick(opt)}
            >
              {opt}
            </Button>
          );
        })}
      </Stack>
      {selected != null && (
        <Typography
          mt={1}
          color={selected === answer ? "success.main" : "error.main"}
        >
          {selected === answer
            ? "Correct!"
            : `Sorry, the right answer is "${answer}".`}
        </Typography>
      )}
    </Box>
  );
}
