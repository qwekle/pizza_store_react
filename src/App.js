import React from 'react';
import {Header,} from "./components";
import {Route} from "react-router-dom";
import {Home, Cart} from "./pages";


function App() {

    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/cart'} component={Cart}/>
                </div>
            </div>
        </div>
    );
}

export default App;
