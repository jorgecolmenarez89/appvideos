import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default () =>{
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="dark" dark fixed="top" expand="md">
            <NavbarBrand href="/">App Videos</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="nav-item-right">
                    <NavItem>
                        <NavLink href="/favorites">MIS FAVORITOS</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
}