import React, { useState, useEffect } from 'react';
import './App.css';

import ChatIcon from '@material-ui/icons/Chat';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

import Api from './helpers/Api';

const App = () => {
  const [chatList, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [user, setUser] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);

  const handleLoginData = async (fbUser) => {
    const newUser = {
      id: fbUser.uid,
      name: fbUser.displayName,
      avatar: fbUser.photoURL,
    };

    await Api.addUser(newUser);

    setUser(newUser);
  };

  useEffect(() => (user ? Api.onChatList(user.id, setChatList) : null), [user]);

  return (
    <>
      {user ? (
        <div className="app-window">
          <div className="sidebar">
            <NewChat
              user={user}
              show={showNewChat}
              setShow={setShowNewChat}
              chatList={chatList}
              setActiveChat={setActiveChat}
            />

            <header>
              <img className="header--avatar" src={user.avatar} alt="Avatar" />

              <div className="header--buttons">
                <button
                  type="button"
                  className="header--btn"
                  onClick={() => setShowNewChat(true)}
                >
                  <ChatIcon />
                </button>
              </div>
            </header>

            <div className="chatlist">
              {chatList.map((item) => (
                <ChatListItem
                  key={item.chat_id}
                  data={item}
                  onClick={() => setActiveChat(item)}
                  active={activeChat?.chat_id === item.chat_id}
                />
              ))}
            </div>
          </div>

          <div className="contentarea">
            {activeChat ? (
              <ChatWindow user={user} data={activeChat} />
            ) : (
              <ChatIntro />
            )}
          </div>
        </div>
      ) : (
        <Login onReceive={handleLoginData} />
      )}
    </>
  );
};

export default App;
