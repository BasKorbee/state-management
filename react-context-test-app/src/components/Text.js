import React, { useState, useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { DispatchContext, StateContext } from '../App';

export default function Text() {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const [value, setValue] = useState(state.text);

    return (
        <>
            <Card style={{ width: '30rem', margin: 'auto', marginTop: '1rem', marginBottom: '1rem' }}>
                <Card.Header>Text</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Control onChange={(e) => setValue(e.target.value)} value={value} />
                            </Form>
                        </Col>
                        <Col xs={3}>
                            <Button onClick={() => dispatch({ type: 'setText', payload: value })}>Submit</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}