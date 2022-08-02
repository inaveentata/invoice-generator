import React,{useState} from 'react'
import { Select, MenuItem,Stack,Typography } from '@mui/material'
import { currencyData } from '../data/currencyData';


const CurrencyType = () => {
  const [value, setValue] = useState()
  const currency = Object.values(currencyData).map((item) => {
    return <MenuItem key={item.code} value={item.code} >{`${item?.code}(${item?.symbol_native})`}</MenuItem>;
  })
  return (
    <Stack alignItems='center' sx={{mt:'1rem'}}> 
      <Typography variant='subtitle1' >Currency</Typography>
      <Select
        sx={{ my: '1rem', height:'2rem', width:{xs:'10rem',md:'5rem'}}}
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