import React, {useMemo, useState} from 'react';

function Counter(props) {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const EvenOdd = useMemo(() => {
        let i = 0;
        while (i < 20000) i++
        return counterOne % 2 === 0

    }, [counterOne]);
    return (<div>
        <div>
            <button onClick={incrementOne}>Increment count one {counterOne}</button>
            <span>{EvenOdd() ? "Even" : "odd"}</span>
        </div>

        <button onClick={incrementTwo}>increment count two {counterTwo}</button>
    </div>);
}

export default Counter;