import React from "react";
import { Link, Typography, Box, Stack, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Logo from "../components/Logo";

export default function MainFooter() {
  return (
    <Box sx={{ minWidth: "100vw", p: 3, bgcolor: "primary.main" }}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={8} justifyContent="center">
          <Typography
            variant="h6"
            fontSize={10}
            align="center"
            mb={2}
            color="primary.contrastText"
          >
            Created by Krystal Mai
          </Typography>
          <Stack direction="row" justifyContent="center" gap={2}>
            <Link
              href="https://github.com/krystalmai?tab=repositories"
              target="_blank"
            >
              <GitHubIcon color="success" fontSize="large" />
            </Link>
            <Link
              href="https://www.instagram.com/krys.the.cat/"
              target="_blank"
            >
              <InstagramIcon color="success" fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/krystal-mai-054a15222/"
              target="_blank"
            >
              <LinkedInIcon color="success" fontSize="large" />
            </Link>
            <Link href="mailto: krystalmai00@gmail.com" target="_blank">
              <MailOutlineIcon color="success" fontSize="large" />
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2} justifyContent="center" >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
>         <Typography
            variant="h6"
            fontSize={10}
            align="center"
            mb={2}
            color="primary.contrastText"
          >
            Powered by
          </Typography>
            <Logo />
            </Box> 
        </Grid>
      </Grid>
    </Box>
  );
}
