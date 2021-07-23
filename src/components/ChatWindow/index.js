import React, { useState, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './style.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

const ChatWindow = () => {
  let recognition;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) recognition = new SpeechRecognition();

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [textPlaceholder, setTextPlaceholder] = useState('');

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleSendClick = () => {

  };

  useEffect(() => {
    if (text === '') setTextPlaceholder('Digite uma mensagem');
  }, [text]);

  const handleMicClick = () => {
    if (recognition) {
      if (listening) {
        setTextPlaceholder('Reconhecendo a voz...');
        setListening(false);
        recognition.stop();
        return;
      }

      setTextPlaceholder('Fale agora');

      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
  };

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
            aria-hidden="true"
          >
            <CloseIcon />
          </div>

          <div
            role="button"
            className="chatWindow--btn"
            onClick={() => setEmojiOpen(true)}
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
            placeholder={textPlaceholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="chatWindow--pos">
          {text
            ? (
              <div onClick={handleSendClick} className="chatWindow--btn" aria-hidden="true">
                <SendIcon />
              </div>
            )
            : (
              <div onClick={handleMicClick} className="chatWindow--btn" aria-hidden="true">
                <MicIcon style={{ color: listening ? '#126ece' : '#919191' }} />
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
