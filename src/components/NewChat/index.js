import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Api from '../../helpers/Api';

const NewChat = ({
  user, show, setShow, setActiveChat,
}) => {
  const [list, setList] = useState([]);

  const getList = async () => {
    if (user) {
      const results = await Api.getContactList(user.id);

      setList(results);
    }
  };

  const addNewChat = async (chatUser) => {
    await Api.addNewChat(user, chatUser, setActiveChat);
    setShow(false);
  };

  useEffect(() => {
    getList();
  }, [show]);

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat--head">
        <button
          type="button"
          className="newChat--backbutton"
          onClick={() => setShow(false)}
        >
          <ArrowBackIcon />
        </button>

        <div className="newChat-headtitle">Nova Conversa</div>
      </div>

      <div className="newChat--list">
        {list.map((item) => (
          <button
            type="button"
            onClick={() => addNewChat(item)}
            className="newChat--item"
            key={item.id}
          >
            <img
              className="newChat--itemavatar"
              src={item.avatar}
              alt={item.name}
            />

            <div className="newChat--itemname">{item.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

NewChat.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  setActiveChat: PropTypes.func.isRequired,
};

export default NewChat;
