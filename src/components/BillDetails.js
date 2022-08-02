import React,{useState} from "react";
import { Stack, Box, TextField, TextareaAutosize } from "@mui/material"; 

const BillDetails = () => {
  const [date, setDate] = useState('Date')
  const [paymentTerms, setPaymentTerms] = useState("Payment Terms");
  const [dueDate, setDueDate] = useState('Due Date')
  const [poNumber, setPoNumber] = useState('PO Number')
  const [billTo, setBillTo] = useState('Bill To')
  const [shipTo, setShipTo] = useState('Ship To')
  return (
    <Stack direction={{ md: "row" }} sx={{ mt: "1rem" }} spacing={{ md: 2 }}>
      <Stack>
        <TextField 
          multiline
          placeholder='Who is this invoice from? (required)'
          size="large" sx={{ width: { xs: "100%", md: "90%" } }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <BillInfoSingle value={billTo } setValue={ setBillTo} text="Who is this invoice from to?(required)"/>
          <BillInfoSingle value={shipTo } setValue={ setShipTo} text='(optional)' />
        </Box>
      </Stack>
      <Stack mt='1rem'>
        <BillDateSingle value={date } setValue={ setDate} />
        <BillDateSingle value={paymentTerms } setValue={ setPaymentTerms} />
        <BillDateSingle value={dueDate } setValue={ setDueDate} />
        <BillDateSingle value={poNumber } setValue={ setPoNumber} />
      </Stack>
    </Stack>
  );
}; 

// Bill info , Bill

function BillInfoSingle({text='',value,setValue}) {
  return (
    <Box width={{ md: "45%" }} mt="1rem">
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        size="small"
        sx={{ width: { xs: "40%", md: "100%" } }}
      />
      <TextareaAutosize
        placeholder={text}
        style={{ padding: "0.5rem", width: "100%" }}
        minRows={4}
        maxRows={4}
        aria-label="bill info"
      />
    </Box>
  );
}

function BillDateSingle({value,setValue}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between",mb:'3px' }}>
      <TextField
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        size="small" sx={{ width: "60%" }}  />
      <TextField size="small" sx={{ width: "38%" }} />
    </Box>
  );
}

export default BillDetails;
