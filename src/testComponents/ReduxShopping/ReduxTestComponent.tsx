import * as React from 'react';
import tStore from './ReduxTestStore';

import { Button } from 'antd';
export default class ReduxTestComponent extends React.Component {

  public state = {
    arr: []
  };

  constructor(props: any) {
    super(props);
    this.state = {
      arr: tStore.getState().test2
    }
    window.console.log('123', this.state);
  }

  public addTest = () => {
    tStore.dispatch({type: 'ADD', payload: {
      a: Math.floor(Math.random() * 10)
    }})

    // tStore.getState()获取到的是reducers

    const arr = tStore.getState().test2;
    this.setState({
      arr
    })
  }

  public deleteItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    tStore.dispatch({
      type: 'DELETE'
    })

    const arr = tStore.getState().test1;
    this.setState({
      arr
    })
  }

  public render(): React.ReactNode {
    return (
      <div>
        this is ReduxTestComponent page
        <button onClick={ this.addTest }>点击增加一个test2</button>
        <Button onClick={ this.deleteItem } type="primary">点击推出一个</Button>
        {this.state.arr.map((item: any, index) => {
          return <h1 key={index}>{item.a}</h1>
        })}
      </div>
    )
  }
}