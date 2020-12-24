import React, { PureComponent, useState } from 'react'
import Link from 'next/link'
import './style.scss'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='layout'>
      <Container fluid className='default-layout'>
        <div className='asidebar'>
          <NavbarBrand href="/" className='mb-5'><h3>Reactstrap Demo</h3></NavbarBrand>
          <h5>List Based</h5>
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
          </Nav>
          <h5>Link based</h5>
          <Nav vertical>
            <NavLink href="#">Link</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink href="#">Another Link</NavLink>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav>
        </div>
        <div className='main'>
          <header className='navigation'>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/"><img src='/static/next-logo.png' /></NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink>
                      <Link href='/about'>
                        <a>About</a>
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <Link href='/'>
                        <a>Redux demo</a>
                      </Link>
                    </NavLink>
                  </NavItem>
                </Nav>
                <NavbarText>
                  <NavLink>
                    <Link href='/auth/login'>
                      <a>Login</a>
                    </Link>
                  </NavLink>
                </NavbarText>
              </Collapse>
            </Navbar>
          </header>
          {props.children}
        </div>
      </Container>
    </div>
  )
}
export default Layout;
