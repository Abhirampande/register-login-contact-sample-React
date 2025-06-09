import React from 'react'
import { useEffect } from 'react'

const UseEffect = () => {

    useEffect(() => {
        console.log('Component mounted or updated');
    }, []);


  return (
    <div>UseEffect</div>
  )
}

export default UseEffect