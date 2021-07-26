import React from 'react';
import './style.css';

const ChatIntro = () => (
  <div
    className="chatIntro"
    style={{
      height: '100%', backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #4adf83',
    }}
  >
    <img
      src="https://web.whatsapp.com/img/intro-connection-hq-light_9466a20e6d2921a21ac7ab82419be157.jpg"
      alt="Whatsapp Connected"
    />

    <h1>Bem-vindo ao Clone do Whatsapp</h1>

    <h2>
      Feito por
      {' '}
      <a
        href="https://github.com/christopherldo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @christopherldo
      </a>
    </h2>

    <h2>
      <a
        href="https://github.com/christopherldo/react-whatsappclone"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link para o projeto no Github
      </a>
    </h2>
  </div>
);

export default ChatIntro;
