import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/userService";
import Header1 from "../../components/headers/header1";
import './Login.css'

class Login extends React.Component {
  state = {
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
    login({
      username: this.state.username,
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
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { email, password, errorMessage } = this.state;
    return (
      <div>
        {errorMessage !== "" && errorMessage}
        <Header1/>
        <form onSubmit={this.handleSubmit}>
        <div className="Login">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email: </label>
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
              <label htmlFor="exampleInputPassword1">Password: </label>
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
                <Link to={"/signup"}><p><strong>Don't have an Account?</strong></p></Link>
              </div>
            </div>
          <button type="submit" className="btn btn-primary"> Login </button>
        </div>
        </form>
      </div>
    );
  }
}

export default Login;
