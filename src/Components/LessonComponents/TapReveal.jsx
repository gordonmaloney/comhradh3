import React, { useState } from "react";
import { Box, Typography } from "@mui/material";


/*
<TapReveal prompt="What is 'house' in Gaelic?" answer="taigh" />
*/


export default function TapReveal({ prompt, answer }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {prompt}
      </Typography>
      <Box
        onClick={() => setRevealed(true)}
        onMouseEnter={() => setRevealed(true)}
        sx={{
          cursor: "pointer",
          display: "inline-block",
          px: 1,
          bgcolor: revealed ? "transparent" : "text.primary",
          color: revealed ? "text.primary" : "transparent",
          borderRadius: 1,
          transition: "all 0.3s",
          WebkitTextFillColor: revealed ? "inherit" : "transparent",
        }}
      >
        <Typography variant="body1">{answer}</Typography>
      </Box>
    </Box>
  );
}
