import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import { Box,TextField,Button } from '@mui/material'

const Input = styled("input")({
  display: "none",
});


const InvoiceHeader = () => {
    const [title, setTitle] = useState('INVOICE')
  return (
    <Box
      display="flex"
      justifyContent={{ md: "space-between" }}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box sx={{ order: { xs: "2", md: "1" } }}>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button
            variant="outlined"
            component="span"
            sx={{
              height: "100%",
              border: "1px solid #ced4da",
              bgcolor: "#e9ecef",
              opacity: '0.8',
              textTransform: 'capitalize',
              color:'#444',
              "&:hover": {
                border: "1px solid #ced4da",
                bgcolor: "#e9ecef",
                opacity:'1'
              },
            }}
          >
            + Add Your Logo
          </Button>
        </label>
      </Box>
      <Box
        sx={{
          order: { xs: "1" },
          display: "flex",
          flexDirection: "column",
          width: { xs: "auto", md: "50%" },
        }}
      >
        <TextField
          fullWidth
          size="small"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ textAlign: "right" }}
        />
        <TextField
          size="small"
          sx={{
            width: "50%",
            my: "1rem",
            alignSelf: { xs: "start", md: "end" },
          }}
        />
      </Box>
    </Box>
  );
}

export default InvoiceHeader