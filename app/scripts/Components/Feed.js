import React from 'react';
import Moment from 'moment';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  switchYes(e) {
    this.setState({rsvp: 'yes'});
  }
  switchNo(e) {
    this.setState({rsvp: 'no'});
  }
  render() {
    let yesChecked = false;
    let noChecked = false;
    if (this.state.rsvp) {
      if (this.state.rsvp === 'yes') {
        yesChecked = true;
        noChecked = false;
      } else {
        yesChecked = false;
        noChecked = true;
      }
    }
    console.log(this.props);
    let feedItems = this.props.feed.map((post,i) => {
      let time = Moment(post.timestamp).from();
      let actions;
      if (post.type) {
        if (post.type === 'tip') {
          actions = (<button className="like-btn">like</button>)
        } else {
          actions = (
            <form className="rsvp-form">
              <div className="checkbox-wrapper">
                <div id="rsvp-yes" role="checkbox" aria-checked={yesChecked} onClick={this.switchYes.bind(this)}></div>
              </div>
              <label htmlFor="rsvp-yes">yes</label>
              <div className="checkbox-wrapper">
                <div id="rsvp-yes" role="checkbox" aria-checked={noChecked} onClick={this.switchNo.bind(this)}></div>
              </div>
              <label htmlFor="rsvp-no">no</label>
              <button type="submit">submit</button>
            </form>
          )
        }
      }
      return (
        <li key={i}>
          <p>{post.content}</p>
          <span className="post-time">{time}</span>
          <span className="post-user"> by {post.user_id}</span>
          {actions}
        </li>
      );
    });
    return (
      <ul className="user-feed-list">
        {feedItems}
      </ul>
    );
  }
}

export default Feed;
