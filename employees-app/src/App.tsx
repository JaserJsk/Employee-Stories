import React, { useState, useEffect } from "react";
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
          <Typography variant="inherit" color="inherit" noWrap>
            The fellowship of the Tretton37
          </Typography>
          <IconButton
            color="inherit"
            onClick={toggleViewMode}
            sx={{ marginLeft: "auto" }}
            aria-label="Toggle View"
            aria-hidden="false"
            role="button"
          >
            <List aria-hidden="true" />
          </IconButton>
        </Toolbar>
      </AppBar>
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
