import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emoji-picker-react';
import './style.css';

import CloseIcon from '@material-ui/icons/Close';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

import MessageItem from '../MessageItem';

import Api from '../../helpers/Api';

const ChatWindow = ({ user, data }) => {
  let recognition;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) recognition = new SpeechRecognition();

  const body = useRef();

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [textPlaceholder, setTextPlaceholder] = useState('');
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleSendClick = () => {
    if (text) {
      Api.sendMessage(data, user.id, 'text', text, users);
      setText('');
      setEmojiOpen(false);
    }
  };

  const handleInputKeyUp = (e) => {
    if (e.key === 'Enter') handleSendClick();
  };

  useEffect(() => {
    if (text === '') setTextPlaceholder('Digite uma mensagem');
  }, [text]);

  useEffect(() => {
    setList([]);
    return Api.onChatContent(data.chat_id, setList, setUsers);
  }, [data.chat_id]);

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
            src={data.image}
            alt={data.title}
            className="chatWindow--avatar"
          />

          <div className="chatWindow--name">{data.title}</div>
        </div>
      </div>

      <div ref={body} className="chatWindow--body">
        {list.map((item, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <MessageItem key={key} data={item} user={user} />
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
            onKeyUp={handleInputKeyUp}
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
  data: PropTypes.shape({
    chat_id: PropTypes.string.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatWindow;
