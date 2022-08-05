import React, { useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box, Typography, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CurrencyContext } from "../CurrencyContextWrapper";

const OutputItem = (props) => {
  const { itemsData, handleEdit, handleDelete } = props;
  return (
    <Stack>
      {itemsData.map((item) => (
        <SingleItem
          key={item.id}
          id={item.id}
          description={item.description}
          quantity={item.quantity}
          rate={item.rate}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </Stack>
  );
};

export default OutputItem;

function SingleItem(props) {
  const { id, description, quantity, rate, handleEdit, handleDelete } = props;
  let { value } = useContext(CurrencyContext);
  const symbol = value.slice(4, -1);
  value = value.slice(0, 3);

  return (
    <Box
      sx={{
        mt: "0.2rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        border: '1px solid #eee',borderRadius:'0.2rem',padding:'0.1rem 0.2rem'
        
      }}
    >
      <Typography sx={{width:'40%'}} variant="subtitle1">{description}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "30%",
          my: { xs: "0.5rem", md: "0" },
        }}
      >
        <Typography>{quantity}</Typography>
        <CloseIcon fontSize="small" />
        <Typography>
          {symbol} {rate}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "15%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="subtitle2" component="span">
          {value} {+quantity * +rate}.00
        </Typography>
      </Box>
      <Box
        component="article"
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <Box title="Edit" component="span" onClick={() => handleEdit(id)}>
          <EditIcon color="primary" />
        </Box>
        <Box title="Delete" component="span" onClick={() => handleDelete(id)}>
          <DeleteForeverIcon color="error" />
        </Box>
      </Box>
    </Box>
  ); 
}
