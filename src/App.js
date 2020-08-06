import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Slide from './components/Slide';
import Footer from './components/Footer';
import New from './components/New';
import Login from './components/Login';
import Register from './components/Register';
import Detail from './components/Detail';

class App extends React.Component {
  constructor(){
    super();
    let checkLogin = localStorage.getItem('user_id');
    let check = checkLogin ? "on" : "off";
    this.state = {
      checkLogin: check
    }
    this.onLogout  = this.onLogout.bind(this);
  }
  onLogout() {
    localStorage.removeItem('user_id');
    this.setState({
      checkLogin : "off"
      })
  }
  render(){
    return (
      <Router>
          <div className="flex-row fixed-header">   
            {this.state.checkLogin === "on" ? <p>Welcome user</p> : null }
                <div className="flex-col flex-center">
                    <ul className="nav">
                        <li><Link to="/articles" className = "text-menu">TRANG CHỦ</Link></li>
                        <li><Link to="/home" className = "text-menu">GIỚI THIỆU</Link></li>
                        <li><Link to="/home" className = "text-menu">CỬA HÀNG</Link></li>
                        <li><Link to="/home" className = "text-menu">TIN TỨC</Link></li>
                        <li><Link to="/home" className = "text-menu">LIÊN HỆ</Link></li>
                    </ul>
                </div>
                <Link to="/login">
                  <button className="Login">Login</button>
                </Link>
                { this.state.checkLogin === "on" ? 
                <button className="Register" onClick={ this.onLogout }>Logout</button> : 
                <Link to="/register"><button className="Register">Register</button></Link> }    
          </div>
          <Switch>
            <Route path="/" exact>
              <Slide />
              <New />
              <Footer />
            </Route>
            <Route path="/articles" exact>
              <Slide />
              <New />
              <Footer />
            </Route>
            <Route path="/login">
              <Login onLoginClicked = {this.onLogin} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path={"/articles/:id"}>
               <Detail />
               <Footer />
            </Route>
          </Switch>
     </Router>
      )
  }
}

export default App;
