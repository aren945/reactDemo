import * as React from 'react';
import tStore from './ReduxTestStore';
import store from './ReduxTestStore';

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
    store.dispatch({type: 'ADD', payload: {
      a: 1
    }})

    const arr = tStore.getState().test2;
    this.setState({
      arr
    })
  }

  public render(): React.ReactNode {
    return (
      <div>
        this is ReduxTestComponent page
        <button onClick={this.addTest}>点击增加一个test2</button>
        {this.state.arr.map((item: any, index) => {
          return <h1 key={index}>{item.a}</h1>
        })}
      </div>
    )
  }
}