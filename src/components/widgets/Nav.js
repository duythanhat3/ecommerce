import React from 'react';
import DropDownMenu from './_DropdownMenu';
import {
    FormGroup, Input, Nav, Navbar, NavItem, NavLink
} from "reactstrap";

const Navigate = ({menu}) => {
    //console.log(menu);
    let _menu = '';
    if (menu.length) {
        _menu = (
            <Navbar color="faded" light toggleable>
                <Nav navbar>
                    {menu.map((item, index) => {
                        if(item.is_root){
                            return (
                                <DropDownMenu key={index} item={item} dropdownOpen="false"/>
                            );
                        } else {
                            return (
                                <NavItem key={index}>
                                    <NavLink className="text-uppercase font-weight-bold"
                                             href={item.link}>{item.name}</NavLink>
                                </NavItem>
                            );
                        }
                    })}
                </Nav>
            </Navbar>
        );
    }

    return (
        <div>
            <div className="float-md-right p-2">
                <ul className="list-inline float-md-right mb-0">
                    <li className="list-inline-item float-md-right">
                        <FormGroup className="mb-0">
                            <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder"/>
                        </FormGroup>
                    </li>
                    <li style={{padding: '7px 5px'}} className="list-inline-item float-md-right">Cart</li>
                    <li style={{borderRight: '1px solid #888', padding: '7px 5px'}}
                        className="list-inline-item float-md-right">Your Account
                    </li>
                    <li style={{borderRight: '1px solid #888', padding: '7px 5px'}}
                        className="list-inline-item float-md-right">0869137463
                    </li>
                </ul>
            </div>
            <div style={{clear: 'both'}}>
                {_menu}
            </div>
        </div>
    );
};

export default Navigate;
