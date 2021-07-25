import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ChatListItem = ({ data, onClick, active }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    if (data.last_message_date) {
      const date = new Date(data.last_message_date.seconds * 1000);

      let hours = date.getHours();
      let minutes = date.getMinutes();

      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;

      setTime(`${hours}:${minutes}`);
    }
  }, [data]);

  return (
    <button type="button" className="chatListItem" onClick={onClick} role="row" aria-selected={active}>
      <img
        className="chatListItem--avatar"
        src={data.image}
        alt={data.title}
      />

      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">{data.title}</div>

          <div className="chatListItem--date">{time}</div>
        </div>

        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>{data.last_message}</p>
          </div>
        </div>
      </div>
    </button>
  );
};

ChatListItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    last_message: PropTypes.string,
    last_message_date: PropTypes.shape({
      seconds: PropTypes.number,
      nanoseconds: PropTypes.number,
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default ChatListItem;
