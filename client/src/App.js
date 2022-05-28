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
import AddCardDetails from './components/AddCardDetails';
import MovieHomePage from './components/MovieHomePage';
import AdminLogin from './components/AdminLogin';
import AdminRegisteration from './components/AdminRegisteration';
import DisplayBookings from './components/DisplayBookings';
import CustomerProfile from './components/CustomerProfile';
import CustomerUpdateProfile from './components/CustomerUpdateProfile';
import AdminProfile from './components/AdminProfile';
import SmsSend from './components/SmsSend';

import AdminUpdateProfile from './components/AdminUpdate';

function App(){
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path="/" component={MovieHomePage} exact/>
               
                <div>
                <Route path= "/dashboard" component={MovieDisplay} exact/>
                <Route path= "/customer/signin" component={CustomerLogin}/>
                <Route path= "/admin/signin" component={AdminLogin}/>
                <Route path = "/admin/signup" component={AdminRegisteration}/>
                <Route path = "/bookmovie/display" component={DisplayBookings}/>
                <Route path = "/customer/signup" component={CustomerRegisteration}/>
                <Route path = "/movie/add" component={AddMovie}/>      
                <Route path = "/movie/display" component={GetMovieDetails}/>
                <Route path = "/specific/:movieID" component={SpecificMovie}/>
                <Route path = "/update/:movieID" component={EditMovie}/>
                <Route path = "/bookMovie/add/:id" component={BookMovie}/>
                <Route path = "/carddetails/add/:id" component={AddCardDetails}/>
                <Route path = "/customer/profile" component={CustomerProfile}/>
                <Route path = "/customer/update" component={CustomerUpdateProfile}/>
                <Route path = "/admin/profile" component={AdminProfile}/>
                <Route path = "/admin/update" component={AdminUpdateProfile}/> 
                <Route path = "/SmsSend" component={SmsSend}/>

                </div> 
            </Switch>
        </BrowserRouter>
    )
}

export default App;
