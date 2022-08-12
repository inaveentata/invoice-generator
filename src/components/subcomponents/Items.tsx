import React from "react";
import {
  Stack,
  Box,
  Typography,
} from "@mui/material";
// import SingleItem from "./SingleItem";

const Items = () => {
  
  return (
    <Stack>
      <Box
        sx={{
          mt: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#333",
          borderRadius: "0.2rem",
          color: "#fff",
          padding: "0.1rem 0.5rem",
        }}
      >
        <Typography sx={{ width: "40%" }}>Item</Typography>
        <Typography sx={{ width: "15%" }}>Quantity</Typography>
        <Typography sx={{ width: "15%" }}>Rate</Typography>
        <Typography sx={{ width: "20%" }}>Amount</Typography>
      </Box>
      {/* <SingleItem /> */}
    </Stack>
  );
};

export default Items;
