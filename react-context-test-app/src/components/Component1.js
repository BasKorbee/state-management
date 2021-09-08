import Counter from './Counter';
import Text from './Text';
import Dropper from './Dropper';
import Card from 'react-bootstrap/Card';

export default function Component1() {
    return (
        <Card style={{ textAlign: 'center' }}>
            <Card.Header>Component 1</Card.Header>
            <Card.Body style={{ padding: '1rem' }}>
                <Counter />
                <Text />
                <Dropper />
            </Card.Body>
        </Card>
    )
}