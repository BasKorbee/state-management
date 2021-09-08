import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from './counterSlice';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <>
            <Card style={{ width: '30rem', margin: 'auto', marginTop: '1rem', marginBottom: '1rem' }}>
                <Card.Header>Counter</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Button onClick={() => dispatch(increment())}><FontAwesomeIcon icon={faPlus} /></Button>
                        </Col>
                        <Col>
                            <p>{count}</p>
                        </Col>
                        <Col>
                            <Button onClick={() => dispatch(decrement())}><FontAwesomeIcon icon={faMinus}/></Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}
