import React from "react";
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
import { Controller } from "react-hook-form";

const BillDetails = () => {
  const {
    watch,
    control,
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  const startDate = watch("startDate");

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
                outlineColor: "blue",
                padding: "0.5rem",
                width: "100%",
                fontFamily: "sans-serif",
                fontSize: "1rem",
                letterSpacing: "1.2px",
                borderRadius: "0.35rem",
                borderColor: errors.billTo ? "#e53935" : "#ccc",
                borderWidth: errors.billTo && "0.13rem",
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
              style={{
                padding: "0.5rem",
                width: "100%",
                borderRadius: "0.35rem",
                borderColor: "#ccc",
                outlineColor: "blue",
                fontFamily: "sans-serif",
                fontSize: "1rem",
                letterSpacing: "1.2px",
              }}
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
          <Stack sx={{ ml: "1rem", width: "40%" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="startDate"
                control={control}
                defaultValue={null}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    value={field.value}
                    onChange={(e) => field.onChange(e)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        error={!!error}
                        {...register("startDate", {
                          required: "Date is requred",
                        })}
                      />
                    )}
                  />
                )}
              />
            </LocalizationProvider>
            {errors.startDate && (
              <small style={{ color: "red" }}>{errors.startDate.message}</small>
            )}
          </Stack>
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
            sx={{ ml: "1rem", width: "40%" }}
            {...register("paymentTerms")}
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
          <Stack sx={{ ml: "1rem", width: "40%" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="dueDate"
                control={control}
                defaultValue={null}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    value={field.value}
                    onChange={(e) => field.onChange(e)}
                    minDate={startDate}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        error={!!error}
                        {...register("dueDate", {
                          required: "Due date is requred",
                        })}
                      />
                    )}
                  />
                )}
              />
            </LocalizationProvider>
            {errors.dueDate && (
              <small style={{ color: "red" }}>{errors.dueDate.message}</small>
            )}
          </Stack>
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
          <Stack sx={{ ml: "1rem", width: "40%" }}>
            <TextField
              type="text"
              size="small"
              error={!!errors.poNumber}
              sx={{
                borderColor: errors.poNumber && "#e53935",
              }}
              {...register("poNumber", {
                required: "PO Number is Required",
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "Only alphabets and numbers are allowed",
                },
              })}
              onKeyUp={() => {
                trigger("poNumber");
              }}
            />

            {errors.poNumber && (
              <small style={{ color: "red" }}>{errors.poNumber.message}</small>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default BillDetails;
