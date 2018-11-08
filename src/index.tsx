import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Life from './pages/demo/life';
import Admin from './admin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Admin />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
