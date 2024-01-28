import './App.css';
import Hook from "./Components/Hook";
import MouseMoveHook from "./Components/mouseMoveHook";
import IntervalHookCounter from "./Components/IntervalHookCounter";
import FetchData from "./Components/FetchData";
import CounterReducer from "./Components/CounterReducer";
import DataFetchingOne from "./Components/DataFetchingOne";
import DataFetcingTwo from "./Components/DataFetcingTwo";
import ReduceFunction from "./Components/ReduceFunction";
import ParentComponents from "./Components/ParentComponents";
import Counter from "./Components/Counter";


function App() {
    return (<div className="App">
            <h2>Hello</h2>
        {/*<Hook/>*/}
        {/*<MouseMoveHook/>*/}
        {/*<IntervalHookCounter/>*/}
        {/*<FetchData/>*/}
        {/*<CounterReducer/>*/}
        {/*<DataFetchingOne/>*/}
        {/*<DataFetcingTwo/>*/}
        {/*<ReduceFunction/>*/}
        {/*<ParentComponents/>*/}
        <Counter/>
        </div>);
}

export default App;
