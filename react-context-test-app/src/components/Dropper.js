import React, { useContext } from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import { DispatchContext, StateContext } from '../App';

export default function Dropper() {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const dropOptions = ["This is a drop-down", "It has many options", "You can only select one though", "Sorry"];

    return (
        <>
            <Card style={{ width: '30rem', margin: 'auto', marginTop: '1rem', marginBottom: '1rem' }}>
                <Card.Header>Drop-Down</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Select onChange={(e) => dispatch({ type: 'setDropDown', payload: e.target.value})} value={state.dropDown}>
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