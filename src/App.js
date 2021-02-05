
import {Header,} from "./components";
import {Route} from "react-router-dom";
import {Home, Cart} from "./pages";
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(response => {
            setPizzas(response.data.pizzas);
        })
    }, []);
    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route exact path={'/'} render={() => <Home items={pizzas}/>} />
                    <Route exact path={'/cart'} component={Cart} />
                </div>
            </div>
        </div>
    );
}

export default App;
