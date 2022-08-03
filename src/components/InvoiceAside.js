import React from "react";
import { Box, Stack, Button } from "@mui/material";
import CurrencyType from "./CurrencyType";
 
const InvoiceAside = () => {
  return (
    <Stack
      width={{ xs: "auto", md: "20%" }}
      sx={{ p: 2}}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { md: "column" },
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "100%",
            color: "#fff",
            textTransform: "capitalize",
            p: "0.3rem 0.5rem",
            bgcolor: "#009e74",
            border: "1px solid #10806f",
            fontSize: "1rem",
            fontWeight: "600",
            "&:hover": {
              bgcolor: "#009e74",
              opacity: "0.8",
            },
          }}
        >
          Send Invoice
        </Button>
        <Button sx={{mt:{md:'1rem'}, width: "100%", textTransform: "capitalize" }}>
          {" "}
          Download Invoice
        </Button>
      </Box>
      <CurrencyType />
      <Button sx={{my:'1rem'}}>save defaults</Button>
      <Button
        sx={{
          width: "100%",
          color: "#222",
          textTransform: "capitalize",
          p: "0.3rem 0.5rem",
          fontSize: "1.2rem",
          "&:hover": {
            color: "#fff",
            bgcolor: "#009e74",
          },
        }}
      >
        History
      </Button>
    </Stack>
  );
};

export default InvoiceAside;
