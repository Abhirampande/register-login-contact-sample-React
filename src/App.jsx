
import './App.css'
import Registration from './components/Registration'
import RegistrationForm from './components/RegistrationForm'
import Todo from './components/todo'
import LoginForm from './components/LoginForm'
import ContactForm from './components/ContactForm'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import Index from './components/UseId/index.jsx'
import ContextApi from './components/ContextApi.jsx'
import Home from './components/Home.jsx'

function App() {

  return (
    <section>
      <ContextApi>
        <Home></Home>
      </ContextApi>
      <Todo></Todo>
      <UseEffect></UseEffect>
      <LoginForm></LoginForm>
      <UseRef></UseRef>
      <Registration></Registration>
      <ContactForm></ContactForm>
      <Index></Index>
      <RegistrationForm></RegistrationForm>
      
    </section>
  )
}

export default App
