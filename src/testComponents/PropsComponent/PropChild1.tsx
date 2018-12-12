import * as React from 'react';
import { Button, Icon } from 'antd';
declare type GenderType = string;
interface Ipoprs {
  name: string,
  gender?: GenderType
}

// 第一个为prop,第二个为state
export default class PropChild1 extends React.Component<Ipoprs> {
  public render(): React.ReactNode{
    const {name} = this.props
    return(
      <div>
        <div>{name}</div>
        <Button type="default"><Icon type="plus" />click me</Button>
        <div>{this.props.gender}</div>
      </div>
    )
  }
}