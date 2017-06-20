import React from 'react';
import {Link} from 'react-router-dom';
import {FormGroup, Input, Label} from "reactstrap";

export default ({menu}) => (
    <nav>
        <div>
            <div className="float-md-right p-2">
                <ul className="list-inline float-md-right mb-0">
                    <li className="list-inline-item float-md-right">
                        <FormGroup className="mb-0">
                            <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
                        </FormGroup>
                    </li>
                    <li style={{padding: '7px 5px'}} className="list-inline-item float-md-right">Cart</li>
                    <li style={{borderRight : '1px solid #888', padding: '7px 5px'}} className="list-inline-item float-md-right">Your Account</li>
                    <li style={{borderRight : '1px solid #888', padding: '7px 5px'}} className="list-inline-item float-md-right">0869137463</li>
                </ul>
            </div>
            <div style={{clear: 'both'}}>
                <ul>
                </ul>
            </div>
        </div>
    </nav>
);
