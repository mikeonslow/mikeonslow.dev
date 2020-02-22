import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faLinkedinIn,
//   faTwitter
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faAddressCard,
//   faWindowRestore,
//   faCalendarAlt
// } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";

const NavigationBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar fixed="top" color="dark" className="text-light" expand="md">
      <NavbarBrand href="/">
        <img src="favicon.png" alt="Mike Onslow's logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} color="light">
        {/* <FontAwesomeIcon icon={faBars} size="lg" className="text-secondary" /> */}
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">
              {/* <FontAwesomeIcon icon={faAddressCard} size="lg" /> */}
              Intro
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projects">
              {/* <FontAwesomeIcon icon={faWindowRestore} size="lg" /> */}
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/events_and_groups">
              {/* <FontAwesomeIcon icon={faCalendarAlt} size="lg" /> */}
              &nbsp;Events &amp; Groups
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink
              href="https://github.com/mikeonslow"
              target="_blank"
              color="secondary"
            >
              {/* <FontAwesomeIcon icon={faGithub} size="lg" /> */}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://www.linkedin.com/in/mikeonslow/"
              target="_blank"
              color="secondary"
            >
              {/* <FontAwesomeIcon icon={faLinkedinIn} size="lg" /> */}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://twitter.com/mike_onslow" target="_blank">
              {/* <FontAwesomeIcon icon={faTwitter} size="lg" /> */}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
