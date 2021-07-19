import React from 'react';
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const App = () => (
  <div className="app-window">
    <div className="sidebar">
      <header>
        <img className="header--avatar" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="Avatar" />

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
        ...
      </div>

      <div className="chatlist">
        ...
      </div>
    </div>

    <div className="contentarea">
      ...
    </div>
  </div>
);

export default App;
