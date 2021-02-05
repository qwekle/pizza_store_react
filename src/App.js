import React from 'react';
import {Header,} from "./components";
import {Route} from "react-router-dom";
import {Home, Cart} from "./pages";
import {useEffect, useState} from "react";
import axios from "axios";
import {setPizzas} from "./redux/actions/pizzas";
import {connect} from "react-redux";


// function App1() {
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(response => {
//             setPizzas(response.data.pizzas);
//         })
//     }, []);
//     return (
//         <div>
//             <div className="wrapper">
//                 <Header />
//                 <div className="content">
//                     <Route exact path={'/'} render={() => <Home items={pizzas}/>} />
//                     <Route exact path={'/cart'} component={Cart} />
//                 </div>
//             </div>
//         </div>
//     );
// }

class App extends React.Component {
    componentDidMount() {
        console.log(this.props)
        axios.get('http://localhost:3000/db.json').then(response => {
            this.props.setPizzas(response.data.pizzas)
        })
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <Header/>
                    <div className="content">
                        <Route exact path={'/'} render={() => <Home items={[]}/>}/>
                        <Route exact path={'/cart'} component={Cart}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setPizzas: (items) => dispatch(setPizzas(items))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
