import React,{useState} from "react";
import { Box } from "@mui/material";
import InvoiceHeader from "./InvoiceHeader";
import BillDetails from "./BillDetails";
import Items from "./Items";
import FinalAmount from "./FinalAmount";
   
const InvoiceMain = () => {
  const [quantity, setQuantity] = useState(1)
  const [rate, setRate] = useState(0)
  return (
    <Box
      // width={{ xs: "auto", md: "80%" }}
      sx={{
        border: "1px solid #aaa",
        bgcolor: "#fff",
        p: { xs: "1rem", md: "2rem" },
      }}
    >
      <InvoiceHeader />
      <BillDetails />
      <Items
        quantity={quantity}
        setQuantity={setQuantity}
        rate={rate}
        setRate={setRate}
      />
      <FinalAmount quantity={quantity} rate={rate} />
    </Box>
  );
}; 

export default InvoiceMain;
