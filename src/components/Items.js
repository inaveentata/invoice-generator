import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { Button, Stack } from "@mui/material";
import SingleItem from './SingleItem'

const Items = () => {
  const [numOfItems, setNumOfItems] = useState(1)
   let ids = []
  for (let i = 1; i <= numOfItems; i++){
    const id = uuidv4()
   ids.push(id)

  }
  return (
    <Stack>
      {ids.map((id) => (
        <SingleItem key={id} />
      ))}
      <Button
        onClick={()=> setNumOfItems(prev=>prev+1)}
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
      </Button>
    </Stack>
  );
}

export default Items;
