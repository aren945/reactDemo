import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import TopicPage from './TopicPage'
import TopicChildPage from './TopicChildPage'

const NoMatch = (): JSX.Element => {
  return(
    <div>404 Page</div>
  )
}


export default class Router3Main extends React.Component {
  public render():React.ReactNode {
    return (
      <div>
        <Router>
          <HomePage>
            <Switch>
              <Route path="/about" component={AboutPage} />
              <Route path="/topic" render={this.renderTopicChildren} />
              {/* 匹配404页面 */}
              <Route component={NoMatch} />
            </Switch>
          </HomePage>
        </Router>
      </div>
    )
  }

  private renderTopicChildren(): React.ReactNode {
    return (
      <TopicPage>
        <Route exact={true} path="/topic/child/:childID?" component={ TopicChildPage } />
      </TopicPage>
    )
  }
}