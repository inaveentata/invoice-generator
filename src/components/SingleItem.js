import React,{useContext} from 'react'
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CurrencyContext } from "./CurrencyContextWrapper";

 

function SingleItem(props) {
  const {quantity,setQuantity,rate,setRate} = props
  let { value } = useContext(CurrencyContext);
  const symbol = value.slice(4,-1)
  value = value.slice(0,3)

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
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          size="small"
          sx={{ order: { xs: "3", md: "1" } }}
        />
        <CloseIcon fontSize="small" sx={{ order: { xs: "2" } }} />
        <TextField
          value={rate}
          onChange={(e) => setRate(+e.target.value)}
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
        <Typography variant="subtitle2" component="span">
          {value} {quantity * rate}.00
        </Typography>
      </Box>
    </Box>
  );
};


export default SingleItem
