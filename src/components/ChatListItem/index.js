import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ChatListItem = ({ data, onClick, active }) => (
  <button type="button" className="chatListItem" onClick={onClick} role="row" aria-selected={active}>
    <img
      className="chatListItem--avatar"
      src={data.image}
      alt={data.title}
    />

    <div className="chatListItem--lines">
      <div className="chatListItem--line">
        <div className="chatListItem--name">{data.title}</div>

        <div className="chatListItem--date">18:00</div>
      </div>

      <div className="chatListItem--line">
        <div className="chatListItem--lastMsg">
          <p>Opa, bão?</p>
        </div>
      </div>
    </div>
  </button>
);

ChatListItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default ChatListItem;
