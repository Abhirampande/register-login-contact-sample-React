// real type of making the register page using reactjs
import { useState } from 'react'

const RegistrationForm = () => {

    const [user, setUser] = useState({
        FullName: "",
        Email: "",
        Password: ""
    });
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;

       setUser((prevUser) => ({ ...prevUser, [name]: value

       }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("Form Data Submitted: ", user);
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
              value={user.fullName}
              onChange={handleInputChange}
            />
            <input type="email" name="Email" placeholder="Email" 
              className='registration-input'
              autoComplete='off'
              required
              value={user.email}
              onChange={handleInputChange}
            />
            <input type="password" name='Password' placeholder="Password" 
              className='registration-input'
              autoComplete='off'
              required
              value={user.password}
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

export default RegistrationForm;