import * as React from 'react';
import { Button, Icon } from 'antd';
declare type GenderType = string;
interface Ipoprs {
  name: string,
  gender?: GenderType,
  onChangeName: (name: string, e: React.MouseEvent<HTMLButtonElement>) => void
}

// 第一个为prop,第二个为state
export default class PropChild1 extends React.Component<Ipoprs> {

  public handleChangeName = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onChangeName } = this.props
    onChangeName('xinglun123', e)
  }

  public render(): React.ReactNode{
    const {name} = this.props
    return(
      <div>
        <div>{name}</div>
        <Button type="default" data-name="buton2"  onClick={ this.handleChangeName }><Icon type="plus"/>点击修改姓名2</Button>
        <div>{this.props.gender}</div>
      </div>
    )
  }
}