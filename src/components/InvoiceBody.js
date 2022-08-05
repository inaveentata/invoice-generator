import React from "react";
import { Stack } from "@mui/material";
import InvoiceMain from "./InvoiceMain";
import InvoiceAside from "./InvoiceAside";
import { useForm, FormProvider } from "react-hook-form";

const InvoiceBody = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            py: "3rem",
            px: "12%",
            background: "linear-gradient(180deg,#f3f5f7 0,#dfe3e8 100%)",
          }}
        >
          <InvoiceMain />
          <InvoiceAside />
        </Stack>
      </form>
    </FormProvider>
  );
};

export default InvoiceBody;
