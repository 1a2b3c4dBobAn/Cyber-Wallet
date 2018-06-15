import React from 'react';
import { withRouter } from 'react-router-dom';
import SimpleLineChart from '../charts/sample_chart';
import StackedAreaChart from '../charts/sample_gchart';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render() {
    return (
      <div className="login-form-container">

        <div className="left">
          <div className="samplechart">
          <StackedAreaChart/>
          </div>
        </div>

        <div className="right">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="title">Welcome to</div>
          <div className="BigTitle">$.Cyber Wallet</div>
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <p>Username</p>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
              <p>Email</p>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              <p>Password</p>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            <p>Please {this.props.formType} or {this.props.navLink}</p>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
