# Social Sign

> A Google oAUth Sign-in / Log-in Component for React

## Install

```
npm install social-sign
```

## How to use

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'social-sign';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
      handleResponse={responseGoogle}
    />
  );
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
