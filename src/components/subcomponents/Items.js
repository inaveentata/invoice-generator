import React, { useContext } from "react";
import {
  Stack,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Context } from "../ContextWrapper";

const Items = () => {
  let { value, handleChange, handleAddItem, itemsData, handleDelete } =
    useContext(Context);
  const symbol = value.slice(4, -1);
  value = value.slice(0, 3);

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
      {itemsData.map((item) => (
        <Box
          key={item.id}
          sx={{
            mt: "0.2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "40%" }}
            size="small"
            type={"text"}
            name="description"
            placeholder="Description of the product..."
            value={item.description}
            onChange={(e) => handleChange(item.id, e)}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              m: "0 0.5rem",
              width: "35%",
            }}
          >
            <TextField
              sx={{ width: "50%" }}
              size="small"
              name="quantity"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleChange(item.id, e)}
            />
            <TextField
              sx={{ width: "50%", m: "0 0.5rem" }}
              size="small"
              name="rate"
              value={item.rate}
              onChange={(e) => handleChange(item.id, e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{symbol}</InputAdornment>
                ),
              }}
            />
          </Box>
          <Typography sx={{ width: "20%" }}>
            {value} {(+item.rate * +item.quantity).toFixed(2)}
          </Typography>

          {itemsData.length !== 1 && (
            <Box
              sx={{
                color: "#009e74",
                cursor: "pointer",
                opacity: "0",
                "&:hover": {
                  opacity: "1",
                },
              }}
              component="span"
              onClick={() => handleDelete(item.id)}
            >
              <CloseIcon fontSize="small" />
            </Box>
          )}
        </Box>
      ))}
      <Button
        sx={{
          width: "7rem",
          color: "#fff",
          textTransform: "capitalize",
          bgcolor: "#009e74",
          border: "1px solid #10806f",
          fontSize: "0.9rem",
          fontWeight: "600",
          mt: "0.2rem",
          "&:hover": {
            bgcolor: "#009e74",
            opacity: "0.8",
          },
        }}
        onClick={handleAddItem}
      >
        + Line Item
      </Button>
    </Stack>
  );
};

export default Items;
