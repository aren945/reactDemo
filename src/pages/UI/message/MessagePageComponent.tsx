
import * as React from 'react';

import { Button, message } from 'antd';

export default class MessagePageComponent extends React.Component {

  public showMessage = () => {
    message.success('it\'s OK');
  }

  public render(): React.ReactNode {
    return (
      <div>
        this is MessagePageComponent
        <Button type="primary" onClick={this.showMessage}>点击弹出提示</Button>
      </div>
    )
  }
}