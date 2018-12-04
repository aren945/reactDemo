import * as React from 'react'
import { Link } from 'react-router-dom'
class Router2Demo extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topic">Topic</Link></li>
            <li><Link to="/topic/child">TopicChilde</Link></li>
          </ul>
          <hr/>
          {this.props.children}
      </div>
    )
  }
}

export default Router2Demo 