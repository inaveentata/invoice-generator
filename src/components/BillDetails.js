import React from "react";
import { Stack, Box, TextField, TextareaAutosize } from "@mui/material"; 

const BillDetails = () => {
  return (
    <Stack direction={{ md: "row" }} sx={{ border:'2px solid blue', mt: "1rem" }} spacing={{ md: 2 }}>
      <Stack>
        <TextField size="large" sx={{ width: { xs: "100%", md: "90%" } }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <BillInfoSingle />
          <BillInfoSingle />
        </Box>
      </Stack>
      <Stack mt='1rem'>
        <BillDateSingle />
        <BillDateSingle />
        <BillDateSingle />
        <BillDateSingle />
      </Stack>
    </Stack>
  );
};

// Bill info , Bill

function BillInfoSingle() {
  return (
    <Box width={{ md: "45%" }} mt="1rem">
      <TextField size="small" sx={{ width: { xs: "40%", md: "100%" } }} />
      <TextareaAutosize
        style={{ width: "100%" }}
        minRows={4}
        maxRows={4}
        aria-label="bill info"
      />
    </Box>
  );
}

function BillDateSingle() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between",mb:'3px' }}>
      <TextField size="small" sx={{ width: "60%" }} />
      <TextField size="small" sx={{ width: "38%" }} />
    </Box>
  );
}

export default BillDetails;
