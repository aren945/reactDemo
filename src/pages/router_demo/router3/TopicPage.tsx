import * as React from 'react'

export default class TopicPageComponent extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        this is Topic Page
        <hr/>
        { this.props.children }
      </div>
    )
  }
}