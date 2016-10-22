import React from 'react';
import Moment from 'moment';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  switchYes(e) {
    e.target.parentNode.nextSibling.nextSibling.children[0].setAttribute('aria-checked', false);
    e.target.setAttribute('aria-checked', true)
  }
  switchNo(e) {
    e.target.parentNode.previousSibling.previousSibling.children[0].setAttribute('aria-checked', false);
    e.target.setAttribute('aria-checked', true)
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
        if (post.type === 'Tip') {
          actions = (<button className="like-btn">like</button>)
        } else {
          actions = (
            <form className="rsvp-form">
              <div className="checkbox-wrapper">
                <div id="rsvp-yes" role="checkbox" onClick={this.switchYes.bind(this)}></div>
              </div>
              <label htmlFor="rsvp-yes">yes</label>
              <div className="checkbox-wrapper">
                <div id="rsvp-yes" role="checkbox" onClick={this.switchNo.bind(this)}></div>
              </div>
              <label htmlFor="rsvp-no">no</label>
              <button type="submit">submit</button>
            </form>
          )
        }
      }
      return (
        <li key={i}>
          <p>{post.comment}</p>
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
