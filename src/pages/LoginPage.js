import React, { Component } from 'react';
import { View } from 'react-native';
import { DataTable, gu } from 'carbon-ui';
import {
	BrowserRouter as Router,
	Route
}
from 'react-router-dom';
import Homepage from "./Homepage";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {userId: '',password:''};

    this.handleUseridChange = this.handleUseridChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUseridChange(event) {
    this.setState({userId: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' +this.state.userId+" "+ this.state.password);
    <Router>
      <Route exact path='/Homepage' component={Homepage}/>
    </Router>
  }


render() {
    return (
	 <div>
    <form path='/Homepage'>
		<table>
    <tr> <td>UserId: </td><td> <input id="userId" type='text' value={this.state.userId} onChange={this.handleUseridChange}/> </td>	</tr>
    <tr> <td>Password: </td><td> <input id="password" type='text' value={this.state.password} onChange={this.handlePasswordChange}/> </td>	</tr>
    <tr> <td><button type='submit' onClick={this.handleSubmit}>Login</button></td></tr>
		</table>
    </form>
   </div>
   
      
    );
  }
}

export default LoginPage;
