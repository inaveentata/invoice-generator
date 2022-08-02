import React,{useState} from "react";
import { Box, Stack, TextField } from "@mui/material";

const FinalAmount = () => {
  const [notes, setNotes] = useState('Notes')
  const [terms, setTerms] = useState('Terms')
  return (
    <Stack direction={{ md: "row" }} sx={{ mt: "1rem" }} spacing={{ md: 2 }}>
      <Stack>
        <FinalBillTerms
          value={notes}
          setValue={setNotes}
          text="Notes-any relevant information not already coverd"
        />
        <FinalBillTerms
          value={terms}
          setValue={setTerms}
          text="Terms and conditions - late fees, payment methods, delivary schedule"
        />
      </Stack>
      <Stack mt="1rem">
        <FinalBillComponents />
        <FinalBillComponents isEditable />
        <FinalBillComponents isEditable />
        <FinalBillComponents isEditable />
        <FinalBillComponents />
        <FinalBillComponents isEditable />
        <FinalBillComponents />
      </Stack>
    </Stack>
  );
};

//Final Bill terms
function FinalBillTerms({text,value,setValue}) {
  return (
    <Box mt="1rem">
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        size="small"
        sx={{ width: "40%" }}
      />
      <TextField
        placeholder={text}
        size="large"
        multiline
        sx={{ width: "100%" }}
      />
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
