import { React, useState } from 'react'
import "./entry.style.css"
import { Jumbotron } from "react-bootstrap";
import { Login } from '../../component/login/Login.component'
import { ResetPassword } from '../../component/password reset/PasswordReset.component'

export const Entry = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFormLoad] = useState("login");

  const handleOnchange = e => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break

      default:
        break
    }

  };

  const handleOnSubmit = e => {
    e.preventDefault()

    if (!email || !password) {
      alert("Fill all the form")
    }
    // TODO call api to submit the form
    console.log(email, password);
  };
  
  const handleOnResetSubmit = e => {
    e.preventDefault()

    if (!email) {
      alert("Fill all the form")
    }
    // TODO call api to submit the form
    console.log(email);
  };

  const formSwitcher = frmtype => {
    setFormLoad(frmtype)
  }
  return (
    <div className='entry-page bg-info'>
      <Jumbotron className='form-box'>

        {frmLoad === 'login' &&
          <Login handleOnchange={handleOnchange} email={email} pass={password}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
          ></Login>}

        {frmLoad === 'reset' &&
          <ResetPassword handleOnchange={handleOnchange} email={email}
          handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
          ></ResetPassword>}
      </Jumbotron>
    </div>
  )
}
