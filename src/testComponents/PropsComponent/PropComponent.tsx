import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import PropChild1 from './PropChild1';
import { Button } from 'antd';

interface Isate {
  name: string
}
export default class PropComponent extends React.Component<RouteComponentProps, Isate> {

  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      name: 'zhengxinglun'
    }
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  public handleChangeName = (name: string, e: Event) => {
    window.console.log(name)
    window.console.log(e.target)
    this.setState({
      name
    })
  }


  public render(): React.ReactNode {
    return (
      <div>
        <Button name="xinglun" onClick={this.handleChangeName.bind(null, 'xinglun')}>点击修改姓名</Button>
        {/* <Button onClick={(e) => this.handleChangeName(name, e)}>点击修改姓名</Button> */}
        <PropChild1 name={ this.state.name} gender="man" />
      </div>
    )
  }
}