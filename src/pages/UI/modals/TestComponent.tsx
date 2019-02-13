import * as React from 'react';

interface Iprops {
  left: any
}

export default class TestComponent extends React.Component<Iprops> {

  public myRef:any

  constructor(props: Iprops) {
    super(props);
    // 不能再函数式组件上使用ref属性,因为他们没有实例。
    this.myRef = React.createRef();
    window.console.log(this.myRef)
  }

  public render(): React.ReactNode {
    return (
      <div>
        this is testDOM
        <div ref = {this.myRef}>
          {this.props.children}
        </div>
        {this.props.left}
      </div>
    )
  }
}