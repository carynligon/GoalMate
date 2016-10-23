import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    if (document.body.scrollWidth <= 520) {
      this.state = {smallModal: true};
    } else {
      this.state = {smallModal: false};
    }
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
  }
  newGoal(e) {
    e.preventDefault();
    let goal = {
      goal: this.refs.goal.value
    }
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
      width: '450px',
      background: '#F45D01',
      margin: '20% auto'
    });
  }
  smallContentStyles() {
    return ({
      position: 'relative',
      height: '50%',
      width: '90%',
      background: '#F45D01',
      margin: '20% auto'
    });
  }
  render() {
    let style = this.contentStyles();
    if (this.state.smallModal) {
      style = this.smallContentStyles();
    }
    let form = (
      <form className="signup-form" onSubmit={this.signup.bind(this)}>

        <h3>SIGNUP</h3>

        <div className="signup-group1">
          <div className="input-wrapper">
            <label htmlFor="first-name">FIRST NAME</label>
            <input type="text" id="first-name" ref="firstName" required/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="last-name">LAST NAME</label>
            <input type="text" id="last-name" ref="lastName" required/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="zipcode">ZIPCODE</label>
            <input type="number" id="zipcode" ref="zipcode" pattern='[0-9]{5}' required/>
          </div>
        </div>

        <div className="signup-group2">
          <div className="input-wrapper">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" required/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" required/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="password-confirm">CONFIRM PASSWORD</label>
            <input type="password" id="password-confirm" ref="confirmPassword" required/>
          </div>
        </div>

        <button type="submit" id="signup-submit">SUBMIT</button>
      </form>
    );
    if (this.props.method === 'login') {
      form = (
        <form className="login-form" onSubmit={this.login.bind(this)}>

          <h3>LOGIN</h3>

          <div className="input-wrapper">
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" ref="email" required/>
          </div>

          <div className="input-wrapper">
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" ref="password" required/>
          </div>

          <button type="submit" id="login-submit">LOGIN</button>
        </form>
      );
    } else if (this.props.method === 'add-goal') {
      form = (
        <form className="add-goal" onSubmit={this.newGoal.bind(this)}>
          <h3>ADD GOAL</h3>

          <div className="input-wrapper">
          <label htmlFor="goal">GOAL</label>
          <input type="text" id="goal" ref="goal" required/>
          </div>

          <button type="submit" id="goal-submit">ADD</button>
        </form>
      )
    }
    return (
      <div className="modal-container" style={this.containerStyles()} onClick={this.closeModal.bind(this)}>
        <div className="modal-content" style={style}>
          {form}
        </div>
      </div>
    );
  }
}

export default Modal;
