import React, { useContext, useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { CurrencyContext } from "./CurrencyContextWrapper";

const FinalAmount = (props) => {
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [amountPaid, setAmountPaid] = useState(0);
  let { value } = useContext(CurrencyContext);
  const symbol = value.slice(4, -1);
  value = value.slice(0, 3); 
  return ( 
    <Box
      flexDirection={{ xs: "column", md: "row" }}
      sx={{ display: "flex", mt: "1rem", justifyContent: "space-between" }}
      spacing={{ md: 2 }}
    >
      <Stack width={{ md: "55%" }}>
        <FinalBillTerms
          text="Notes"
          placeHoldertext="Notes-any relevant information not already coverd"
        />
        <FinalBillTerms
          text="Terms"
          placeHoldertext="Terms and conditions - late fees, payment methods, delivary schedule"
        />
      </Stack>
      <Stack mt="1rem" alignSelf="flex-end" width={{ md: "40%" }}>
        <FinalBillComponents
          text="Subtotal"
          type={value}
          amount={props.rate * props.quantity}
        />
        <FinalBillComponents
          text="Discount"
          isEditable
          type={symbol}
          value={discount}
          setValue={setDiscount}
        />
        <FinalBillComponents
          text="Tax"
          isEditable
          type={symbol}
          value={tax}
          setValue={setTax}
        />
        <FinalBillComponents
          text="Shipping"
          isEditable
          type={symbol}
          value={shipping}
          setValue={setShipping}
        />
        <FinalBillComponents
          text="Total"
          type={value}
          amount={props.rate * props.quantity - discount + tax + shipping}
        />
        <FinalBillComponents
          text="Amount Paid"
          isEditable
          type={symbol}
          value={amountPaid}
          setValue={setAmountPaid}
        />
        <FinalBillComponents
          text="Balance Due"
          type={value}
          amount={
            props.rate * props.quantity - discount + tax + shipping - amountPaid
          }
        />
      </Stack>
    </Box>
  );
};

//Final Bill terms
function FinalBillTerms({ placeHoldertext, text }) {
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
function FinalBillComponents({
  text,
  isEditable,
  type,
  amount = 0,
  value,
  setValue,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: "3px",
      }}
    >
      <Typography component="label">{text}</Typography>
      {isEditable ? (
        <TextField
          type='text'
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          size="small"
          sx={{ ml: "1rem", width: "38%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{type}</InputAdornment>
            ),
          }}
        />
      ) : (
        <Typography variant="subtitle1" component="span">
          {type} {amount}.00
        </Typography>
      )}
    </Box>
  );
}

export default FinalAmount;
