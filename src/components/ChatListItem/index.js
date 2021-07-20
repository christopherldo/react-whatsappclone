import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ChatListItem = ({ onClick, selected }) => (
  <button type="button" className="chatListItem" onClick={onClick} role="row" aria-selected={selected}>
    <img
      className="chatListItem--avatar"
      src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
      alt="Avatar"
    />

    <div className="chatListItem--lines">
      <div className="chatListItem--line">
        <div className="chatListItem--name">Christopher de Oliveira</div>

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
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default ChatListItem;
