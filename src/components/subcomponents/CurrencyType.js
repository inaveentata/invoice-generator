import React from 'react'
import { Select, MenuItem,Stack,Typography } from '@mui/material'
import { useFormContext,Controller } from 'react-hook-form';


 
const CurrencyType = () => {
  const { getValues,control } = useFormContext()
  const currencyList = getValues("currencyList");
  const currency = currencyList.map((currency) => {
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
        name="currency-type"
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
}

export default CurrencyType