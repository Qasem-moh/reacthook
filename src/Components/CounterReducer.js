import React, {useReducer} from 'react';

const initialState = {
    firstCounter: 0
}
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {firstCounter: state.firstCounter + action.value}
        case 'DECREMENT':
            return {firstCounter: state.firstCounter - action.value}
        case 'RESET':
            return initialState
        default:
            return state
    }
}
function CounterReducer(props) {
    const [count, dispatch] = useReducer(counterReducer, initialState)
    return (

            <div>
                <h2>{count.firstCounter}</h2>
                <button onClick={() => dispatch({type: 'INCREMENT', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'INCREMENT', value: 5})}>Increment +5</button>
                <button onClick={() => dispatch({type: 'DECREMENT', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'DECREMENT', value: 5})}>Decrement -5</button>
                <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
            </div>

    );
            }

            export default CounterReducer;