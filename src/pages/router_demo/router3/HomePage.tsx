import * as React from 'react'
import { Link } from 'react-router-dom'

export default class HomePageComponent extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        this is Home Page
        <ul>
          <li><Link to="/about">About Page</Link></li>
          <li><Link to="/topic">Topic Page</Link></li>
          <li><Link to="/topic/child/ad">TopicChild Page</Link></li>
          <li><Link to="/404">404 Page</Link></li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    )
  }
}