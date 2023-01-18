import React, { useState, useEffect, FC, ReactElement } from 'react';

import { loadExternalScript } from '../../utils/functions';

import styles from './style.module.css';

type FBResponse = {
  name: string;
};

type FBStatus = {
  status: string;
};

type FBProps = {
  handleResponse: (data: FBResponse | FBStatus) => void;
  onFailure: (data: FBStatus) => void;
  fbAppId: string;
  render?: React.ReactNode;
};

const FacebookLogin: FC<FBProps> = ({ handleResponse, fbAppId, onFailure, render }): ReactElement => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  function initializeFacebook() {
    setScriptLoaded(true);
  }

  function loadFbLoginApi() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: fbAppId,
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: 'v2.5', // use version 2.1
      });
    };
  }

  useEffect(() => {
    if (scriptLoaded) return undefined;
    loadFbLoginApi();
    loadExternalScript('facebook-client-script', `https://connect.facebook.net/en_US/sdk.js`, initializeFacebook);
    return () => {
      document.getElementById('facebook-client-script')?.remove();
    };
  }, [scriptLoaded]);

  useEffect(() => {
    if (scriptLoaded)
      window.FB.getLoginStatus((response: { authResponse: any; status: string }) => {
        console.log('File:index.tsx', 'Line: 51', response);
      });
  }, [scriptLoaded]);

  function responseApi(authResponse: any) {
    window.FB.api('/me', (me: FBResponse) => {
      Object.assign(me, authResponse);
      handleResponse(me);
    });
  }

  function checkLoginState(response: { authResponse: any; status: string }) {
    if (response.authResponse) {
      responseApi(response.authResponse);
    } else {
      if (onFailure) {
        onFailure({ status: response.status });
      } else {
        handleResponse({ status: response.status });
      }
    }
  }

  function handleOnClick() {
    window.FB.getLoginStatus((response: { authResponse: any; status: string }) => {
      if (response.status === 'connected') {
        checkLoginState(response);
      } else {
        window.FB.login(checkLoginState, { scope: 'public_profile,email' });
      }
    });
  }

  return (
    <>
      <button className={`${styles.loginBtn} ${styles.loginBtnFacebook}`} onClick={handleOnClick}>
        {render ? render : <span>Sign in With Facebook</span>}
      </button>
    </>
  );
};

export default FacebookLogin;
