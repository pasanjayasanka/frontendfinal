import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import Cart from './components/Cart'
import CustomerRForm from './components/CustomerRForm'
import FarmerRForm from './components/FarmerRForm'
import Footer from './components/Footer'
import Search from './components/Search'
import Vegetable from './components/Vegetable'
import Fruit from "./components/Fruit";
import Dairy from "./components/Dairy";
import Grain from "./components/Grains";
import LoginForm from "./components/LoginForm";
import AddProduct from './components/AddProduct'
import MyProduct from './components/MyProduct'
import SearchResult from './components/SearchResult';

import AdminPanel from './components/Admin/AdminPanel'
import GetCustomers from './components/Admin/GetCustomers'
import GetFarmers from './components/Admin/GetFarmers'
import GetProducts from './components/Admin/GetProducts'
import GetOrders from './components/Admin/GetOrders'
import GetCarts from './components/Admin/GetCarts'
import GetOrderDetails from './components/Admin/GetOrderDetails'
import GetCategories from './components/Admin/GetCategories'




class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/Login' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path='/About' component={About} />
          <Route path='/Cart' component={Cart} />
          <Route path='/CustomerRForm' component={CustomerRForm} /> 
          <Route path='/FarmerRForm' component={FarmerRForm} />   
          <Route path='/Search' component={Search} />
          <Route path='/Vegetable' component={Vegetable}/>
          <Route path='/Fruit' component={Fruit}/>
          <Route path='/Dairy' component={Dairy}/>
          <Route path='/Grain' component={Grain}/>
          <Route path='/LoginForm' component={LoginForm}/>
          <Route path='/AddProduct' component={AddProduct} />  
          <Route path='/MyProduct' component={MyProduct} /> 
          <Route path='/Admin/AdminPanel' component={AdminPanel} /> 
          <Route path='/Admin/GetCustomers' component={GetCustomers} /> 
          <Route path='/Admin/GetFarmers' component={GetFarmers} /> 
          <Route path='/Admin/GetProducts' component={GetProducts} /> 
          <Route path='/Admin/GetOrders' component={GetOrders} /> 
          <Route path='/Admin/GetCarts' component={GetCarts} /> 
          <Route path='/Admin/GetOrderDetails' component={GetOrderDetails} /> 
          <Route path='/Admin/GetCategories' component={GetCategories} />
          <Route path='/SearchResult' component={SearchResult} />
          <Footer />
        </div>
       
      </BrowserRouter>
    );
  }
}

export default App;

