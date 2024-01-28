import './App.css';
import Hook from "./Components/Hook";
import MouseMoveHook from "./Components/mouseMoveHook";
import IntervalHookCounter from "./Components/IntervalHookCounter";
import FetchData from "./Components/FetchData";
import CounterReducer from "./Components/CounterReducer";
import DataFetchingOne from "./Components/DataFetchingOne";
import DataFetcingTwo from "./Components/DataFetcingTwo";


function App() {
    return (<div className="App">
            <h2>Hello</h2>
        {/*<Hook/>*/}
        {/*<MouseMoveHook/>*/}
        {/*<IntervalHookCounter/>*/}
        {/*<FetchData/>*/}
        {/*<CounterReducer/>*/}
        {/*<DataFetchingOne/>*/}
        <DataFetcingTwo/>
        </div>);
}

export default App;
