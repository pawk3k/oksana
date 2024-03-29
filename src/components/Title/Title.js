import "./Title.css"
import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import MBtton from "../elements/MButton";
import {ParallaxLayer} from "react-spring/renderprops-addons";
import {Carousel,Form,Row,Col,Button} from "react-bootstrap";

const Title = props =>{
    // its like dipatch
    const dispatch = useDispatch();
    //Use Selector is like map state to props
    const counter = useSelector(state => state.count);
    return (
        <div>
            <div className="container-fluid my_div d-flex"  style={{height:"100vh",backgroundColor:"pink"}}>
                <div className="d-flex col align-self-end justify-content-center" style={{paddingBottom:"15%"}}>
                    <Link to="/home">
                        <MBtton/>
                    </Link>
                </div>
            </div>

            <div className="container-fluid d-flex"  style={{height:"100vh",width:"100vw",backgroundColor:"pink"}}>
                <Carousel style={{height:"100vh",width:"100vw",backgroundColor:"pink"}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./p1.PNG")}
                            alt="First slide"
                         />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./p2.JPEG")}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container-fluid d-flex"  style={{height:"100vh",backgroundColor:"pink"}}>
                <div className="d-flex col align-self-end justify-content-center" style={{paddingBottom:"15%"}}>

                    <div className="row" style={{marginTop:"15%"}}>
                        <Form>
                            <Row>
                                <Form.Label>Have a question</Form.Label>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder="name" />
                                </Col>
                                <Col>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control placeholder="email@mail.com" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Title;
