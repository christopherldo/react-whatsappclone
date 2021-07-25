import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MessageItem = ({ data, user }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    if (data.date) {
      const date = new Date(data.date.seconds * 1000);

      let hours = date.getHours();
      let minutes = date.getMinutes();

      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;

      setTime(`${hours}:${minutes}`);
    }
  }, [data]);

  return (
    <div className="messageLine" style={{ justifyContent: user.id === data.author ? 'flex-end' : 'flex-start' }}>
      <div className="messageItem" style={{ backgroundColor: user.id === data.author ? '#dcf8c6' : '#fff' }}>
        <div className="messageText">{data.body}</div>

        <div className="messageDate">{time}</div>
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.shape({
      seconds: PropTypes.number.isRequired,
      nanoseconds: PropTypes.number,
    }).isRequired,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageItem;
