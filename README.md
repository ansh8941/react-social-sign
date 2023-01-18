# Social Sign

> A Google oAUth Sign-in / Log-in Component for React

## Install

```
npm install react-social-sign
```

## How to use GoogleLogin

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-social-sign';

function App() {
  const handleResponse = (response) => {
    console.log(response);
  };

  return <GoogleLogin clientId={'CLIENT_ID'} handleResponse={handleResponse} />;
}

export default App;
```

## GoogleLogin Props

|     params     |  value   |                                         default value                                         |                                                                   description                                                                   |
| :------------: | :------: | :-------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|    clientId    |  string  |                                           REQUIRED                                            | You can create a clientID by creating a [new project on Google developers website.](https://developers.google.com/identity/sign-in/web/sign-in) |
| handleResponse | function |                                           REQUIRED                                            |                                                 Return Google User Details in JWT decoded form                                                  |
|  buttonTheme   |  object  | { theme: 'outline'; text: 'signin_with'; shape: 'rectangular'; size: 'large'; width: '40px' } |                                                               handle Button theme                                                               |
|  promptEnable  | boolean  |                                             false                                             |                                                           Google One tap popup enable                                                           |

## handleResponse callback

handleResponse callback returns a GoogleUser object which provides access
to all of the GoogleUser methods listed here: https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse .

You can also access the returned values via the following properties on the returned object.

| property name  |  value  |                   definition                   |
| :------------: | :-----: | :--------------------------------------------: |
|      sub       | number  |   The unique ID of the user's Google Account   |
|     email      | string  |            The user's email address            |
| email_verified | boolean | true, if Google has verified the email address |
|      name      | string  |                   User Name                    |
|    picture     | string  |                 Profile image                  |
|   given_name   | string  |                User First Name                 |
|  family_name   | string  |                 User Last Name                 |

## How to use FacebookLogin

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { FacebookLogin } from 'react-social-sign';

function App() {
  const handleResponse = (res) => {
    console.log(res);
  };
  const onFailure = (res) => {
    console.log(res);
  };

  return <FacebookLogin fbAppId={'APP_ID'} onFailure={onFailure} handleResponse={handleResponse} />;
}

export default App;
```

## FacebookLogin button without styling

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { FacebookLogin } from 'react-social-sign';

function App() {
  const handleResponse = (res) => {
    console.log(res);
  };
  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <FacebookLogin
      fbAppId={'APP_ID'}
      onFailure={onFailure}
      handleResponse={handleResponse}
      render={(renderProps) => <button onClick={renderProps.onClick}>This is my custom FB button</button>}
    />
  );
}

export default App;
```

## FacebookLogin Props

|     params     |  value   |                  default value                  |
| :------------: | :------: | :---------------------------------------------: |
|    fbAppId     |  string  |                    REQUIRED                     |
| handleResponse | function |                    REQUIRED                     |
|   onFailure    | function | optional function to separatere the failed init |
|     render     | function |                   Htnl button                   |
