import React from 'react';
import './App.css';
import Home from "./Components/Home";
import TableShow from "./Components/Table";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
function App(): JSX.Element {
    return (
        <div className="app-container">
            <Sidebar/>
            <div className="content-container">
            <BrowserRouter>
                <Switch>
                    <Route path="/table" component={TableShow}/>
                    <Route path="/*" component={Home}/>
                </Switch>
            </BrowserRouter>
            </div>
        </div>

    );
}

export default App;
