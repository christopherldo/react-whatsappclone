import React, { useState, useEffect } from 'react';
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

const App = () => {
  const [chatList, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    setChatList([
      {
        id: 1,
        title: 'Fulano de Tal',
        image:
          'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
      },
      {
        id: 2,
        title: 'Fulano de Tal',
        image:
          'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
      },
      {
        id: 3,
        title: 'Fulano de Tal',
        image:
          'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
      },
      {
        id: 4,
        title: 'Fulano de Tal',
        image:
          'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
      },
    ]);

    setUser({
      id: 1234,
      name: 'Christopher de Oliveira',
      avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    });
  }, []);

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src={user.avatar}
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
            <ChatListItem
              key={item.id}
              data={item}
              onClick={() => setActiveChat(item)}
              active={activeChat.id === item.id}
            />
          ))}
        </div>
      </div>

      <div className="contentarea">
        {activeChat.id ? <ChatWindow user={user} /> : <ChatIntro />}
      </div>
    </div>
  );
};

export default App;
