
import './App.css'
import Registration from './components/Registration'
import RegistrationForm from './components/RegistrationForm'
import Todo from './components/todo'
import LoginForm from './components/LoginForm'
import ContactForm from './components/ContactForm'

function App() {

  return (
    <section>
      <Todo></Todo>
      <LoginForm></LoginForm>
      <Registration></Registration>
      <ContactForm></ContactForm>
      <RegistrationForm></RegistrationForm>
      
    </section>
  )
}

export default App
