import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './style.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

const ChatWindow = () => {
  const [emojiOpen, setEmojiOpen] = useState(false);

  const handleEmojiClick = () => {};

  return (
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

      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? '250px' : '0px' }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            role="button"
            className="chatWindow--btn"
            onClick={() => setEmojiOpen(false)}
            style={{ width: emojiOpen ? '40px' : '0px' }}
            tabIndex="-1"
            aria-hidden="true"
          >
            <CloseIcon />
          </div>

          <div
            role="button"
            className="chatWindow--btn"
            onClick={() => setEmojiOpen(true)}
            tabIndex="0"
            aria-hidden="true"
          >
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? '#009688' : '#919191' }}
            />
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
};

export default ChatWindow;
