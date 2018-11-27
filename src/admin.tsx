import { Col, Row } from "antd";
import * as React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
// import { Row } from 'antd';

import './style/common.less';

export default class Admin extends React.Component {
  public render() {
    return (
      <Row className="container">
        <Col span={3} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={21} className="main">
          <Header />
          <Row className="content">
            content
            {/* {this.props.children} */}
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
