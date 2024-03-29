import React, {useEffect, useReducer} from 'react';
import axios from "axios";

const initialState = {
    loading: true, error: '', post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false, error: '', post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false, post: {}, error: 'Something error...!!!'
            }
        default:
            return state
    }
}

function DataFetcingTwo(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            }).catch(err => {
            dispatch({type: 'FETCH_ERROR', payload: 'fail'})
        })
    }, [])
    return (<div>
        <h3>{state.loading ? "loading..." : state.post.title}
            {state.error ? state.error : null}
        </h3>
    </div>);
}


export default DataFetcingTwo;