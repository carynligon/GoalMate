import React from 'react';

import Nav from '../Components/Nav';

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <main>
        <Nav/>
        <form className="edit-settings-form">

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
          <label htmlFor="user-icon">IMAGE</label>
          <input type="file" id="user-icon" ref="icon" accept="image/*"/>
        </div>

        <button type="submit" id="submit-settings">SUBMIT</button>
        </form>
      </main>
    );
  }
 }

 export default SettingsPage;
