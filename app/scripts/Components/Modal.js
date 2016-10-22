import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  closeModal(e) {
    if (e.target.className === 'modal-container') {
      this.props.closeModal();
    }
  }
  login(e) {
    e.preventDefault();
    let loginInfo = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    console.log(loginInfo);
  }
  signup(e) {
    e.preventDefault();
    let signupInfo = {
      first_name: this.refs.firstName.value,
      last_name: this.refs.lastName.value,
      zipcode: this.refs.zipcode.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    console.log(signupInfo);
  }
  containerStyles() {
    return ({
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      background: 'rgba(0,0,0,.5)',
      zIndex: '5'
    });
  }
  contentStyles() {
    return ({
      position: 'relative',
      height: '50%',
      width: '50%',
      background: '#F45D01',
      margin: '20% auto'
    });
  }
  render() {
    console.log(this.props);
    let form = (
      <form className="signup-form" onSubmit={this.signup.bind(this)}>
        <label htmlFor="first-name">FIRST NAME</label>
        <input type="text" id="first-name" ref="firstName"/>
        <label htmlFor="last-name">LAST NAME</label>
        <input type="text" id="last-name" ref="lastName"/>
        <label htmlFor="zipcode">ZIPCODE</label>
        <input type="number" id="zipcode" ref="zipcode" pattern='[0-9]{5}'/>
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email"/>
        <label htmlFor="password">PASSWORD</label>
        <input type="password" id="password"/>
        <label htmlFor="password-confirm">CONFIRM PASSWORD</label>
        <input type="password" id="password-confirm" ref="confirmPassword"/>
        <button type="submit" id="signup-submit">SUBMIT</button>
      </form>
    );
    if (this.props.method === 'login') {
      form = (
        <form className="login-form" onSubmit={this.login.bind(this)}>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" ref="email"/>
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" ref="password"/>
          <button type="submit" id="login-submit">LOGIN</button>
        </form>
      );
    }
    return (
      <div className="modal-container" style={this.containerStyles()} onClick={this.closeModal.bind(this)}>
        <div className="modal-content" style={this.contentStyles()}>
          {form}
        </div>
      </div>
    );
  }
}

export default Modal;
