import './App.css';
import Hook from "./Components/Hook";
import MouseMoveHook from "./Components/mouseMoveHook";
import IntervalHookCounter from "./Components/IntervalHookCounter";
import FetchData from "./Components/FetchData";


function App() {
    return (<div className="App">
            <h2>Hello</h2>
        {/*<Hook/>*/}
        {/*<MouseMoveHook/>*/}
        {/*<IntervalHookCounter/>*/}
        <FetchData/>
        </div>);
}

export default App;
