import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./View/Home";
import TableShow from "./View/Table";


import {BrowserRouter,Switch,Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
function App(): JSX.Element {
    return (
        <div className="app-container">
            <Sidebar/>
            <div className="content-container">
            <BrowserRouter>
                <Switch>
                    <Route  path="/home" component={Home}/>
                    <Route path="/table" component={TableShow}/>
                    <Route path="/*" component={Home}/>
                </Switch>
            </BrowserRouter>
            </div>
        </div>

    );
}

export default App;
