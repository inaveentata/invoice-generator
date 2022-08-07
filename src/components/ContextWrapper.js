import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const Context = createContext();

const ContextWrapper = ({ children }) => {
  const [value, setValue] = useState("INR(₹)");
  const [discount, setDiscount] = useState('');
  const [tax, setTax] = useState('');
  const [shipping, setShipping] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [files, setFiles] = useState([]);
  const [itemsData, setItemsData] = useState([
    { id: uuid(), description: "", quantity: '', rate: '' },
  ]);
  const handleChange = (id, e) => {
    let { name, value } = e.target;
    setItemsData((prev) => {
      return prev.map((item) => {
        if (item.id !== id) {
          return item;
        }
        if (name === "description") {
          return {
            ...item,
            [name]: value,
          };
        } else {
          value = value.match(/^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/)
            ? value
            : "";
          return {
            ...item,
            [name]: value,
          };
        }
      });
    });
  };
  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      description: "",
      quantity: '',
      rate: '',
    };
    setItemsData((prev) => [...prev, newItem]);
  };

  const handleDelete = (id) => {
    if (itemsData.length === 1) {
      return;
    }
    setItemsData((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <Context.Provider
      value={{
        value,
        setValue,
        discount,
        setDiscount,
        tax,
        setTax,
        shipping,
        setShipping,
        amountPaid,
        setAmountPaid,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        itemsData,
        files, setFiles,
        handleChange,
        handleAddItem,
        handleDelete,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextWrapper;
