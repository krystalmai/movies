import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import logoImg from "../logo.svg";

function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box
      sx={{
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx
      }}
    >
      <img src={logoImg} alt="logo" width="100%" />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <Link  to="/">{logo}</Link>;
}

export default Logo;
