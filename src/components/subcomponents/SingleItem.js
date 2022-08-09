import React from "react";
import {
  Stack,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFieldArray, useFormContext } from "react-hook-form";

const SingleItem = () => {
  const {
    getValues,
    watch,
    control,
    trigger,
    register,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itemsData",
  });
  let value = watch("currency-type") || "INR(₹)";
  const symbol = value?.slice(4, -1);
  value = value?.slice(0, 3);

  return (
    <Box>
      {fields.map((item, index) => {
        return (
          <Box
            key={item.id}
            sx={{
              mt: "0.2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack sx={{ width: "40%" }}>
              <TextField
                error={!!errors["itemsData"]?.[index]?.description}
                size="small"
                type={"text"}
                name={`itemsData[${index}]description`}
                placeholder="Description of the product..."
                defaultValue={item.description}
                {...register(`itemsData.${index}.description`, {
                  required: "Description is required",
                })}
              />
              {errors["itemsData"]?.[index]?.description && (
                <small style={{ color: "red" }}>
                  {errors["itemsData"]?.[index]?.description.message}
                </small>
              )}
            </Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                m: "0 0.5rem",
                width: "35%",
              }}
            >
              <Stack sx={{ width: "50%" }}>
                <TextField
                  size="small"
                  name={`itemsData[${index}]quantity`}
                  error={!!errors["itemsData"]?.[index]?.quantity}
                  placeholder="Quantity"
                  defaultValue={item.description}
                  {...register(`itemsData.${index}.quantity`, {
                    required: "Quantity is required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Only number are allowed",
                    },
                  })}
                  onKeyUp={() => {
                    trigger(`itemsData[${index}]quantity`);
                  }}
                />
                {errors["itemsData"]?.[index]?.quantity && (
                  <small style={{ color: "red" }}>
                    {errors["itemsData"]?.[index]?.quantity.message}
                  </small>
                )}
              </Stack>
              <Stack sx={{ width: "50%", m: "0 0.5rem" }}>
                <TextField
                  size="small"
                  name={`itemsData[${index}]rate`}
                  error={!!errors["itemsData"]?.[index]?.rate}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">{symbol}</InputAdornment>
                    ),
                  }}
                  defaultValue={item.rate}
                  {...register(`itemsData.${index}.rate`, {
                    required: "Rate is required",
                    pattern: {
                      value: /^\d+(\.\d{0,9})?$/,
                      message: "Only number and deciamals are allowed",
                    },
                  })}
                  onKeyUp={() => {
                    trigger(`itemsData[${index}]rate`);
                  }}
                />
                {errors["itemsData"]?.[index]?.rate && (
                  <small style={{ color: "red" }}>
                    {errors["itemsData"]?.[index]?.rate.message}
                  </small>
                )}{" "}
              </Stack>
            </Box>
            <Typography sx={{ width: "20%" }}>
              {value}{" "}
              {(
                +getValues(`itemsData.${index}.rate`) *
                +getValues(`itemsData.${index}.quantity`)
              ).toFixed(2)}
            </Typography>

            {fields.length !== 1 && (
              <Box
                sx={{
                  color: "#aaa",
                  cursor: "pointer",
                  opacity: "1",
                  "&:hover": {
                    color: "#009e74",
                  },
                }}
                component="span"
                onClick={() => remove(index)}
              >
                <CloseIcon fontSize="small" />
              </Box>
            )}
          </Box>
        );
      })}
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
        onClick={(e) => {
          e.preventDefault();
          append({
            description: "",
            quantity: "",
            rate: "",
          });
        }}
      >
        + Line Item
      </Button>
    </Box>
  );
};

export default SingleItem;
