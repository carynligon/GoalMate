import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      margin: '25% auto'
    });
  }
  render() {
    return (
      <div className="modal-container" style={this.containerStyles()}>
        <div className="modal-content" style={this.contentStyles()}>
        </div>
      </div>
    );
  }
}

export default Modal;
