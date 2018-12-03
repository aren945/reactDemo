import * as React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom';


import HomePage from './HomePage';
import AboutPage from './About';
import MainPage from './main';
import TopicPage from './topic';

export default class RouterDemo extends React.Component {
  public render(): React.ReactNode {
    return (
      <HashRouter>
        <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topic">Topic</Link></li>
          </ul>
          <hr/>
          <Route exact={true} path="/" component={MainPage} />
          <Route exact={true} path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/topic" component={TopicPage} />
        </div>
      </HashRouter>
    )
  }
}