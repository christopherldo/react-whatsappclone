import React from 'react';
import './style.css';

const ChatListItem = () => (
  <div className="chatListItem">
    <img
      className="chatListItem--avatar"
      src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
      alt="Avatar"
    />

    <div className="chatListItem--lines">
      <div className="chatListItem--line">
        <div className="chatListItem--name">Christopher de Oliveira</div>

        <div className="chatListItem--date">19:00</div>
      </div>

      <div className="chatListItem--line">
        <div className="chatListItem--lastMsg">
          <p>Opa, bão?</p>
        </div>
      </div>
    </div>
  </div>
);

export default ChatListItem;
