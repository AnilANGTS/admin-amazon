import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import Logo from "../assets/images/logo-white.svg";
import { updateEmail, updatePassword, onLoggedin } from "../actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoad: false });
    }, 500);

    document.body.classList.remove("theme-cyan");
    document.body.classList.remove("theme-purple");
    document.body.classList.remove("theme-blue");
    document.body.classList.remove("theme-green");
    document.body.classList.remove("theme-orange");
    document.body.classList.remove("theme-blush");
  }

  handleLogin = () => {
    // Dispatch the onLoggedin action
    this.props.onLoggedin();
    // Navigate to the desired route after login
    this.props.history.push("/tablenormal");
  };

  render() {
    return (
      <div className="theme-cyan">
        <div className="page-loader-wrapper" style={{ display: this.state.isLoad ? 'block' : 'none' }}>
          <div className="loader">
            <div className="m-t-30">
              <img src={require('../assets/images/logo-icon.svg')} width="48" height="48" alt="Lucid" />
            </div>
            <p>Please wait...</p>
          </div>
        </div>
        <div className="hide-border">
          <div className="vertical-align-wrap">
            <div className="vertical-align-middle auth-main">
              <div className="auth-box">
                <div className="top">
                  <img src={Logo} alt="Lucid" style={{ height: "40px", margin: "10px" }} />
                </div>
                <div className="card">
                  <div className="header">
                    <p className="lead">Login to your account</p>
                  </div>
                  <div className="body">
                    <div className="form-auth-small">
                      <div className="form-group">
                        <label className="control-label sr-only">Email</label>
                        <input
                          className="form-control"
                          id="signin-email"
                          placeholder="Email"
                          type="email"
                          value={this.props.email}
                          onChange={e => this.props.updateEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label sr-only">Password</label>
                        <input
                          className="form-control"
                          id="signin-password"
                          placeholder="Password"
                          type="password"
                          value={this.props.password}
                          onChange={e => this.props.updatePassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group clearfix">
                        <label className="fancy-checkbox element-left">
                          <input type="checkbox" />
                          <span>Remember me</span>
                        </label>
                      </div>
                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="button"
                        onClick={this.handleLogin}
                      >
                        Login
                      </button>
                      <div className="bottom">
                        <span className="helper-text m-b-10">
                          <i className="fa fa-lock"></i>{" "}
                          <Link to="/forgotpassword">Forgot password?</Link>
                        </span>
                        <span>
                          Don't have an account?{" "}
                          <Link to="/registration">Register</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  onLoggedin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

const mapStateToProps = ({ loginReducer }) => ({
  email: loginReducer.email,
  password: loginReducer.password
});

export default connect(mapStateToProps, {
  updateEmail,
  updatePassword,
  onLoggedin
})(withRouter(Login));
