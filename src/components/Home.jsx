
import React from 'react'
import { useContext } from 'react';
import { AppContext } from './ContextApi';

const Home = () => {
    
   const {myName, myAge} = useContext(AppContext)
  return (
    <div>Home of context Api. My name is {myName}. i am {myAge} yrs old.</div>
  )
}

export default Home