import { useSelector } from "react-redux";
import { selectCount } from "./counter/counterSlice";
import { selectText } from "./text/textSlice";
import { selectDropDown } from "./dropDown/dropDownSlice";
import { Card } from "react-bootstrap";

export default function Component2() {
    const counter = useSelector(selectCount);
    const text = useSelector(selectText);
    const dropDown = useSelector(selectDropDown);

    return (
        <>
            <Card>
                <Card.Header>Component 2</Card.Header>
                <Card.Body style={{ padding: '1rem' }}>
                    <p>This component is independant of the other, yet knows the state without passing any props.</p>
                    <p>Counter Value: <span style={{ color: 'blue' }}>{counter}</span></p>
                    <p>Text Value: <span style={{ color: 'blue' }}>{text}</span></p>
                    <p>Drop-Down Value: <span style={{ color: 'blue' }}>{dropDown}</span></p>
                </Card.Body>
            </Card>
        </>
    )
}