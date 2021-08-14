import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStore } from './store/globalStore';
import './index.module.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStore>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </GlobalStore>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
