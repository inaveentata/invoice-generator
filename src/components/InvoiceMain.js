import React from "react";
import { Box } from "@mui/material";
import InvoiceHeader from "./InvoiceHeader";
import BillDetails from "./BillDetails";
import Items from "./Items";
import FinalAmount from "./FinalAmount";
 
const InvoiceMain = () => {
  return (
    <Box
      width={{ xs: "auto", md: "80%" }}
      sx={{
        border: "1px solid #aaa",
        bgcolor: "#fff",
        p: { xs: "1rem", md: "2rem" },
      }}
    >
      <InvoiceHeader />
      <BillDetails />
      <Items />
    <FinalAmount />
    </Box>
  );
};

export default InvoiceMain;
