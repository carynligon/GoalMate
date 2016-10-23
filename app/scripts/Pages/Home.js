import React from 'react';

import Modal from '../Components/Modal';
import HomeLoggedIn from './Home_LoggedIn';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showModal: false, loggedIn: true};
  }
  closeModal() {
    this.setState({showModal: false});
  }
  login() {
    this.setState({showModal: !this.state.showModal, login: true});
  }
  signup() {
    this.setState({showModal: !this.state.showModal, login: false});
  }
  render () {
    console.log(this.state);
    let modal;
    if (this.state.showModal) {
      if (this.state.login) {
        modal = <Modal method='login' closeModal={this.closeModal.bind(this)}/>
      } else {
        modal = <Modal method="signup" closeModal={this.closeModal.bind(this)}/>
      }
    }
    let content = (
      <main className="home">
        <div className="title-wrapper">
          <h1><span>Goal</span>Mate</h1>
          <h2>Learn Things</h2>
          <h2>Make Friends</h2>
          <button className="login" onClick={this.login.bind(this)}>LOGIN</button>
          <button className="signup" onClick={this.signup.bind(this)}>SIGNUP</button>
        </div>
        <img src='/assets/images/notes.jpeg'/>
        {modal}
      </main>
    );
    if (this.state.loggedIn) {
      content = <HomeLoggedIn/>
    }
    let random = Math.floor((Math.random() * 2));
    return (
      <div className="wrapper">{content}</div>
    )
  }
}

export default Home;
