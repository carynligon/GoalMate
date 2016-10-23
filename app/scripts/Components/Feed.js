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
  newPost(e) {
    e.preventDefault();
    let type;
    if (document.getElementById('type-event').checked) {
      type = 'Event'
    } else {type = 'Tip'}
    let post = {
      content: document.getElementById('post-textbox').textContent,
      type: type
    }
    store.posts.newPost();
  }
  render() {
    let yesChecked = false;
    let noChecked = false;
    let textBox;
    let banner;
    let heading = 'What\'s happening:';
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
      if (this.props.newPosts) {
        textBox = (
          <form className="new-post-form" onSubmit={this.newPost.bind(this)}>
            <textarea id="post-textbox" placeholder="Know of an event or have any advice for other members?"></textarea>
            <input type="radio" id="type-tip" name="type" value="Tip" ref="tip"/>
            <label htmlFor="type-tip">Tip</label>
            <input type="radio" id="type-event" name="type" value="Event" ref="event"/>
            <label htmlFor="type-event">Event</label>
            <button type="submit">POST</button>
          </form>
        );
        heading = 'What\'s happening in this group:';
        banner = (<div className="group-banner">
          <h2>{this.props.group.name}</h2>
        </div>);
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
      <div className="feed-wrapper">
        {banner}
        <ul className="user-feed-list">
            <h4>{heading}</h4>
            {textBox}
            {feedItems}
        </ul>
      </div>
    );
  }
}

export default Feed;
