import React from 'react'
import {Stack,Typography } from '@mui/material'

const Footer = () => {
  return (
    <Stack
      direction={{ md: "row" }}
      spacing={{ md: 3 }}
      sx={{ background: "#ddd", p: "3rem 15%" }}
    >
      <Stack spacing={2}>
        <Typography>USE INVOICE GENERATOR</Typography>
        <Typography>Invoice Template</Typography>
        <Typography>How to Use</Typography>
        <Typography>Upgrade</Typography>
        <Typography>Release Notes</Typography>
        <Typography>Developer API</Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography>Eduction</Typography>
        <Typography>Invoice Guide</Typography>
        <Typography>Blog</Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography>All rights reserved</Typography>
        <Typography>Terms of Use</Typography>
        <Typography>Made By Naveen</Typography>
      </Stack>
    </Stack>
  );
}

export default Footer