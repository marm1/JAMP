import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import NavBarDropDown from './NavBarDropDown/NavBarDropDown';
import NavBarItem from './NavBarItem/NavBarItem';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">JAMP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavBarItem title="About" link="/about/" newTab={false}/>
              <NavBarItem title="Donate" link="https://www.gofundme.com/JAMPilgrimages" newTab={true} />
              <NavBarDropDown/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}