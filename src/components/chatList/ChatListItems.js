import React, { Component } from "react";
import Avatar from "./Avatar";
import { withRouter, Link } from 'react-router-dom';

class ChatListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherUser: this.props.mail,
      id: this.props.key1,
      
    };
    console.log(this.state.otherUser);
    console.log(this.state.id);
  }

  selectChat = (otherUser) => {
    //this.props.router.push(`/${otherUser}`);
    console.log(this.props.router);
  }


  render() {
    return (
      <Link to={`/${this.state.otherUser}`}>
        <div
          key={this.state.otherUser}
          style={{ animationDelay: `0.${this.props.animationDelay}s` }}
          
          className={`chatlist__item ${
            this.props.active ? this.props.active : ""
          } `}
        >
          <Avatar
            image={
              this.props.image ? this.props.image : "http://placehold.it/80x80"
            }
            isOnline={this.props.isOnline}
          />

          <div className="userMeta">
            <p>{this.props.name}</p>
            <span className="activeTime">32 mins ago</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default ChatListItems;




