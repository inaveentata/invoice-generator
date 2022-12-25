import React from "react";
import { Box,Typography, Button } from "@mui/material";

const NavBar = () => {
  return (
    <Box
      component="header"
      sx={{
        py: "0.5rem",
        bgcolor: "#3d4c59",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          pl: "12%",
        }}
      >
        <Typography variant="h6" component="h1">
          Invoice Generator
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: { md: "5rem" },
          }}
          component='nav'
        >
          <Typography
            variant="subtitle2"
            component="a"
            href="#"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            Help
          </Typography>
          <Typography
            variant="subtitle2"
            component="a"
            href="#"
            sx={{ color: "#fff", textDecoration: "none", mx: "1.5rem" }}
          >
            Invoicing Guide
          </Typography>
          <Button
            disabled
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              p: "0 1rem",
              bgcolor: "#009e74",
              border: "1px solid #10806f",
              borderRadius: "0.75rem",
              "&:hover": {
                bgcolor: "#009e74",
                opacity: "0.8",
              },
            }}
          >
            upgrade
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
