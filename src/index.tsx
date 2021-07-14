import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.module.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import store from './reducers';
import * as serviceWorker from './serviceWorker';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
