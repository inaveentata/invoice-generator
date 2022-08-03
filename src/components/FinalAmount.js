import React from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";

const FinalAmount = () => {
  return (
    <Box flexDirection={{xs:'column', md: "row" }} sx={{display:'flex', mt: "1rem" ,justifyContent:'space-between'}} spacing={{ md: 2 }}>
      <Stack width={{md:'55%'}}>
        <FinalBillTerms
          text='Notes'
          placeHoldertext="Notes-any relevant information not already coverd"
        />
        <FinalBillTerms
          text='Terms'
          placeHoldertext="Terms and conditions - late fees, payment methods, delivary schedule"
        />
      </Stack>
      <Stack mt="1rem" alignSelf='flex-end' width={{md:'40%'}}>
        <FinalBillComponents text="Subtotal" notEditable />
        <FinalBillComponents text="Discount" />
        <FinalBillComponents text="Tax" />
        <FinalBillComponents text="Shipping" />
        <FinalBillComponents text="Total" notEditable />
        <FinalBillComponents text="Amount Paid" />
        <FinalBillComponents text="Balance Due" notEditable />
      </Stack>
    </Box>
  );
};

//Final Bill terms
function FinalBillTerms({ placeHoldertext,text }) {
  return (
    <Box mt="1rem">
      <Typography component="label">{text}</Typography>

      <TextField
        placeholder={placeHoldertext}
        size="large"
        multiline
        sx={{ width: "100%" }}
      />
    </Box>
  );
}

// Bill division
function FinalBillComponents({ text, notEditable, value = "0" }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        mb: "3px",
      }}
    >
      <Typography component="label">{text}</Typography>
      <TextField disabled={notEditable} size="small" sx={{ml:'1rem', width: "38%" }} />
    </Box>
  );
}

export default FinalAmount;
