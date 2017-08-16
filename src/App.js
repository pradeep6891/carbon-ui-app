import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
}	
 from 'react-router-dom';
import Header from "./components/headerComponents/header";
import Footer from "./components/footerComponents/footer";
import Loginpage from "./pages/LoginPage"
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/about-us";
import Service from "./pages/services";
class App extends Component {
  render() {
    return (
	 <Router>
      <div className="App">
      <Header/>
		 
		 <Route exact path='/' component={Homepage}/>
		 <Route exact path='/services' component={Service}/>
		 <Route exact path='/about-us' component={Aboutus}/>
		<Footer/>
      </div>
	  </Router>
    );
  }
}

export default App;
