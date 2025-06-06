import React from 'react'
import { useState } from 'react'

const Registration = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'FullName':
                setFullName(value);
                break;

            case 'Email':
                setEmail(value);
                break;

            case 'Password':
                setPassword(value);
                break;

        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = {
            fullName,
            email,
            password
        }

        console.log("Form Data Submitted: ", formData);
    }


  return (
    <section className="registration">
      <header className="registration-header">
        <h1>Registration</h1>
        <p>Join us to start your journey</p>
      </header>
      <section className='form'>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input type="text" name='FullName' placeholder="Username" 
              className='registration-input'
              autoComplete='off'
              required
              value={fullName}
              onChange={handleInputChange}
            />
            <input type="email" name="Email" placeholder="Email" 
              className='registration-input'
              autoComplete='off'
              required
              value={email}
              onChange={handleInputChange}
            />
            <input type="password" name='Password' placeholder="Password" 
              className='registration-input'
              autoComplete='off'
              required
              value={password}
              onChange={handleInputChange}
            />
            <div className='button'>
            <button type="submit">Register</button>
            </div>
          </div>
        </form> 
      </section>
    </section>
  )
}

export default Registration