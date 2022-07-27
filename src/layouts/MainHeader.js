import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Logo from "../components/Logo";

function MainHeader() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Stack direction="row" justifyContent="center" alignItems="center">
            <IconButton
          
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Logo />
            </IconButton>
            <Typography variant="h6" color="success.light" component="div">
              The Movie Mob
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
