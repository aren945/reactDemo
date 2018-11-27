import * as React from "react";
import { Row, Col } from "antd";
import utils from '../../utils/utils';
import './Header.less';

interface Istate {
  userName: string | '',
  sysTime: string
}

class Header extends React.Component {
  public state: Istate

  public componentWillMount(): void {
    this.computedTime();
    this.setState({
      userName: '郑兴伦'
    })
  }

  public render(): React.ReactNode {
    return (
      <div className="header-wrapper">
        <Row className="top-header">
          <Col span={24} className="top-row">
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="bottom-header">
          <Col span={4} className="bread-name">
            <span>首页</span>
          </Col>
          <Col span={20} className="bread-weather">
            <span>{this.state.sysTime}</span>
            <span>晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }

  private computedTime = (): void => {
    window.setInterval(() => {
      const sysTime = utils.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000)
  }
}

export default Header;
