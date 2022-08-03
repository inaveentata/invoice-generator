import React,{ createContext,useState } from 'react'

export const CurrencyContext = createContext()

const CurrencyContextWrapper = ({children}) => {
    const [value,setValue] = useState('Hello')
  return (
      <CurrencyContext.Provider value={{value,setValue}}>
          {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyContextWrapper