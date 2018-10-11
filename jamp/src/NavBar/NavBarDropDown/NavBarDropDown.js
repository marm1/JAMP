import React, { Component } from 'react';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavBarDropDown extends Component {
  render() {
    return (
      <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Locations
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
        </UncontrolledDropdown>
    );
  }
}

export default NavBarDropDown;
