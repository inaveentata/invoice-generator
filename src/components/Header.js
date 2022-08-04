import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
const Header = () => {
  return (
    <Box
      sx={{
        color: "#fff",
        background: "linear-gradient(180deg,#232e38 0,#3d4c59 100%)",
        p: "1rem 1rem 4rem 0",
      }}
    >
      <Stack
        sx={{
          pl: "12%",
          maxWidth: "70rem",
        }}
      >
        <Typography variant="h4" component="h2" sx={{ my: "0.75rem" }}>
          Free Invoice Template
        </Typography>
        <Typography variant="h6" component="h3">
          Make beautiful invoices with one click!
        </Typography>
        <Typography variant="body1" sx={{ my: "0.75rem" }}>
          Welcome to the original Invoice Generator, trusted by millions of
          people. Invoice Generator lets you quickly make invoices with our
          attractive invoice template straight from your web browser, no sign up
          necessary. The invoices you make can be sent and paid online or
          downloaded as a PDF.
        </Typography>
        <Typography variant="body2">
          Did we also mention that Invoice Generator lets you generate an
          unlimited number of invoices?
        </Typography>
        <Button
          sx={{
            width:'8rem',
            color: "#fff",
            textTransform: "capitalize",
            p: "0.5rem",
            bgcolor: "#009e74",
            border: "1px solid #10806f",
            fontSize: '1rem',
            fontWeight:'600',
            mt:'1.5rem',
            "&:hover": {
              bgcolor: "#009e74",
              opacity: "0.8",
            },
          }}
        >
          OK, got it!
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
