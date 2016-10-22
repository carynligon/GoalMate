import React from 'react';

import Modal from '../Components/Modal';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {images: ['assets/images/notes.jpeg']};
  }
  login() {
    this.setState({showModal: true, login: true});
  }
  signup() {
    this.setState({showModa: true, login: false});
  }
  render () {
    let random = Math.floor((Math.random() * 2));
    return (
      <main className="home">
        <div className="title-wrapper">
          <h1><span>Goal</span>Mate</h1>
          <h2>Learn Things</h2>
          <h2>Make Friends</h2>
          <button className="login" onClick={this.login.bind(this)}>LOGIN</button>
          <button className="signup" onClick={this.signup.bind(this)}>SIGNUP</button>
        </div>
        <img src={this.state.images[0]}/>
        <Modal/>
      </main>
    )
  }
}

export default Home;
