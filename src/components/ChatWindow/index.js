import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emoji-picker-react';
import './style.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

import MessageItem from '../MessageItem';

const ChatWindow = ({ user }) => {
  let recognition;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) recognition = new SpeechRecognition();

  const body = useRef();

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [textPlaceholder, setTextPlaceholder] = useState('');
  const [list, setList] = useState([]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleSendClick = () => {

  };

  useEffect(() => {
    if (text === '') setTextPlaceholder('Digite uma mensagem');
  }, [text]);

  useEffect(() => {
    setList([
      { id: 1, body: 'Aopa', author: 123 },
      { id: 2, body: 'Bão?', author: 123 },
      { id: 3, body: 'Bão demais sô', author: 1234 },
      { id: 4, body: 'Aopa', author: 123 },
      { id: 5, body: 'Bão?', author: 123 },
      { id: 6, body: 'Bão demais sô', author: 1234 },
      { id: 7, body: 'Aopa', author: 123 },
      { id: 8, body: 'Bão?', author: 123 },
      { id: 9, body: 'Bão demais sô', author: 1234 },
      { id: 10, body: 'Aopa', author: 123 },
      { id: 11, body: 'Bão?', author: 123 },
      { id: 12, body: 'Bão demais sô', author: 1234 },
      { id: 13, body: 'Aopa', author: 123 },
      { id: 14, body: 'Bão?', author: 123 },
      { id: 15, body: 'Bão demais sô', author: 1234 },
      { id: 16, body: 'Aopa', author: 123 },
      { id: 17, body: 'Bão?', author: 123 },
      { id: 18, body: 'Bão demais sô', author: 1234 },
      { id: 19, body: 'Aopa', author: 123 },
      { id: 20, body: 'Bão?', author: 123 },
    ]);
  }, []);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

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

      <div ref={body} className="chatWindow--body">
        {list.map((item) => (
          <MessageItem key={item.id} data={item} user={user} />
        ))}
      </div>

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
          <button
            type="button"
            className="chatWindow--btn"
            onClick={() => setEmojiOpen(false)}
            style={{ width: emojiOpen ? '40px' : '0px' }}
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            className="chatWindow--btn"
            onClick={() => setEmojiOpen(true)}
            aria-hidden="true"
          >
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? '#009688' : '#919191' }}
            />
          </button>
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
              <button type="button" onClick={handleSendClick} className="chatWindow--btn">
                <SendIcon />
              </button>
            )
            : (
              <button type="button" onClick={handleMicClick} className="chatWindow--btn">
                <MicIcon style={{ color: listening ? '#126ece' : '#919191' }} />
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

ChatWindow.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default ChatWindow;
