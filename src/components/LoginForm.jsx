import './LoginForm.css';
import React, { useState } from 'react';


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (event) => {

        event.preventDefault();

        const loginData = {
            email,
            password,
        }

        console.log("Login Data Submitted: ", loginData);
    };


  return (
     <section className="login">
        <header className="login-header">
            <h1>Login</h1>
            <p>Welcome back! Please login to continue</p>
        </header>
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
            <div>
                <input type="email" name="Email" placeholder="Email" 
                className='login-input'
                autoComplete='off'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" name='Password' placeholder="Password" 
                className='login-input'
                autoComplete='off'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <div className='button'>
                <button type="submit">Login</button>
                </div>
            </div>
            </form>
        </section>
        </section>
      
  )
};

export default LoginForm;