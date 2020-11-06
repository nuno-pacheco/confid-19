import React from "react";
import { signup } from "../../services/userService";
import { Link } from "react-router-dom";
import Header1 from "../../components/headers/header1";
import Translate from 'react-translate-component';
import './Signup.css'

class Signup extends React.Component {
  state = {
    username: "",
    city: "",
    email: "",
    password: "",
    errorMessage: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    signup({
      username: this.state.username,
      city: this.state.city,
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) =>
        response.accessToken
          ? (localStorage.setItem("accessToken", response.accessToken),
            this.props.authenticate(response.user),
            this.props.history.push("/"))
          : this.setState({
              errorMessage: response.errorMessage,
            })
      )
      .catch((err) => console.log(err));
  };

  render() {
    const { username, city, email, password, errorMessage } = this.state;
    return (
      <div>
        {errorMessage !== "" && errorMessage}
        <Header1/>
        <form onSubmit={this.handleSubmit}>
        <div className="Signup">
          <div className="form-group">
            <Translate content="label3" component="label" htmlFor="exampleInputUserName"/>
            <input
              name="username"
              value={username}
              onChange={this.handleChange}
              required={true}
              type="text"
              className="form-control"
              id="exampleInputUserName"
            />
          </div>
          <div className="form-group">
            <Translate content="label4" component="label" htmlFor="exampleInputUserName"/>
            <input
              name="city"
              value={city}
              onChange={this.handleChange}
              required={true}
              type="text"
              className="form-control"
              id="exampleCity"
            />
          </div>
          <div className="form-group">
            <Translate content="label5" component="label" htmlFor="exampleInputUserName"/>
            <input
              name="email"
              value={email}
              onChange={this.handleChange}
              required={true}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <Translate content="label6" component="label" htmlFor="exampleInputUserName"/>
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              required={true}
              className="form-control"
              id="exampleInputPassword1"
            />
            <div className="question">
              <Link to={"/login"}><strong><Translate content="p6" component="p"/></strong></Link>
            </div>
          </div>
          <button type="submit" className="btn btn-primary"><Translate content="span8"/></button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
