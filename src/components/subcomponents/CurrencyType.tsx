import React from "react";
import { Select, MenuItem, Stack, Typography } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import currencyOptionsList from "../../data/currencyData";

const CurrencyType = () => {
  const { control } = useFormContext();
  const currency = currencyOptionsList.map((currency) => {
    return (
      <MenuItem
        key={currency.value}
        value={`${currency?.value}(${currency?.symbol})`}
      >{`${currency?.value}(${currency?.symbol})`}</MenuItem>
    );
  });
  return (
    <Stack alignItems="center" sx={{ mt: "1rem" }}>
      <Typography variant="subtitle1">Currency</Typography>
      <Controller
        control={control}
        name="currencyType"
        defaultValue={"INR(₹)"}
        render={({ field: { value, onChange, ref } }) => (
          <Select
            sx={{
              my: "1rem",
              height: "2rem",
              width: { xs: "10rem", md: "80%" },
            }}
            inputRef={ref}
            value={value}
            onChange={onChange}
          >
            {currency}
          </Select>
        )}
      />
    </Stack>
  );
};

export default CurrencyType;
