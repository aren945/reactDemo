import * as React from 'react';
import './Home.less';

export default class HomePage extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="home-container">
        欢迎进入共享单车管理后台首页
      </div>
    )
  }
}