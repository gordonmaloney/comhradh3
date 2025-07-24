// src/components/Exercises/Translate.jsx
import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";


//<Translate prompt="Translate 'I am big'" answer="Tha mi mòr" />


export default function Translate({ prompt, answer }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^\p{L}'\s]+/gu, "") // remove punctuation except apostrophes
      .trim();

  const handleSubmit = () => {
    setResult(normalize(input) === normalize(answer));
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {prompt}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        size="small"
        placeholder="Type your answer"
      />
      <Button sx={{ mt: 1 }} onClick={handleSubmit} variant="contained">
        Submit
      </Button>
      {result != null && (
        <Typography mt={1} color={result ? "success.main" : "error.main"}>
          {result ? "Correct!" : `Not quite — answer: "${answer}"`}
        </Typography>
      )}
    </Box>
  );
}
