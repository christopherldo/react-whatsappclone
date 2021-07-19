import React, { useState, useEffect } from 'react';
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from './components/ChatListItem';

const App = () => {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    setChatList([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
  }, []);

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="Avatar"
          />

          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon />
            </div>

            <div className="header--btn">
              <ChatIcon />
            </div>

            <div className="header--btn">
              <MoreVertIcon />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon />

            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>

        <div className="chatlist">
          {chatList.map((item) => (
            <ChatListItem key={item.id} />
          ))}
        </div>
      </div>

      <div className="contentarea">...</div>
    </div>
  );
};

export default App;
