import React from 'react';
import './style.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import CloseIcon from '@material-ui/icons/Close';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

const ChatWindow = () => (
  <div className="chatWindow">
    <div className="chatWindow--header">
      <div className="chatWindow--headerinfo">
        <img
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          alt=""
          className="chatWindow--avatar"
        />

        <div className="chatWindow--name">Christopher de Oliveira</div>
      </div>

      <div className="chatWindow--headerbuttons">
        <div className="chatWindow--btn">
          <SearchIcon />
        </div>

        <div className="chatWindow--btn">
          <AttachFileIcon />
        </div>

        <div className="chatWindow--btn">
          <MoreVertIcon />
        </div>
      </div>
    </div>

    <div className="chatWindow--body">...</div>

    <div className="chatWindow--footer">
      <div className="chatWindow--pre">
        <div className="chatWindow--btn">
          <InsertEmoticonIcon />
        </div>
      </div>

      <div className="chatWindow--inputarea">
        <input
          type="text"
          className="chatWindow--input"
          placeholder="Digite uma mensagem"
        />
      </div>

      <div className="chatWindow--pos">
        <div className="chatWindow--btn">
          <SendIcon />
        </div>
      </div>
    </div>
  </div>
);

export default ChatWindow;
