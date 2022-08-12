// import React, { useContext } from "react";
import { Stack } from "@mui/material";
import InvoiceMain from "./InvoiceMain";
import InvoiceAside from "./InvoiceAside";
// import { Context } from "./ContextWrapper";
import { useForm, FormProvider } from "react-hook-form";
import React from "react";


type ItemsData = {
  description: string
  quantity:string
  rate:string
};

type FormData = {
  amountPaid?: string;
  billTo?: string;
  currencyType?: string;
  discount?: string;
  dueDate?: Date | null;
  files?: [];
  invoiceFrom?: string;
  invoiceNumber?: number;
  invoiceTitle?: string;
  itemsData?: ItemsData[];
  notes?: string;
  paymentTerms?: string;
  poNumber?: string;
  shipTo?: string;
  shipping?: string;
  startDate?: Date | null;
  tax?: string;
  terms?: string;
};

const InvoiceBody = () => {
  //   const { files } = useContext(Context);
  const methods = useForm({
    defaultValues: {
      itemsData: [{ description: "", quantity: "", rate: "" }],
    },
    mode:'all'
  });
  const onSubmit = (data:FormData) => {
    const formData = {
      ...data,
      //   files,
    };
    console.log(formData);
  };
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
