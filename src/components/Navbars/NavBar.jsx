/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function NavBar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
        <Navbar color="primary" expand="lg">
          <Container>
            <NavbarBrand href="/index" >
              E-learning
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarTogglerDemo02"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            {/** <span className="sr-only">(current)</span>*/}
            <UncontrolledCollapse navbar toggler="#navbarTogglerDemo02">
              <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                <NavItem className="active">
                  <NavLink href="/professeur-page" >
                    Professeurs 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/module-page" >
                    Modules
                  </NavLink>
                </NavItem>
              </Nav>
            
            </UncontrolledCollapse>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;