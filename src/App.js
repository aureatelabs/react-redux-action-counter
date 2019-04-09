import React from "react";
import Home from "./scenes/Home";
import "./App.scss";


const App = () => {
    return (
        <div className="todo-app">
            <h1>Counter with React, Redux, and Redux-Action</h1>
            <Home/>
        </div>
    );
};

export default App;
