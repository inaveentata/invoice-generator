import React from 'react'
import { Stack } from '@mui/material'
import InvoiceMain from './InvoiceMain'
import InvoiceAside from './InvoiceAside'

const InvoiceBody = () => {
  return (
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{
          py: '3rem', px: '15%',
          background: 'linear-gradient(180deg,#f3f5f7 0,#dfe3e8 100%)'
      }}>
          <InvoiceMain />
          <InvoiceAside />
   </Stack>
  )
}

export default InvoiceBody