import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
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
        <Stack direction='row' alignItems='center' sx={{
          border: '2px dotted #ccc', textTransform: 'uppercase',
          maxWidth:'680px',p:'3px',pl:'5px',borderRadius:'3px',
        }}>
          <InfoOutlinedIcon color='warning'/>
          <Typography variant="body2" sx={{
          marginLeft:'5px'
        }}>
          This is just a demo form, which will not generate or give an actual
          invoice. But the form inputs are implemented with validation. But the Output browser console.
        </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
