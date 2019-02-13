import * as React from 'react';

export default class TestComponent extends React.Component {
  public componentWillMount() {
    window.console.log(this)
  }
  public render(): React.ReactNode {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}