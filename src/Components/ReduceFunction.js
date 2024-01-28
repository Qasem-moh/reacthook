import React, {useEffect, useReducer} from 'react';
import axios from "axios";


const intitialState={
    loading:true,
    error:false,
    post:{}
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'success':
            return{
                loading: false,
                error:'',
                post:action.payload
            }
        case 'error':
            return {
                loading: false,
                error:"Somthing error...!!!",
                post:{}
            }
        default:
            return state;
    }
}

function ReduceFunction(props) {
    const [state,dispatch]=useReducer(reducer,intitialState)

useEffect(()=>{
    axios.get('https://sonplaceholder.typicode.com/posts/1')
    .then(response=>{
        console.log(response.data)
        dispatch({type:'success',payload:response.data})
    }).catch(err=>{
        dispatch({type:'error',payload:{}})
    })
},[])
    return (
        <div>
            {state.loading ?'Loading...':state.post.title}
            {state.error?state.error:''}
        </div>
    );
}

export default ReduceFunction;