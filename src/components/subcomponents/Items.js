import React from "react";
import { Stack } from "@mui/material";
import OutputItem from './OutputItem'
import InputItem from './InputItem'
 
const Items = (props) => {
  const {
    description,
    quantity,
    rate,
    handleChange,
    handleAdd,
    itemsData,
    handleEdit,handleDelete,editItem
  } = props;
  return (
    <Stack>
      <InputItem
        description={description}
        quantity={quantity}
        rate={rate}
        handleChange={handleChange}
        handleAdd={handleAdd}
        editItem={editItem}
      />
      <OutputItem itemsData={itemsData} handleEdit={handleEdit} handleDelete={handleDelete} />
    </Stack>
  );
}

export default Items;
