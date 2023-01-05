import React from "react";
import './Dropdown.scss';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button
} from 'reactstrap';

const Dropdown1 = () => {
  return (
    <div>
      <UncontrolledDropdown group>
        <Button className="umair1">Primary</Button>
        <DropdownToggle caret color="primary" />
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default Dropdown1;
