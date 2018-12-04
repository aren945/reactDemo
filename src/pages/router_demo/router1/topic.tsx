import * as React from 'react'

export default class TopicPage extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        this is Topic page
        <hr/>
        {this.props.children}
      </div>
    )
  }
}