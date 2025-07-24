import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#A8E6CF" }, // pastel green
    secondary: { main: "#FFD3B6" }, // pastel orange
    background: { default: "#fafafa", paper: "#fff" },
    text: { primary: "#333", secondary: "#555" },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h2: { fontWeight: 800 },
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: { defaultProps: { size: "large" } },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
});

export default theme;
