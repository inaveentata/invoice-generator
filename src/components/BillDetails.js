import React,{useState} from "react";
import { Stack, Box, TextField, TextareaAutosize, Typography } from "@mui/material"; 
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const BillDetails = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [paymentTerms, setPaymentTerms] = useState('')
  const [poNumber, setPoNumber] = useState('')
  return (
    <Box
      flexDirection={{ xs: "column", md: "row" }}
      sx={{ display: "flex", mt: "1rem", justifyContent: "space-between" }}
      spacing={{ md: 2 }}
    >
      <Stack width={{ md: "55%" }}>
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            mb: "10px",
          }}
        >
          <Typography component="label" sx={{ mr: "1rem" }}>
            Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            mb: "10px",
          }}
        >
          <Typography component="label">Payment Terms</Typography>
          <TextField
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
            type="text"
            size="small"
            sx={{ ml: "1rem" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            mb: "10px",
          }}
        >
          <Typography component="label" sx={{ mr: "1rem" }}>
            Due Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Due Date"
              value={endDate}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              minDate={startDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            mb: "10px",
          }}
        >
          <Typography component="label">PO Number</Typography>
          <TextField
            value={poNumber}
            onChange={(e) => setPoNumber(e.target.value)}
            type="text"
            size="small"
            sx={{ ml: "1rem" }}
          />
        </Box>
        {/* <BillDateSingle
          text="Date"
          type="date"
          value={startDate}
          setValue={setStartDate}
        />
        <BillDateSingle text="Payment Terms" />
        <BillDateSingle
          text="Due Date"
          type="date"
          value={endDate}
          setValue={setEndDate}
          extraProp={startDate}
        />
        <BillDateSingle text="PO Number" /> */}
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

/* function BillDateSingle({text,type,value,setValue,extraProp}) {
  return (
    <Box sx={{ display: "flex", alignItems:'center', justifyContent: "end",mb:'3px' }}>
      <Typography component='label'>{text }</Typography>
      <TextField value={value} onChange={(e)=>setValue(e.target.value)} type={type} minDate={extraProp} size="small" sx={{ml:'1rem', width: "38%" }} />
    </Box>
  );
} */

export default BillDetails;
