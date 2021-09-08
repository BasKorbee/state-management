import React from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';

import Component1 from './features/Component1';
import Component2 from './features/Component2';

function App() {
  return (
    <div className="App">
      <h1>Redux Example</h1>
      <Row style={{ padding: '1rem', margin: 'auto' }}>
        <Col>
          <Component1 />
        </Col>
        <Col>
          <Component2 />
        </Col>
      </Row>
    </div>
  );
}

export default App;
