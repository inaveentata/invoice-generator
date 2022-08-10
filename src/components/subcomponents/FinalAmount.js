import React from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  TextareaAutosize,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FinalAmount = () => {
  const { control, watch } = useFormContext();
  const discount = watch("discount");
  const tax = watch("tax");
  const shipping = watch("shipping");
  const amountPaid = watch("amountPaid");
  const data = watch("itemsData");
  let value = watch("currency-type") || "INR(₹)";
  const symbol = value?.slice(4, -1);
  value = value?.slice(0, 3);
  const total = data
    .map((item) => +item.quantity * +item.rate)
    .reduce((acc, cur) => acc + cur, 0);

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label">Subtotal :</Typography>
          <Typography variant="subtitle1" component="span">
            {value} {total.toFixed(2)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label">Discount :</Typography>
          <Controller
            control={control}
            name="discount"
            defaultValue={""}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                value={value}
                onChange={onChange}
                type="number"
                error={error && error.message}
                size="small"
                sx={{ ml: "1rem", width: "38%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{symbol}</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label">Tax :</Typography>
          <Controller
            control={control}
            name="tax"
            defaultValue={""}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                value={value}
                onChange={onChange}
                type="number"
                error={error && error.message}
                size="small"
                sx={{ ml: "1rem", width: "38%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{symbol}</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label">Shipping :</Typography>
          <Controller
            control={control}
            name="shipping"
            defaultValue={""}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                value={value}
                onChange={onChange}
                type="number"
                error={error && error.message}
                size="small"
                sx={{ ml: "1rem", width: "38%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{symbol}</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label">Total :</Typography>
          <Typography variant="subtitle1" component="span">
            {value}{" "}
            {isNaN(total - +discount + +tax + +shipping)
              ? "0.00"
              : (total - +discount + +tax + +shipping).toFixed(2)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label">Amount Paid :</Typography>
          <Controller
            control={control}
            name="amountPaid"
            defaultValue={""}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                value={value}
                onChange={onChange}
                type="number"
                error={error && error.message}
                size="small"
                sx={{ ml: "1rem", width: "38%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{symbol}</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label">Balance :</Typography>
          <Typography variant="subtitle1" component="span">
            {value}{" "}
            {isNaN(total - +discount + +tax + +shipping - +amountPaid)? '0.00':(
              total - +discount + +tax + +shipping - +amountPaid
            ).toFixed(2)}
          </Typography>
        </Box>
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
        style={{
          padding: "0.5rem",
          width: "100%",
          borderRadius: "0.35rem",
          borderColor: "#ccc",
          outlineColor: "blue",
          fontFamily: "sans-serif",
          fontSize: "1rem",
          letterSpacing: "1.2px",
        }}
        minRows={4}
        maxRows={4}
        aria-label="bill info"
        placeholder={placeHoldertext}
        {...register(text.toLowerCase())}
      />
    </Box>
  );
}

export default FinalAmount;
