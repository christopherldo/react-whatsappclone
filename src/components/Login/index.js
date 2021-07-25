import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Api from '../../helpers/Api';

const Login = ({ onReceive }) => {
  const handleFacebookLogin = async () => {
    try {
      const result = await Api.fbPopup();

      if (result) {
        onReceive(result.user);
      } else {
        // eslint-disable-next-line no-alert
        alert('Erro desconhecido ou permissão negada, tente novamente.');
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(`${error}: ${error.message}`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await Api.googlePopup();

      if (result) {
        onReceive(result.user);
      } else {
        // eslint-disable-next-line no-alert
        alert('Erro desconhecido ou permissão negada, tente novamente.');
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(`${error}: ${error.message}`);
    }
  };

  return (
    <div className="login">
      <button type="button" onClick={handleFacebookLogin}>Logar com o Facebook</button>
      <button type="button" onClick={handleGoogleLogin}>Logar com o Google</button>
    </div>
  );
};

Login.propTypes = {
  onReceive: PropTypes.func.isRequired,
};

export default Login;
