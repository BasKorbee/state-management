import Counter from "./counter/Counter";
import Text from "./text/Text";
import Dropper from "./dropDown/Dropper";
import Card from 'react-bootstrap/Card';

export default function Component1() {
    return (
        <Card>
            <Card.Header>Component 1</Card.Header>
            <Card.Body style={{ padding: '1rem' }}>
                <Counter />
                <Text />
                <Dropper />
            </Card.Body>
        </Card>
    )
}