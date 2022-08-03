import React from "react";
import { Stack, Box, TextField, TextareaAutosize,Typography } from "@mui/material"; 

const BillDetails = () => {
  return (
    <Box flexDirection={{xs:'column', md: "row" }} sx={{display:'flex', mt: "1rem" ,justifyContent:'space-between'}} spacing={{ md: 2 }}>
      <Stack width={{md:'55%'}}>
        <TextField
          multiline
          placeholder="Who is this invoice from? (required)"
          size="large"
          sx={{ width: { xs: "100%", md: "90%" } }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <BillInfoSingle
            text="Bill To"
            placeHoldertext="Who is this invoice from to?(required)"
          />
          <BillInfoSingle text="Ship To" placeHoldertext="(optional)" />
        </Box>
      </Stack>
      <Stack mt="1rem" alignSelf="flex-end" width={{ md: "40%" }}>
        <BillDateSingle text="Date" type="date" />
        <BillDateSingle text="Payment Terms" />
        <BillDateSingle text="Due Date" type="date" />
        <BillDateSingle text="PO Number" />
      </Stack>
    </Box>
  );
}; 

// Bill info , Bill

function BillInfoSingle({text,placeHoldertext=''}) {
  return (
    <Box width={{ md: "45%" }} mt="1rem">
      <Typography component="label">{text}</Typography>
      <TextareaAutosize
        placeholder={placeHoldertext}
        style={{ padding: "0.5rem", width: "100%" }}
        minRows={4}
        maxRows={4}
        aria-label="bill info"
      />
    </Box>
  );
}

function BillDateSingle({text,type}) {
  return (
    <Box sx={{ display: "flex", alignItems:'center', justifyContent: "end",mb:'3px' }}>
      <Typography component='label'>{text }</Typography>
      <TextField type={type} size="small" sx={{ml:'1rem', width: "38%" }} />
    </Box>
  );
}

export default BillDetails;
