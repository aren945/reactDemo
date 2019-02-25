import * as React from "react";

import { Card, Form, Input, Button, Icon, message } from "antd";
import { FormComponentProps } from "antd/lib/form";

class LoginPageComponent extends React.Component<FormComponentProps> {

  public handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName}恭喜你啊`)
      }
    })
    window.console.log(userInfo);
  }

  public render(): React.ReactNode {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Card title="登陆行内表单">
          <Form layout="inline">
            <Form.Item>
              <Input
                type="text"
                prefix={<Icon type="user" />}
                placeholder="input user name"
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                prefix={<Icon type="lock" />}
                placeholder="input password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary">login</Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="登陆水平表单">
          <Form style={{width: '300px'}}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{required: true, message: 'please input your name'}]
              })(<Input
                type="text"
                prefix={<Icon type="user" />}
                placeholder="input user name"
              />)}
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                prefix={<Icon type="lock" />}
                placeholder="input password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit}>login</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create({name: 'Login-form'})(LoginPageComponent)
