import React, { Component } from 'react'
import axios from 'axios'


class AdminPanel extends Component  {
  state = {
    Admin: []
  }
  componentDidMount(){
    axios.get('https://localhost:44374/api/Admin')
      .then(res=>{
        console.log(res)
        this.setState({
          Admin: res.data.slice(0,10)
        })
      })
        
  }
  render(){
    const {Admin} = this.state;
    const AdminList = Admin.length ? (
      Admin.map(p =>{
        return(
          <div className = "Admin Group" key = {p.adminId}>
            <div className = "Group-content">
        <span className = "Name">{p.adminFName}</span>
        <p>{p.adminLName}</p>
         </div>
         </div>

        )
        })
    ) : (
      <div className = "center">No Admins yet</div>
  
        )
  
      return (
    
      <div className="container">
        <h4 className="center">Admin Panel</h4>
        
        {AdminList}
        
      </div>
      
      
      
    
        )
  }
}
export default AdminPanel