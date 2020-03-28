import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Form,Row,Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Add = props =>{
    // its like dipatch
    const dispatch = useDispatch();
    //Use Selector is like map state to props
    const counter = useSelector(state => state.count);
    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <div className="mb-3">
                                <Form.File id="formcheck-api-regular">
                                    <Form.File.Label>Фото</Form.File.Label>
                                    <Form.File.Input />
                                </Form.File>
                            </div>
                        </Col>
                    </Row>

                            <Row>
                                <Form.Control placeholder="Ціна" />
                            </Row>
                            <Row>
                                <Form.Control placeholder="Опис" />
                            </Row>
                    <Row>
                        <Col>
                            <Link to="/add">
                                            <button onClick={() => dispatch({type:"ADD_I_DB"})}>Submit</button>
                                            {/*<Button variant="primary" type="submit">*/}
                                            {/*    Submit*/}
                                            {/*</Button>*/}
                                        </Link>
                        </Col>
                    </Row>
                    {/*<Row>*/}
                    {/*    <Col>*/}
                    {/*        <Link to="/add">*/}
                    {/*            <button className="btn btn-primary" >Submit</button>*/}
                    {/*            /!*<Button variant="primary" type="submit">*!/*/}
                    {/*            /!*    Submit*!/*/}
                    {/*            /!*</Button>*!/*/}
                    {/*        </Link>*/}
                    {/*    </Col>*/}

                    {/*</Row>*/}


                </Form>
            </Container>
        </div>
    )
};
export default Add;
