import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MessageItem = ({ data, user }) => (
  <div className="messageLine" style={{ justifyContent: user.id === data.author ? 'flex-end' : 'flex-start' }}>
    <div className="messageItem" style={{ backgroundColor: user.id === data.author ? '#dcf8c6' : '#fff' }}>
      <div className="messageText">{data.body}</div>

      <div className="messageDate">18:00</div>
    </div>
  </div>
);

MessageItem.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MessageItem;
