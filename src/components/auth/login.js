import React, { Component } from "react";
import axios from "axios";

import fb from '../../../static/assets/images/auth/fb.png';
import formImage from '../../../static/assets/images/auth/form-image.png';
import google from '../../../static/assets/images/auth/google.png';
import twitter from '../../../static/assets/images/auth/twitter.png';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: "",
      monster: document.getElementById('monster'),
      getEmail: document.getElementById('email'),
      follow: true,
      w: window.innerWidth / 2,
      h: window.innerHeight / 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUnmount() {
    document.body.classList.remove("color-change-body-login");
  }

  componentDidMount() {
    document.body.classList.add("color-change-body-login");
  }



  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
  }

  handleSubmit(event) {
    axios
      .post(
        "https://api.devcamp.space/sessions",
        {
          client: {
            email: this.state.email,
            password: this.state.password,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth();
        } else {
          this.setState({
            errorText: "Wrong email or password",
          });
          this.props.handleUnsuccessfulAuth();
        }
      })
      .catch((error) => {
        this.setState({
          errorText: "An error ocurred",
        });
        this.props.handleUnsuccessfulAuth();
      });

    event.preventDefault();
  }

  render() {
    return (
      <div className="main-wrap">
        <div className="outer-wrap">
          <div className="img-wrap">
            <img src={formImage} alt="" />
          </div>
          <div className="form-wrap">
            <h1>Log in</h1>
            <br />
            <h2 className="alert-wrong">{this.state.errorText}</h2>

            <form className="form" onSubmit={this.handleSubmit}>
              <br />
              <input type="email" name="email" placeholder="Your email" value={this.state.email}
                onChange={this.handleChange} />
              <br />
              <input type="password" name="password" placeholder="Your password" value={this.state.password}
                onChange={this.handleChange} />
              <br />
              <button type="submit" value="submit" className="btn">Let's start!</button>

            </form>

            <div className="social-login">
              <a href="https://www.google.com/?hl=es">
                <img src={google} alt="Google" />
              </a>
              <a href="https://es-la.facebook.com/">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="https://twitter.com/">
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
            <div className="bottom-text">
              <p>Don't have an account? <a href="#">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
