import React, { useRef } from 'react'


const UseRef = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value, email.current.value);
    }

  return (
    <>
    <div>
    <h1>UseRef Example</h1>
    </div>
    <form onSubmit={handleFormSubmit}> 
        
            <input type="text" name="username" placeholder="Username" required ref={username}/>
            <input type="email" name="email" placeholder="Email" required ref= {email}/>
            <input type="password" name="password" placeholder="Password" required ref={password}/>
            <button type="submit">Submit</button>
        
    </form>
    </>
  )
}

export default UseRef;