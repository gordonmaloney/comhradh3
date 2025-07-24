// src/components/Exercises/TableComponent.jsx
import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Paper,
} from "@mui/material";

/*
<TableComponent
  xHeaders={['Gaelic', 'English']}
  yHeaders={['Row1','Row2']}
  data={[
    ['tha', 'am'], 
    ['mi', 'I']
  ]}
/>
*/


export default function TableComponent({
  data = [[]],
  xHeaders = [],
  yHeaders = [],
}) {
  return (
    <Box sx={{ overflowX: "auto", mb: 2 }}>
      <Paper elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              {yHeaders.length > 0 && <TableCell />}
              {xHeaders.map((h, i) => (
                <TableCell key={i}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, r) => (
              <TableRow key={r}>
                {yHeaders.length > 0 && <TableCell>{yHeaders[r]}</TableCell>}
                {row.map((cell, c) => (
                  <TableCell key={c}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
