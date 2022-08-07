import React,{useContext} from 'react'
import { Select, MenuItem,Stack,Typography } from '@mui/material'
import currencyOptionsList from "../../data/currencyData";
import { Context } from '../ContextWrapper'



const CurrencyType = () => {
  const {value, setValue} = useContext(Context)
  const currency = currencyOptionsList.map((currency) => {
      
      return (
        <MenuItem
          key={currency.value}
          value={`${currency?.value}(${currency?.symbol})`}
        >{`${currency?.value}(${currency?.symbol})`}</MenuItem>
      );
      
  });
  return (
    <Stack alignItems='center' sx={{mt:'1rem'}}> 
      <Typography variant='subtitle1' >Currency</Typography>
      <Select
        sx={{ my: '1rem', height:'2rem', width:{xs:'10rem',md:'80%'}}}
      labelId="currency-type"
      id="currency-type"
      value={value}
      label="currency"
      onChange={(e)=>setValue(e.target.value)}
      >

      {
        currency
      }
    </Select>
      </Stack>
  );
}

export default CurrencyType