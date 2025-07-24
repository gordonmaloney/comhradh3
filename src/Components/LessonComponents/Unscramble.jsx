// src/components/Exercises/Unscramble.jsx
import React, { useState, useMemo } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

/*
<Unscramble sentence="Tha mi mòr" />
*/


// Reorder helper
const reorder = (list, start, end) => {
  const result = Array.from(list);
  const [moved] = result.splice(start, 1);
  result.splice(end, 0, moved);
  return result;
};

export default function Unscramble({ sentence }) {
  const words = useMemo(() => sentence.split(" "), [sentence]);
  const [items, setItems] = useState(() => {
    let arr = [...words];
    // shuffle until different
    do {
      arr = arr.sort(() => Math.random() - 0.5);
    } while (arr.join(" ") === words.join(" "));
    return arr;
  });

  const onDragEnd = (result) => {
    if (!result.destination) return;
    setItems(reorder(items, result.source.index, result.destination.index));
  };

  const isComplete = items.join(" ") === words.join(" ");

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        Unscramble:
      </Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sentence" direction="horizontal">
          {(provided) => (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              component={Paper}
              sx={{ display: "flex", flexWrap: "wrap", p: 1, minHeight: 60 }}
            >
              {items.map((w, idx) => (
                <Draggable key={w + idx} draggableId={w + idx} index={idx}>
                  {(prov) => (
                    <Box
                      ref={prov.innerRef}
                      {...prov.draggableProps}
                      {...prov.dragHandleProps}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        m: 0.5,
                        bgcolor: "primary.light",
                        borderRadius: 1,
                        cursor: "grab",
                      }}
                    >
                      {w}
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
      {isComplete && (
        <Typography mt={1} color="success.main">
          Perfect! 🎉
        </Typography>
      )}
    </Box>
  );
}
