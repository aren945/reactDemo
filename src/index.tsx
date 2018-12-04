import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Life from './pages/demo/life';
// import Admin from './admin';
// import RouterMain from './pages/router_demo/router1/Index';
import RouterMain from './pages/router_demo/router2/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RouterMain />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
