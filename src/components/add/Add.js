import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Form,Row,Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import $ from "jquery"


const Add = props =>{
    // its like dipatch
    const dispatch = useDispatch();
    //Use Selector is like map state to props
    const counter = useSelector(state => state.count);
    return (
        <div>
            {/*<div>*/}
            {/*    <form>*/}
            {/*        <input type="text" placeholder="text" name="name1"/>*/}
            {/*    </form>*/}
            {/*    <button onClick={()=> console.log($('form').serializeArray())}>butn</button>*/}

            {/*</div>*/}


            <Container>
                <Form>
                    <Row>
                        <Col>
                            <label htmlFor="avatar">Choose a profile picture:</label>
                            <input type="file" id="fileinput" />

                            {/*<input type="file"*/}
                            {/*       id="avatar" name="avatar"*/}
                            {/*       accept="image/png, image/jpeg" />*/}

                        </Col>
                        <Col>

                            <div className="mb-3">
                                <Form.File id="formcheck-api-regular">
                                    <Form.File.Label>Фото</Form.File.Label>
                                    <Form.File.Input name="foto"/>
                                </Form.File>
                            </div>
                        </Col>
                    </Row>

                            <Row>
                                <Form.Control placeholder="Ціна" name="price"/>
                            </Row>
                            <Row>
                                <Form.Control placeholder="Опис"  name="description"/>
                            </Row>
                    <Row>
                        <Col>
                            <Link to="/add">
                                            <button onClick={() => {
                                                // const img_c = document.getElementById("fileinput");
                                               const imgc =  $('#fileinput').prop('files');
                                               console.log(imgc[0].name);
                                                // dispatch({type:"ADD_I_DB",payload:$('form').serializeArray().append(imgc)});
                                                dispatch({type:"ADD_I_DB", payload:imgc[0].name });
                                                // console.log($('form').serializeArray());
                                            }}>Submit</button>
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
