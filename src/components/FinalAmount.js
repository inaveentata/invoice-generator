import React from "react";
import { Box, Stack, TextField } from "@mui/material";

const FinalAmount = () => {
  return (
    <Stack
      direction={{ md: "row" }}
      sx={{ border: "2px solid blue", mt: "1rem" }}
      spacing={{ md: 2 }}
    >
      <Stack>
        <FinalBillTerms />
        <FinalBillTerms />
      </Stack>
      <Stack mt="1rem">
        <FinalBillComponents />
        <FinalBillComponents isEditable/>
        <FinalBillComponents isEditable/>
        <FinalBillComponents isEditable/>
        <FinalBillComponents />
        <FinalBillComponents isEditable/>
        <FinalBillComponents />
      </Stack>
    </Stack>
  );
};

//Final Bill terms
function FinalBillTerms() {
  return (
    <Box mt="1rem">
      <TextField size="small" sx={{ width: "40%" }} />
      <TextField size="large" multiline sx={{ width: "100%" }} />
    </Box>
  );
}

// Bill division
function FinalBillComponents({ isEditable, value = "0" }) {
  return (
    <Box sx={{ display: "flex", alignItems:'center', justifyContent: "space-between", mb: "3px" }}>
      <TextField size="small" sx={{ width: "60%" }} />
      {isEditable ? (
        <TextField size="small" sx={{ width: "38%" }} />
      ) : (
        `US$${value}.00`
      )}
    </Box>
  );
}

export default FinalAmount;
