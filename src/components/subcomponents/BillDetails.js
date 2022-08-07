import React, { useContext } from "react";
import {
  Stack,
  Box,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormContext } from "react-hook-form";
import { Context } from "../ContextWrapper";

const BillDetails = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(Context);
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  return (
    <Box
      flexDirection={{ xs: "column", md: "row" }}
      sx={{ display: "flex", mt: "1rem", justifyContent: "space-between" }}
      spacing={{ md: 2 }}
    >
      <Stack width={{ md: "50%" }}>
        <TextField
          type="text"
          multiline
          color={errors.invoiceFrom && "error"}
          placeholder="Who is this invoice from? (required)"
          size="large"
          sx={{ width: { xs: "100%" } }}
          {...register("invoiceFrom", { required: "From is Required" })}
          onKeyUp={() => {
            trigger("invoiceFrom");
          }}
        />
        {errors.invoiceFrom && (
          <small style={{ color: "red" }}>{errors.invoiceFrom.message}</small>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box width={{ md: "45%" }} mt="1rem">
            <Typography component="label">Bill To</Typography>
            <TextareaAutosize
              style={{
                outline: "none",
                padding: "0.5rem",
                width: "100%",
                borderColor: errors.billTo && "red",
              }}
              minRows={4}
              maxRows={4}
              aria-label="bill info"
              placeholder="Who is this invoice from to?(required)"
              {...register("billTo", { required: "Bill To is Required" })}
              onKeyUp={() => {
                trigger("billTo");
              }}
            />
            {errors.billTo && (
              <small style={{ color: "red" }}>{errors.billTo.message}</small>
            )}
          </Box>
          <Box width={{ md: "45%" }} mt="1rem">
            <Typography component="label">Ship To</Typography>
            <TextareaAutosize
              style={{ padding: "0.5rem", width: "100%" }}
              minRows={4}
              maxRows={4}
              aria-label="bill info"
              placeholder="(optional)"
              {...register("shipTo")}
            />
          </Box>
        </Box>
      </Stack>
      <Stack mt="1rem" alignSelf="flex-end" width={{ md: "40%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label" sx={{ mr: "1rem" }}>
            Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={startDate || null}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  required
                  size="small"
                  sx={{ ml: "1rem", width: "38%" }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label">Payment Terms</Typography>
          <TextField
            type="text"
            size="small"
            sx={{ ml: "1rem", width: "38%" }}
            {...register("PaymentTerms")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label" sx={{ mr: "1rem" }}>
            Due Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={endDate || null}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              minDate={startDate}
              renderInput={(params) => (
                <TextField
                  required
                  size="small"
                  sx={{ ml: "1rem", width: "38%" }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "3px",
          }}
        >
          <Typography component="label">PO Number</Typography>
          <Stack sx={{ ml: "1rem", width: "38%" }}>
            <TextField
              type="text"
              size="small"
              color={errors.PONumber && "error"}
              {...register("PONumber", {
                required: "PO Number is Required",
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "Only alphabets and numbers are allowed",
                },
              })}
              onKeyUp={() => {
                trigger("PONumber");
              }}
            />

            {errors.PONumber && (
              <small style={{ color: "red" }}>{errors.PONumber.message}</small>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default BillDetails;
