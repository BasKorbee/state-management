import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update, selectDropDown } from './dropDownSlice';
import { Card, Col, Row, Form } from 'react-bootstrap';

export default function Dropper() {
    const dropDown = useSelector(selectDropDown);
    const dispatch = useDispatch();

    const dropOptions = ["This is a drop-down", "It has many options", "You can only select one though", "Sorry"];

    return (
        <>
            <Card style={{ width: '30rem', margin: 'auto', marginTop: '1rem', marginBottom: '1rem' }}>
                <Card.Header>Drop-Down</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Select onChange={(e) => dispatch(update(e.target.value))} value={dropDown}>
                                    {dropOptions.map(option => <option>{option}</option>)}
                                </Form.Select>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}