import React, { useState, useEffect, FC, ReactElement } from 'react';

import { loadExternalScript } from '../../utils/functions';

type theme = { theme: 'outline'; text: 'signin_with'; shape: 'rectangular'; size: 'large'; width: '40px' };
type GoogleProps = {
  handleResponse: (data: string) => void;
  clientId: string;
  buttonTheme?: theme;
  promptEnable?: false;
};
const GoogleLogin: FC<GoogleProps> = ({ handleResponse, clientId, buttonTheme, promptEnable }): ReactElement => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  function handleCredentialResponse(response: { credential: string }) {
    handleResponse(response.credential);
  }
  useEffect(() => {
    if (scriptLoaded) return undefined;
    const initializeGoogle = () => {
      if (!window.google || scriptLoaded) return;
      setScriptLoaded(true);

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('googleLoginBtn'),
        { ...buttonTheme }, // customization attributes
      );
      if (promptEnable) window.google.accounts.id.prompt(); // also display the One Tap dialog
    };

    loadExternalScript('google-client-script', 'https://accounts.google.com/gsi/client', initializeGoogle);

    return () => {
      window.google?.accounts.id.cancel();
      document.getElementById('google-client-script')?.remove();
    };
  }, [scriptLoaded]);

  return <div id='googleLoginBtn' />;
};

export default GoogleLogin;
