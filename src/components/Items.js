import React from "react";
import { Button, Stack } from "@mui/material";
import SingleItem from './SingleItem'
import InputItem from './InputItem'
 


/* 
description={item.description}
        quantity={item.quantity}
        rate={item.rate}
        handleEdit={handleEdit}
        itemsData={itemsData}
        handleDelete={handleDelete}
        handleChange={handleChange}
        handleAdd={handleAdd}

*/
const Items = (props) => {
  const {
    description,
    quantity,
    rate,
    handleChange,
    handleAdd,
    itemsData,
    handleEdit,handleDelete,
  } = props;
  return (
    <Stack>
      <InputItem
        description={description}
        quantity={quantity}
        rate={rate}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />

      {/* <SingleItem /> */}
      {/* <Button
        sx={{
          width: "8rem",
          color: "#fff",
          textTransform: "capitalize",
          p: "0.2rem 0.5rem",
          bgcolor: "#009e74",
          border: "1px solid #10806f",
          fontSize: "0.9rem",
          fontWeight: "600",
          mt: "0.75rem",
          "&:hover": {
            bgcolor: "#009e74",
            opacity: "0.8",
          },
        }}
      >
        + Line Item
      </Button> */}
    </Stack>
  );
}

export default Items;
