import React from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import "./App.css";
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import { validateSession } from "./services/userService";
import Home from "./views/Home";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import CountriesList from "./components/CountriesList/CountriesList";
import PersonalArea from "./views/Personal/Personal";
import CoronaNews from "./components/CoronaNews/CoronaNews";
import CreateFeelingsList from "./components/CreateFeelingsList";
import FeelingsList from "./components/FeelingsList";
import EditFeelingsList from "./components/EditFeelingsList";
import FeelingDetails from "./components/FeelingDetails";
import {RiLogoutCircleRLine} from "react-icons/ri";
import {RiHome4Line} from "react-icons/ri";
import {RiUser3Line} from "react-icons/ri";
import { IconContext } from "react-icons";



class App extends React.Component {
  state = {
    authenticated: false,
    user: {},
  };
  componentDidMount = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      validateSession(accessToken)
        .then((response) => {
          console.log(response, "RESPONSE");
          this.authenticate(response.session.userId);
        })
        .catch((err) => console.log(err));
    }
  };

  authenticate = (user) => {
    this.setState({
      authenticated: true,
      user,
    });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      authenticated: false,
      user: {},
    });
  };
  render() {
    const { authenticated } = this.state;
    return (
      <div className="App">
      <div className="Top-left"></div>
        <BrowserRouter>
        <IconContext.Provider value={{color: "lightgray", size: "2em"}}>
          <nav className="mainnavbar">
            {authenticated && <Link to="/"> <RiHome4Line/> </Link>}
            
            {authenticated && (
              <Link to={"/"} onClick={this.handleLogout}>
                <RiLogoutCircleRLine/>
             </Link>
            )}

            {authenticated && <Link to="/personal"> <RiUser3Line/> </Link>}
          </nav>
        </IconContext.Provider>
          <Switch>
            <PrivateRoute
              exact
              path="/"
              user={this.state.user}
              authenticated={authenticated}
              component={Home}
            />
            <PrivateRoute
              exact
              path="/countries"
              user={this.state.user}
              authenticated={authenticated}
              component={CountriesList}
            />
            <PrivateRoute
              exact
              path="/news"
              user={this.state.user}
              authenticated={authenticated}
              component={CoronaNews}
            />
            <PrivateRoute
              exact
              path="/personal"
              user={this.state.user}
              authenticated={authenticated}
              component={PersonalArea}
            />
            <PrivateRoute 
              exact 
              path="/all_feelings"
              user={this.state.user} 
              authenticated={authenticated}
              component={FeelingsList}
            />
            <PrivateRoute 
              exact 
              path="/all_feelings/:id"
              user={this.state.user} 
              authenticated={authenticated}
              component={FeelingDetails}
            />
            <PrivateRoute 
              exact 
              path="/create"
              user={this.state.user} 
              authenticated={authenticated}
              component={CreateFeelingsList}
            />
            <PrivateRoute 
              exact 
              path="/edit/:id"
              user={this.state.user} 
              authenticated={authenticated}
              component={EditFeelingsList}
            />




            <AnonRoute
              exact
              path="/login"
              authenticated={authenticated}
              authenticate={this.authenticate}
              component={Login}
            />
            <AnonRoute
              exact
              path="/signup"
              authenticated={authenticated}
              authenticate={this.authenticate}
              component={Signup}
            />
          </Switch>
        </BrowserRouter>
        <div className="Bottom-right"></div>
      </div>
    );
  }
}

export default App;
