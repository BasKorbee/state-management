import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update, selectText } from './textSlice';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

export default function Text() {
    const text = useSelector(selectText);
    const dispatch = useDispatch();

    const [value, setValue] = useState(text);

    return(
        <>
            <Card style={{ width: '30rem', margin: 'auto', marginTop: '1rem', marginBottom: '1rem' }}>
                <Card.Header>Text</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Control onChange={(e) => setValue(e.target.value)} value={value}/>
                            </Form>
                        </Col>
                        <Col xs={3}>
                            <Button onClick={() => dispatch(update(value))}>Submit</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}