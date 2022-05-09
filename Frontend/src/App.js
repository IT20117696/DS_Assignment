import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CustomerLogin from './components/CustomerLogin';
import CustomerRegisteration from './components/CustomerRegisteration';

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path= "/customer/signin" component={CustomerLogin} exact/>
                <div>
                <Route path = "/customer/signup" component={CustomerRegisteration}/>
                </div>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
