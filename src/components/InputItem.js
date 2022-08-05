import React,{useContext} from 'react'
import {
  Box,
  TextField,
      InputAdornment,
      Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CurrencyContext } from "./CurrencyContextWrapper";



const InputItem = (props) => {
    const { description, quantity, rate, handleChange, handleAdd } = props
      let { value } = useContext(CurrencyContext);
      const symbol = value.slice(4, -1);
  return (
    <Box
      sx={{
        mt: "1rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
      }}
    >
      <TextField
        name='description'
        value={description}
        onChange={handleChange}
        size="small"
        sx={{ width: { sx: "100%", md: "50%" }, order: { xs: "3", md: "1" } }}
        type={"text"}
        placeholder="Description of the product..."
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "30%",
          order: { xs: "2" },
          my: { xs: "0.5rem", md: "0" },
        }}
      >
        <TextField
          
          name='quantity'
          value={quantity}
          onChange={handleChange}
          size="small"
          sx={{ order: { xs: "3", md: "1" } }}
        />
        <CloseIcon fontSize="small" sx={{ order: { xs: "2" } }} />
        <TextField
          name='rate'
          value={rate}
          onChange={handleChange}
          size="small"
          sx={{ order: { xs: "1", md: "3" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{symbol}</InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          width: "15%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          order: { md: "3" },
        }}
      >
        <Button onClick={handleAdd} type='submit'>Add</Button>
      </Box>
    </Box>
  )
}

export default InputItem

/* 
 return (
      <div>
        <input name='description' placeholder='Description'  type='text' value={description} onChange={handleChange} />
        <input name='quantity' placeholder='quantitiy' type='number' value={quantity} onChange={handleChange} />
        <input name='rate' placeholder='rate' type='number' value={rate} onChange={handleChange} />
        <button type='submit' onClick={handleAdd}>Add</button>
</div> 

*/