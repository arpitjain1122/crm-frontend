import { React, useState } from 'react'
import "./entry.style.css"
import { Jumbotron } from "react-bootstrap";
import { Login } from '../../component/login/Login.component'
import { ResetPassword } from '../../component/password reset/PasswordReset.component'

export const Entry = () => {
  // yaha pr hum values ko store krke rakhte hai using useState feature jo ki web page ki values ko store krta hai variables mein
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFormLoad] = useState("login");

  // Events banaenge function mein jo values ko input box se read krenge aur useState variables ko denge
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
  // yaha pr page call krna hota hai, aur saare functions and variables pass krne hote hai as arguments to a function

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
