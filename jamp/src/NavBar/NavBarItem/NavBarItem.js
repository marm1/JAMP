import React, { Component } from 'react';

import {
    NavItem,
    NavLink,
  } from 'reactstrap';

class NavBarItem extends Component {
  render() {

    let blankPage = "";
    if(this.props.newTab === true){
        blankPage = "_blank";
    }

    return (
        <NavItem>
        <NavLink href={this.props.link} target={blankPage} >{this.props.title}</NavLink>
      </NavItem>
    );
  }
}

export default NavBarItem;

