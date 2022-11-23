import React, { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import { useFormContext } from "react-hook-form";
import { Context } from "../ContextWrapper";

const InvoiceHeader = () => {
  //   const { files, setFiles } = useContext(Context);
  const { register } = useFormContext();

  /* const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps */

  //   const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box
      display="flex"
      justifyContent={{ md: "space-between" }}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box
        sx={{ width: "10rem", order: { xs: "2", md: "1" } }}
        // {...getRootProps()}
      >
        {/*         <label htmlFor="contained-button-file">
          <input id="contained-button-file" {...getInputProps()} />
          {files.length ? (
            files.map((file) => (
              <Box
                mt={2}
                textAlign="center"
                key={file.name}
                sx={{ border: "1px solid" }}
              >
                <img
                  src={file.preview}
                  alt={file.name}
                  height="100px"
                  width="100%"
                />
              </Box>
            ))
          ) : (
            <Button
              variant="outlined"
              component="span"
              sx={{
                height: "100%",
                border: "1px solid #ced4da",
                bgcolor: "#e9ecef",
                opacity: "0.8",
                textTransform: "capitalize",
                color: "#444",
                "&:hover": {
                  border: "1px solid #ced4da",
                  bgcolor: "#e9ecef",
                  opacity: "1",
                },
              }}
            >
              + Add Your Logo
            </Button>
          )}
        </label> */}
      </Box>
      <Box
        sx={{
          order: { xs: "1" },
          display: "flex",
          flexDirection: "column",
          width: { xs: "auto", md: "50%" },
        }}
      >
        <TextField
          fullWidth
          size="small"
          {...register("invoiceTitle", {
            value: "INVOICE",
          })}
        />
        <TextField
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TagIcon
                  style={{
                    fontSize: "2rem",
                    marginLeft: "-10",
                    backgroundColor: "#ccc",
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "50%",
            my: "1rem",
            alignSelf: { xs: "start", md: "end" },
            fontSize: "100%",
          }}
          {...register("invoiceNumber", {
            value: 1,
          })}
        />
      </Box>
    </Box>
  );
};

export default InvoiceHeader;
