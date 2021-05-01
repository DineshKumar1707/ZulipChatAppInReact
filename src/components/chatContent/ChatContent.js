import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import UserService from "../../services/UserService";
import { withRouter } from 'react-router-dom';


class ChatContent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            otherUser: this.props.match.params.otherUser,
            userMsg: []        
        }
    }

    componentDidMount() {
        UserService.getUsersMsg(this.state.otherUser).then( res => {
            console.log(res.data);
            this.setState({userMsg: res.data.messages })
            // console.log(this.state.userMsg);
        })
    }

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            {this.state.userMsg && this.state.userMsg.map((item, index) => {
              return (
                <div className="current-chatting-user">
                  <Avatar
                    image={item.avatar_url}
                  />
                  <p>{item.sender_full_name}</p>
                </div>
              )
            })}
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.userMsg && this.state.userMsg.map((itm, index) => {
                return (
                  <ChatItem
                    animationDelay={index + 2}
                    key={itm.key}
                    user={itm.type ? itm.type : "me"}
                    msg={itm.msg}
                    image={itm.image}
                  />
                );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ChatContent);