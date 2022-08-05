import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import { Box } from "@mui/material";
import InvoiceHeader from "./InvoiceHeader";
import BillDetails from "./BillDetails";
import Items from "./Items";
import FinalAmount from "./FinalAmount";
   
const InvoiceMain = () => {
  const [itemsData, setItemsData] = useState([])
  const [item, setItem] = useState({
    id: uuid(),
    description: '',
    quantity: 0,
    rate: 0,
    editItem:false
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setItem({[name]:value})
  }
  const handleAdd = (e) => {
    e.preventDefault()
    const newItem = {
      id: item.id,
      description: item.description,
      quantity: item.quantity,
      rate:item.rate
    }
    setItemsData(prevData => ([...prevData, newItem]))
    setItem({
      id: uuid(),
      description: "",
      quantity: 0,
      rate: 0,
    });
  }
  const handleEdit = (id) => {
    const sortedItems = itemsData.filter((item) => item.id !== id)
    const itemEdit = itemsData.find((item) => item.id === id)
    setItemsData(sortedItems)
    setItem({
      description: itemEdit.description,
      quantity: itemEdit.quantity,
      rate: itemEdit.rate,
      id: itemEdit.id,
      editItem:true
    });
  }

  const handleDelete = (id) => {
    const sortedItems = itemsData.filter((item) => item.id !== id);
    setItemsData(sortedItems)
  }
  return (
    <Box
      // width={{ xs: "auto", md: "80%" }}
      sx={{
        border: "1px solid #aaa",
        bgcolor: "#fff",
        p: { xs: "1rem", md: "2rem" },
      }}
    >
      <InvoiceHeader />
      <BillDetails />
      <Items
        description={item.description}
        quantity={item.quantity}
        rate={item.rate}
        handleEdit={handleEdit}
        itemsData={itemsData}
        handleDelete={handleDelete}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <FinalAmount amount={itemsData} />
    </Box>
  );
}; 

export default InvoiceMain;
