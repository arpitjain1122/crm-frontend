import { React, useState} from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col, Form,Button}from "react-bootstrap"
import { propTypes } from 'react-bootstrap/esm/Image'

export const Login = ({handleOnchange,handleOnSubmit, email , pass}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Client login</h1>
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
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type = "password"
                    name="password"
                    onChange={handleOnchange}
                    value={pass}
                    placeholder='Enter Password'
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
            <a href='#!'> Forgot Password</a>
            </Col>
        </Row>
    </Container>
  )
}

Login.protoTypes = {

    handleOnchange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}