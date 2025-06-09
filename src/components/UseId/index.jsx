import React from 'react'
import { useId } from 'react'


const UseId = () => {

    const id = useId();
    //const usernameId = useId();
    //const emailId = useId();
    //const passwordId = useId();
    //console.log(usernameId, emailId, passwordId);

  return (
    <div>
        <h1>
            UseId Example
        </h1>
        <div>
            <form>
                <div>
                    <label htmlFor={id + "usernameId"}>Username:</label>
                <input type="text" id={id + "usernameId"} name='username' placeholder="Username" required />
                </div>
                <div>
                    <label htmlFor={id + "emailId"}>Email:</label>
                <input type="email" id={id + "emailId"} name='email' placeholder="Email" required />
                </div>
                <div>
                    <label htmlFor={id + "passwordId"}>Password:</label>
                <input type="password" id={id + "passwordId"} name='password' placeholder="Password" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UseId