import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CustomerLogin from './components/CustomerLogin';
import CustomerRegisteration from './components/CustomerRegisteration';
import GetMovieDetails from './components/GetMovieDetails';


function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path= "/" component={CustomerLogin} exact/>
               
                <div>
                <Route path = "/customer/signup" component={CustomerRegisteration}/>
                <Route path= "/movie" component={GetMovieDetails}/>
                </div>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
