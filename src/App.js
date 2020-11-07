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
import FeelingsList from "./components/FeelingsList/FeelingsList";
import EditFeelingsList from "./components/EditFeelingsList";
import FeelingDetails from "./components/FeelingDetails";
import {RiLogoutCircleRLine} from "react-icons/ri";
import {RiHome4Line} from "react-icons/ri";
import {RiUser3Line} from "react-icons/ri";
import { IconContext } from "react-icons";
import Footer from "./components/Navbar/Footer";
import counterpart from 'counterpart';
import en from './components/translations/en';
import pt from './components/translations/pt';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('pt', pt);
counterpart.setLocale('pt');

class App extends React.Component {
  state = {
    authenticated: false,
    user: {},
    lang:'pt'
  };

  onLangChange = (e) => {
    this.setState({lang: e.target.value});
    counterpart.setLocale(e.target.value);
  }

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
        <BrowserRouter>
        <IconContext.Provider value={{color: "rgb(129, 129, 129)", size: "2em"}}>
          <nav className="mainnavbar">
            <div className="leftContent">  
              <div className="confidLogo">
                <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1603274628/confid-19/YOU_CAN_TRUST_1_t1knrh.png" alt="Confid-logo"></img>
              </div>
              <div className="selectLang">
                  <select value={this.setState.lang} onChange={this.onLangChange}>
                    <option value="pt"> Por </option>
                    <option value="en"> Eng </option>
                  </select>
              </div>
            </div>
              <div className="icons">
                {authenticated && <Link to="/"> <RiHome4Line/> </Link>}
                {authenticated && <Link to="/personal"> <RiUser3Line/> </Link>}
                
                {authenticated && (
                  <Link to={"/"} onClick={this.handleLogout}>
                    <RiLogoutCircleRLine/>
                </Link>
                )}
              </div>
  
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
        <Footer/>
      </div>
    );
  }
}

export default App;
