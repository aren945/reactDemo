/**
 * 组件
 */


import * as React from 'react';
import { Button } from 'antd';

import { IAddA } from '../../../interfaces/storeInterfaces';

interface Iprops {
  num: IAddA,
  add: () => void,
  delete: () => void
}

export default class ReactReduxPageComponent extends React.Component<Iprops> {

  constructor(props: any) {
    super(props);
    console.log(props)
  }

  public render(): React.ReactNode {
    return (
      <div>
        <h1 style={{width: '100%', textAlign: 'center'}}>{this.props.num.addA}</h1>
        <Button type="primary" onClick={this.props.add} >加1</Button>
        <Button type="primary" onClick={this.props.delete} >减1</Button>
      </div>
    )
  }
}