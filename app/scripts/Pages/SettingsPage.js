import React from 'react';

import Nav from '../Components/Nav';

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getImage(e) {
    document.getElementById('image-label').classList.add('loaded');
    this.setState({image: e.target.files[0]})
  }
  sendInfo(e) {
    e.preventDefault();
    let data = {
      first_name: this.refs.name.value,
      email: this.refs.email.value,
      zipcode: this.refs.zipcode.value,
      image: this.state.image
    }
  }
  componentWillMount() {
    this.setState({
      user: {
        name: 'Caryn',
        email: 'hello@carynligon.com',
        zipcode: 78751,
        image: '/assets/images/user-icon.png'
      }
    });
  }
  render() {
    let file;
    if (this.state.image) {
      file = this.state.image.name;
    }
    return (
      <main>
        <Nav/>
        <form className="edit-settings-form" onSubmit={this.sendInfo.bind(this)}>

          <h3>ACCOUNT SETTINGS</h3>

          <div className="input-wrapper">
            <label htmlFor="first-name">FIRST NAME</label>
            <input type="text" id="first-name" ref="name" required/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">EMAIL</label>
            <input type="text" id="email" ref="email" required/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="zipcode">ZIPCODE</label>
            <input type="number" id="zipcode" ref="zipcode" pattern='[0-9]{5}' required/>
          </div>

        <div className="input-wrapper">
          <label htmlFor="user-icon" id="image-label">CHOOSE A NEW IMAGE<p>{file}</p></label>
          <input type="file" id="user-icon" ref="icon" accept="image/*" onChange={this.getImage.bind(this)}/>
        </div>

        <button type="submit" id="submit-settings">SUBMIT</button>
        </form>
      </main>
    );
  }
 }

 export default SettingsPage;
