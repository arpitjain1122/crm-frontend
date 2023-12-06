import { React, useState} from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col, Form,Button}from "react-bootstrap"
import { propTypes } from 'react-bootstrap/esm/Image'

export const ResetPassword = ({handleOnchange,handleOnSubmit,formSwitcher, email }) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Reset Password</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type = "email"
                    name="email"
                    value={email}
                    onChange={handleOnchange}                   
                    placeholder='Enter Email'
                    required
                    />
                </Form.Group>
                
                <Button type="submit">Login</Button>
            </Form>
            <hr/>
            </Col>
        </Row>

        <Row>
            <Col>
            <a href='#!'onClick={() => formSwitcher('login')}> Login now</a>
            </Col>
        </Row>
    </Container>
  )
}

ResetPassword.protoTypes = {

    handleOnchange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    
}