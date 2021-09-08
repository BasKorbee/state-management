import React, { useReducer } from "react";
import { Col, Row } from "react-bootstrap";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import reducer from "./reducer";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const initialState = {
    counter: 0,
    text: 'Heyyooo',
    dropDown: 'This is a drop-down'
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                    <h1 style={{ textAlign: 'center' }}>React useContext &amp; useReducer Example</h1>
                    <Row style={{ padding: '1rem', margin: 'auto' }}>
                        <Col>
                            <Component1 />
                        </Col>
                        <Col>
                            <Component2 />
                        </Col>
                    </Row>
                </StateContext.Provider>
            </DispatchContext.Provider>
        </>
    );
}
