import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import CounterContainer2 from "./containers/CounterContainer2";
import TodosContainer2 from "./containers/TodosContainer2";

function App() {
    return (
        <div>
            <CounterContainer2/>
            <hr/>
            <TodosContainer2/>
        </div>
    );
}

export default App;
