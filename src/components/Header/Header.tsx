import * as React from "react";
import { Row, Col } from "antd";
import utils from '../../utils/utils';
import Axios from '../../axios/index';
import './Header.less';

interface Istate {
  userName: string | '',
  sysTime: string,
  weather: string,
  imgUrl: ''
}

class Header extends React.Component {
  public state: Istate

  public componentWillMount(): void {
    this.computedTime();
    this.getWeatherData();
    this.setState({
      userName: '郑兴伦'
    })
  }

  public render(): React.ReactNode {
    const imgC = this.state.imgUrl ? <img src={this.state.imgUrl} alt=""/> : '';
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
            <span>{this.state.weather}</span>
            { imgC }
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

  private getWeatherData(): void {
    const province = '四川省'
    const city = '成都市'
    const url = encodeURI(`https://wis.qq.com/weather/common?source=pc&weather_type=observe|forecast_1h|forecast_24h|index|alarm|limit|tips|rise&province=${province}&city=${city}&_=1543405395492`);
     Axios.jsonp({
       url
     }).then(res => {
       this.setState({
         weather:  res.data.observe.degree + '°C' + res.data.observe.weather,
         imgUrl: `https://mat1.gtimg.com/pingjs/ext2020/weather/pc/icon/weather/day/${res.data.observe.weather_code}.png`
       })
       window.console.log(res.data.observe)
     })
  }
}

export default Header;
