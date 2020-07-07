import './index.css';
import './plugins/sentry.plugin';
import './plugins/one-signal.plugin';
import 'semantic-ui-css/semantic.min.css';
import './apis/axios.api';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import * as store from './mobx';

import Loading from './components/loading';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { createBrowserHistory } from 'history';
import { router } from './mobx/';
import { syncHistoryWithStore } from 'mobx-react-router';

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();

const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Loading />
      <Router history={history}>
          <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//</React.StrictMode>serviceWorker.unregister();
serviceWorker.register();
