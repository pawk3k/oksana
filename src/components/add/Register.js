import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Carousel,Form,Row,Col,Button,Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Register = props =>{
    // its like dipatch
    const dispatch = useDispatch();
    //Use Selector is like map state to props
    const counter = useSelector(state => state.count);
    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Link to="/add">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Link>

            </Form>
        </Container>

    )
};
export default Register;
