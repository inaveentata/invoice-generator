import React, { useContext } from "react";
import {Stack, Box, TextField, InputAdornment, Button,Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CurrencyContext } from "../CurrencyContextWrapper";
 
const InputItem = (props) => {
  const { description, quantity, rate, handleChange, handleAdd,editItem } = props;
  let { value } = useContext(CurrencyContext);
  const symbol = value.slice(4, -1);
  return (
    <Stack>
      <Box
        sx={{
          mt: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItem: "center",
          bgcolor: "#333",
          borderRadius: "0.2rem",
          color: "#fff",
          padding: "0.1rem 1rem",
        }}
      >
        <Typography sx={{ width: "58%" }}>Item</Typography>
        <Typography sx={{ width: "15%" }}>Quantity</Typography>
        <Typography sx={{ width: "15%" }}>Rate</Typography>
        <Typography></Typography>
      </Box>
      <Box
        sx={{
          mt: "0.3rem",
          mb:'0.5rem',
          display: "flex",
          justifyContent: "space-between",
          alignItem: "center",
        }}
      >
        <TextField
          sx={{ width: "60%" }}
          name="description"
          value={description}
          onChange={handleChange}
          size="small"
          type={"text"}
          placeholder="Description of the product..."
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "30%",
            m: "0 0.5rem",
          }}
        >
          <TextField
            name="quantity"
            value={quantity}
            onChange={handleChange}
            size="small"
          />
          <CloseIcon fontSize="small" />
          <TextField
            name="rate"
            value={rate}
            onChange={handleChange}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{symbol}</InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            // width: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              // p: "0.2rem 0.5rem",
              bgcolor: "#009e74",
              border: "1px solid #10806f",
              fontSize: "0.9rem",
              fontWeight: "600",
              "&:hover": {
                bgcolor: "#009e74",
                opacity: "0.8",
              },
            }}
            onClick={handleAdd}
            type="submit"
          >
            {editItem ? "Edit" : "Add"}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default InputItem;

/* 
 return (
      <div>
        <input name='description' placeholder='Description'  type='text' value={description} onChange={handleChange} />
        <input name='quantity' placeholder='quantitiy' type='number' value={quantity} onChange={handleChange} />
        <input name='rate' placeholder='rate' type='number' value={rate} onChange={handleChange} />
        <button type='submit' onClick={handleAdd}>Add</button>
</div> 

*/
