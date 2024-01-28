import React, {useEffect, useState} from 'react';
import axios from "axios";

function DataFetchingOne(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://sonplaceholder.typicode.com/posts/1')
            .then((response) => {
                setLoading(false)
                setPost(response.data)
                setError('')
                console.log(response.data)
            }).catch(err => {
            setLoading(false)
            setError("Something went wrong!!!!!!")
            setPost({})
            console.log(err)
        })
    }, [])
    return (<div>
            <h3>{loading ? "loading..." : post.title}
                {error ? error : null}
            </h3>
        </div>);
}

export default DataFetchingOne;