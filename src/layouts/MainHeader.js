import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Stack} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {useWindowScroll} from 'react-use';
import Logo from "../components/Logo";
import MovieSearch from "../components/MovieSearch";


function MainHeader() {
  const { y } = useWindowScroll();
  
  return (
    <>
    
      <AppBar color={ y > 0 ? "primary" : "transparent"} sx={{boxShadow: 'none'}} >
        <Toolbar variant="dense">
          <Stack direction="row" justifyContent="center" alignItems="center" height={40}>
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
            <Typography margin={2}>Trendy</Typography>
            <Typography margin={2}>Upcoming</Typography>
            <MovieSearch/>


          </Stack>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
        </AppBar>
    
    </>
  );
}

export default MainHeader;
