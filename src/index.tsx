import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import Life from './pages/demo/life';
// import Admin from './admin';
// import RouterMain from './pages/router_demo/router1/Index';
// import RouterMain from './pages/router_demo/router2/router';
// import RouterMain from './pages/router_demo/router3/Router3Main'
import RouterMain from './router';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import AppStores from './stores/reducers';

const store = createStore(AppStores)

ReactDOM.render(
  <RouterMain store={store}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
