import React from 'react'
import Header from './components/Header'
import InvoiceBody from './components/InvoiceBody'
import NavBar from './components/NavBar'

const InvoiceGenerator = () => {
  return (
    <>
      <NavBar />
      <Header />
      <InvoiceBody />
    </>
  )
}

export default InvoiceGenerator