import { useContext } from "react"
import { DispatchContext, StateContext } from "../App"
import { Button, Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Counter() {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext)
    return (
        <>
            <Card style={{ width: '30rem', margin: 'auto', marginTop: '1rem', marginBottom: '1rem' }}>
                <Card.Header>Counter</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Button onClick={() => dispatch({ type: 'incrementCounter' })}><FontAwesomeIcon icon={faPlus} /></Button>
                        </Col>
                        <Col>
                            <p>{state.counter}</p>
                        </Col>
                        <Col>
                            <Button onClick={() => dispatch({ type: 'decrementCounter' })}><FontAwesomeIcon icon={faMinus}/></Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}