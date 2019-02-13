import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import PropChild1 from './PropChild1';
import PropChild2 from './PropChild2';
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

  // 不推荐在render方法中使用箭头函数或者使用bind，会导致重复绑定事件。
  // 1.将数据传递给HTML元素
  public handleChangeName = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.console.log((e.target as HTMLInputElement).getAttribute('data-name'))
    const name = (e.target as HTMLInputElement).getAttribute('data-name') as string
    // window.console.log(e.target)
    this.setState({
      name
    })
  }



  // 2.提取成子组件
  public handleChangeName2 = (name: string, e: React.MouseEvent<HTMLButtonElement>) => {
    window.console.log((e.target as HTMLInputElement).getAttribute('data-name'))
    // window.console.log(e.target)
    this.setState((revState:any, prop: any,) => {
      window.console.log('revState is', revState)
      window.console.log('prop is', prop)
      return {
        name
      }
    })
  }

  private _renderChild(): React.ReactNode {
    return (
      <>
        <PropChild2 name={ this.state.name} gender="niupi" onChangeName = {this.handleChangeName2} />
      </>
    )
  }


  // tslint:disable-next-line:member-ordering
  public render(): React.ReactNode {
    return (
      <div>
        <Button name="xinglun" data-name="dasd" onClick={this.handleChangeName}>点击修改姓名</Button>
        <hr/>
        {this._renderChild()}
        <PropChild2 name={ this.state.name} gender="niupi" onChangeName = {this.handleChangeName2} />
        <hr/>
        {/* <Button onClick={(e) => this.handleChangeName(name, e)}>点击修改姓名</Button> */}
        <PropChild1 name={ this.state.name} gender="man" />
      </div>
    )
  }
}