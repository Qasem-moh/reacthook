import React, {useState,useEffect} from 'react';
import axios from "axios";

function FetchData(props) {
    const [data, setData] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            }).catch(err => {
            console.log(err)
        })
    }, [id])
    console.log(data)
    return (
        <div>
            <input name="id" value={id} onChange={e=>setId(e.target.value)}/>
<h3>{data.body}</h3>
            {/*{*/}
            {/*    data.map((item) => {*/}
            {/*        return(*/}
            {/*            <div key={item.id}>*/}
            {/*                <h3>{item.body}</h3>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </div>
    );
}

export default FetchData;