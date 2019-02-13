import * as React from 'react';
import withHeader from './HocComponent';

class Demo extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        this is Component
      </div>
    )
  }
}

export default withHeader(Demo);