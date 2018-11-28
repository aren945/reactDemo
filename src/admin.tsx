import { Col, Row } from "antd";
import * as React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavLeft from "./components/NavLeft/NavLeft";
import HomePage from './pages/home/Home';
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
          <Row className="content-wrapper">
            <div className="content-container">
              {/* content */}
              <HomePage />
            </div>
            {/* {this.props.children} */}
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
