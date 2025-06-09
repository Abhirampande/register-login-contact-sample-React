import React from 'react'
import { createContext } from 'react'


 export const AppContext = createContext();


const ContextApi = ({children}) => {

    const myName = "Abhi";
    const myAge = 30;

    console.log(children);

  return (
    <AppContext.Provider value={{myName, myAge}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextApi;