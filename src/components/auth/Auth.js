import React, { Component, Fragment, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import Link from 'next/link'
import { Container, Card, CardBody, Row, Col } from 'reactstrap'
import './style.scss';

let DynamicComponentWithNoSSR = dynamic(
    () => import('./Login'),
    // { ssr: false }
)

class Auth extends Component {
    componentDidMount() {
        const { asPath } = Router;
        if (asPath === '/auth') {
            Router.push('/auth/login')
        }
    }

    render() {
        switch (this.props.router.asPath) {
            case '/auth/forgot-password':
                DynamicComponentWithNoSSR = dynamic(
                    () => import('./ForgotPassword'),
                    // { ssr: false }
                );
                break;
            case '/auth/register':
                DynamicComponentWithNoSSR = dynamic(
                    () => import('./Register'),
                    // { ssr: false }
                );
                break;
            default:
                DynamicComponentWithNoSSR = dynamic(
                    () => import('./Login'),
                    // { ssr: false }
                );
        }
        return (
            <Container fluid className='auth-parent'>
                <Row>
                    <Col md='7'>
                        <div className='auth-background '>
                            <div className='brand'>
                                <h2>VNA</h2>
                            </div>
                            <div>
                                <h3 className="mb-2 text-white">Welcome to Metronic!</h3>
                                <p className="text-white">The ultimate Bootstrap &amp; React 16 admin theme framework for next generation web apps.</p>
                            </div>
                            <div className="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
                                <div className="font-weight-bold	text-white">© 2020 Metronic</div>
                                <div className="d-flex">
                                    <Link href='/metronic/react/demo1/terms'>
                                        <a className="text-white">Privacy</a>
                                    </Link>
                                    <Link  href="/metronic/react/demo1/terms">
                                        <a className="text-white ml-3">Legal</a>
                                    </Link>
                                    <Link href="/metronic/react/demo1/terms">
                                        <a className="text-white ml-3">Contact</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md='5'>
                        <DynamicComponentWithNoSSR />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Auth