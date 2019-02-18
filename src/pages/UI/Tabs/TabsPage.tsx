import * as React from 'react';

import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;


export default class TabsPageComponent extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <Tabs defaultActiveKey="2">
          <TabPane tab={<span><Icon type="apple" />Tab1</span>} key="1"><Icon type="plus" />Tab1</TabPane>
          <TabPane tab={<span><Icon type="android" />Tab1</span>} key="2">Tab2</TabPane>
        </Tabs> 
      </div>
    )
  }
}