import * as React from 'react'
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";


function MainLayout() {

  return (
    <Stack  sx={{  overflow: "hidden" }}>
      <MainHeader />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
