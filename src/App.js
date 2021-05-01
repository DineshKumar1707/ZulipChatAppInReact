import React from 'react';
import "./App.css";
import "./chatBody.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChatList from './components/chatList/ChatList';
import Nav from './components/nav/Nav';
import ChatContent from './components/chatContent/ChatContent';




function App() {
  return (
    <div className="__main">
      
        <Nav />
          <div className="main__chatbody">
            
            <Router>
            <ChatList>
              <Switch>
                <Route path="/:otherUser" component= {ChatContent}></Route>
              </Switch>
              </ChatList>
              </Router>  
            
          </div>
      
    </div>
  );
}

export default App;
