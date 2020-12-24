import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

class Login extends Component {
    user = {
        email: 'admin@demo.com',
        password: 'demo'
    }
    handleClick = (e) => {
        console.log(e)
        Router.replace('/index')
    }
    render() {
        return (
            <div className='login p-3'>
                <div className="wrapper--absolute text-right justify-content-center py-2 px-1">
                    <span className="font-weight-bold text-dark-50">Don't have an account yet?</span>
                    <Link href="/auth/register">
                        <a className="font-weight-bold ml-2">Sign Up!</a>
                    </Link>
                </div>
                <div className='login-form'>
                    <div className="text-center mb-5">
                        <h3 className="font-size-h1">Login Account</h3>
                        <p className="text-muted font-weight-bold">Enter your username and password</p>
                    </div>
                    <Card className='mb-4 border-0'>
                        <CardBody className="card-alert">
                            Use account <span>admin@demo.com</span> and password <span>demo</span> to continue.
                        </CardBody>
                    </Card>
                    <Form>
                        <FormGroup>
                            <Input type="email" name="email" id="exampleEmail" defaultValue={this.user.email} placeholder="Email" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Input type="password" name="password" id="examplePassword" defaultValue={this.user.password} placeholder="Password" />
                        </FormGroup>
                        {' '}
                        <div className='action d-flex align-items-center'>
                            <Link href='/auth/forgot-password'>
                                <a>Forgot Password</a>
                            </Link>
                            <button className='btn btn-primary' onClick={(e) => this.handleClick(e)}>Sign In</button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login