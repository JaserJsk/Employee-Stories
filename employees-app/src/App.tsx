import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { Code, List } from "@mui/icons-material";
import axios from "axios";
import Hero from "./components/Hero";
import Company from "./views/Company";
import Footer from "./components/Footer";
import { EmployeeData } from "./types/Employee";
import MainTheme from "./themes/MainTheme";

function App() {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get("https://api.1337co.de/v3/employees", {
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      });
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Code sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            The fellowship of the Tretton37
          </Typography>
          <IconButton
            color="inherit"
            aria-label="toggle view mode"
            onClick={toggleViewMode}
            sx={{ marginLeft: "auto" }}
          >
            <List />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Hero />
      <Company
        employees={employees}
        viewMode={viewMode}
        toggleViewMode={toggleViewMode}
      />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
