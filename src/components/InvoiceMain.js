import React from "react";
import { Box } from "@mui/material";
import InvoiceHeader from "./subcomponents/InvoiceHeader";
import BillDetails from "./subcomponents/BillDetails";
import Items from "./subcomponents/Items";
import FinalAmount from "./subcomponents/FinalAmount";

 
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
      <Items
      />
      <FinalAmount />
    </Box>
  );
};

export default InvoiceMain;
