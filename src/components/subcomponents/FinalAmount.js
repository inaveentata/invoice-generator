import React, { useContext } from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  InputAdornment,TextareaAutosize
} from "@mui/material";
import { Context } from "../ContextWrapper";
import { useFormContext } from "react-hook-form";


const FinalAmount = () => {
  let {
    value,
    itemsData,
    discount,
    setDiscount,
    tax,
    setTax,
    shipping,
    setShipping,
    amountPaid,
    setAmountPaid,
  } = useContext(Context);
  const total = itemsData
    .map((item) => +item.quantity * +item.rate)
    .reduce((acc, cur) => acc + cur, 0);

  
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
          placeHoldertext="Notes-any relevant information not already covered"
        />
        <FinalBillTerms
          text="Terms"
          placeHoldertext="Terms and conditions - late fees, payment methods, delivary schedule"
        />
      </Stack>
      <Stack mt="1rem" alignSelf="flex-end" width={{ md: "40%" }}>
        <FinalBillComponents text="Subtotal" type={value} amount={total.toFixed(2)} />
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
          amount={(total - +discount + +tax + +shipping).toFixed(2)}
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
          amount={(total - +discount + +tax + +shipping - +amountPaid).toFixed(
            2
          )}
        />
      </Stack>
    </Box>
  );
};

//Final Bill terms
function FinalBillTerms({ placeHoldertext, text }) {
    const { register } = useFormContext();
  return (
    <Box mt="1rem">
      <Typography component="label">{text}</Typography>
      <TextareaAutosize
        style={{ padding: "0.5rem", width: "100%" }}
        minRows={4}
        maxRows={4}
        aria-label="bill info"
        placeholder={placeHoldertext}
        {...register(text)}
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
          // type='number'
          value={value}
          onChange={(e) =>
            setValue(
              e.target.value.match(/^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/)
                ? e.target.value
                : ""
            )
          }
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
          {type} {amount}
        </Typography>
      )}
    </Box>
  );
}

export default FinalAmount;
