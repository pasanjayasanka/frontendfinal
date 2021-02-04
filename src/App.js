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
import AdminPanel from './components/AdminPanel'
import Footer from './components/Footer'
import Search from './components/Search'
import Vegetable from './components/Vegetable'
import Fruit from "./components/Fruit";
import Dairy from "./components/Dairy";
import Grain from "./components/Grains";
import LoginForm from "./components/LoginForm";
import AddProduct from './components/AddProduct'
import MyProduct from './components/MyProduct'




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
          <Route path='/AdminPanel' component={AdminPanel} />  
          <Route path='/Search' component={Search} />
          <Route path='/Vegetable' component={Vegetable}/>
          <Route path='/Fruit' component={Fruit}/>
          <Route path='/Dairy' component={Dairy}/>
          <Route path='/Grain' component={Grain}/>
          <Route path='/LoginForm' component={LoginForm}/>
          <Route path='/AddProduct' component={AddProduct} />  
          <Route path='/MyProduct' component={MyProduct} /> 
          <Footer />      
        </div>
       
      </BrowserRouter>
    );
  }
}

export default App;

