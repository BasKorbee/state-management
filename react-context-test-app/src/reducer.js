export default function reducer(state, action) {
    switch (action.type) {
        case 'incrementCounter': {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case 'decrementCounter': {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case 'setText': {
            return {
                ...state,
                text: action.payload
            }
        }
        case 'setDropDown': {
            return {
                ...state,
                dropDown: action.payload
            }
        }
        default: {
            return null;
        }
    }
}