import * as React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import MainPage from '../router1/main'
import HomePage from '../router1/HomePage'
import AboutPage from '../router1/About'
import TopicPage from '../router1/topic'
import Home from './Home';


const TopicPageChild = () => (
  <div>
    this is topPicChilde
  </div>
)

export default class IRouter extends React.Component {

  public render(): React.ReactNode {
    return (
      <Router>
        <Home>
          <Route exact={true} path="/" component={MainPage} />
          <Route exact={true} path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/topic" render = { this.renderChild }/>
        </Home>
      </Router>
    )
  }

  private renderChild = ():React.ReactNode => {
    return (
      <div>
        <TopicPage>
          <Route path="/topic/child" component = { TopicPageChild } />
        </TopicPage>
      </div>
    )
  }
}