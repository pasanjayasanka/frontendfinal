import React from 'react';  
import GetCustomers from './GetCustomers';  
import GetFarmers from './GetFarmers';  
import GetProducts from './GetProducts';
import GetOrders from './GetOrders'; 
import GetCarts from './GetCarts';  
import GetOrderDetails from './GetOrderDetails';   
import GetCategories from './GetCategories'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './AdminPanel.css';  

function AdminPanel() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar  navheader" >  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto" >  
              <li className="nav-item" >  
                <Link to={'/GetCustomers'} className="nav-link">Customers</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/GetFarmers'} className="nav-link">Farmers</Link>  
              </li> 
              <li className="nav-item">  
                <Link to={'/GetProducts'} className="nav-link">Products</Link>  
              </li> 
              <li className="nav-item">  
                <Link to={'/GetOrders'} className="nav-link">Orders</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/GetCarts'} className="nav-link">Cart Details</Link>  
              </li> 
              <li className="nav-item">  
                <Link to={'/GetOrderDetails'} className="nav-link">Order Details</Link>  
              </li> 
              <li className="nav-item">  
                <Link to={'/GetCategories'} className="nav-link">Categories</Link>  
              </li> 
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/GetCustomers' component={GetCustomers} />  
          <Route path='/GetFarmers' component={GetFarmers} />  
          <Route path='/GetProducts' component={GetProducts} />  
          <Route path='/GetOrders' component={GetOrders} />  
          <Route path='/GetCarts' component={GetCarts} /> 
          <Route path='/GetOrderDetails' component={GetOrderDetails} /> 
          <Route path='/GetCategories' component={GetCategories} /> 
        </Switch>  
      </div>  
    </Router>  
  );  
}  
  
export default AdminPanel;
       
    
