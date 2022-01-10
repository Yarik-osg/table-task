import React from 'react';
import './App.css';
import Home from "./Components/Home";
import TableShow from "./Components/Table";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
/**
 * The main function of the project in which we create our routes and the ability to switch between them
 *
 */
function App(): JSX.Element {
    return (
        <div className="app-container" data-testid="app-div" >
            <Sidebar/>
            <div className="content-container" data-testid="content-div">
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
