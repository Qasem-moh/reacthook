import React, {useState} from 'react';
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponents(props) {
    const [age, setAge] = useState(30);
    const [salary, setSalary] = useState(5000);
    const incrementAge = () => {
        setAge(age + 1)
    }
    const decrementAge = () => {
        setAge(age - 1)
    }

    const incrementSalary = () => {
        setSalary(salary + 1000)
    }
    return (<div>
        <Title/>
        <Count text="age" count={age} />
        <h3>Helllo</h3>
        {/*<Button>HelloQasem</Button>*/}
        <Button handleClick={incrementAge}> increment age</Button>
        <Count text="salary" count={salary} />
        <Button handleClick={incrementSalary}> increment salary</Button>

    </div>);
}

export default ParentComponents;