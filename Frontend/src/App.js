import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CustomerLogin from './components/CustomerLogin';
import CustomerRegisteration from './components/CustomerRegisteration';
import GetMovieDetails from './components/GetMovieDetails';
import SpecificMovie from './components/SpecificMovie';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import MovieDisplay from './components/moviedisplay';
import BookMovie from './components/BookMovie';


function App(){
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path= "/" component={CustomerLogin} exact/> */}
                <Route path= "/" component={MovieDisplay} exact/>
               
                <div>
                <Route path = "/customer/signup" component={CustomerRegisteration}/>
                <Route path = "/movie/add" component={AddMovie}/>      
                <Route path = "/movie/display" component={GetMovieDetails}/>
                <Route path = "/specific/:movieID" component={SpecificMovie}/>
                <Route path = "/update/:movieID" component={EditMovie}/>
                <Route path = "/bookMovie/add" component={BookMovie}/>
           
                </div> 
            </Switch>
        </BrowserRouter>
    )
}

export default App;
