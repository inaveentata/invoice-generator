import React from 'react'
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


function SingleItem(){
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
        <TextField size="small" sx={{ order: { xs: "3",md:'1' } }} />
        <CloseIcon fontSize="small" sx={{ order: { xs: "2" } }} />
        <TextField
          size="small"
          sx={{ order: { xs: "1",md:'3' } }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
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
          US$0.00
        </Typography>
      </Box>
    </Box>
  );
};


export default SingleItem
