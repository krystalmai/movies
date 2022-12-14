import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeProvider";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
