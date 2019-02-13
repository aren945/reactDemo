import * as React from 'react';
import { Card, Button, Spin, Icon, Alert } from 'antd';

export default class LoadingPageComponent extends React.Component {
  public render(): React.ReactNode {
    const icon = <Icon type="loading" />

    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="large"/>
          <Spin size="large" indicator={icon}/>
          <Button><Icon type="plus"/>1</Button>
          <Spin>
            <Alert message="123" description="hkjashdjk" type="warning" />
          </Spin>
        </Card>
      </div>
    )
  }
}