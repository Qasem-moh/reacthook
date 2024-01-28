import React, {useReducer} from 'react';
const initialState = {
    firstCounter: 0
}
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {firstCounter: state.firstCounter + 1}
        case 'DECREMENT':
            return {firstCounter: state.firstCounter - 1}
        case 'RESET':
            return initialState
        default:
            return state
    }
}
function CounterReducer(props) {
    const [count, dispatch] = useReducer(counterReducer, initialState)
    return (

        <>

            <div>
                <h2>{count.firstCounter}</h2>

                <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>


            </div>
        </>
            );
            }

            export default CounterReducer;