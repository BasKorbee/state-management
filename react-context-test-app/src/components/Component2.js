import { useContext } from "react"
import { Card } from "react-bootstrap"
import { StateContext } from "../App"

export default function Component2() {
    const state = useContext(StateContext);
    return (
        <>
            <Card style={{ textAlign: 'center' }}>
                <Card.Header>Component 2</Card.Header>
                <Card.Body style={{ padding: '1rem' }}>
                    <p>This component is independant of the other, yet knows the state without passing any props.</p>
                    <p>Counter Value: <span style={{ color: 'blue' }}>{state.counter}</span></p>
                    <p>Text Value: <span style={{ color: 'blue' }}>{state.text}</span></p>
                    <p>Drop-Down Value: <span style={{ color: 'blue' }}>{state.dropDown}</span></p>
                </Card.Body>
            </Card>
        </>
    )
}