import * as React from 'react';

import { Card, Checkbox, Switch, Input, Button, Form, Radio, Select, DatePicker, TimePicker, Icon, InputNumber } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import moment from 'moment';


class RegisterPageComponent extends React.Component<FormComponentProps> {

  public render(): React.ReactNode {

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24, 
        sm: 12
      }
    }

    return (
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <Form.Item label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('userName', {
                  rules: [
                    {
                      required: true,
                      message: '请输入用户名'
                    }
                  ]
                })(
                  <Input prefix={ <Icon type="user" /> } type="text"/>
                )
              }
            </Form.Item>
            <Form.Item label="密码" {...formItemLayout}>
              {
                getFieldDecorator('userPass', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码'
                    }
                  ]
                })(
                  <Input prefix={ <Icon type="lock" /> } type="password"/>
                )
              }
            </Form.Item>
            <Form.Item label="性别" {...formItemLayout}>
              {
                getFieldDecorator('gender', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码'
                    }
                  ],
                  initialValue: 'woman'
                })(
                  <Radio.Group>
                    <Radio value="man" checked={true}>男</Radio>
                    <Radio value="woman">女</Radio>
                  </Radio.Group>
                )
              }
            </Form.Item>
            <Form.Item label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  rules: [
                    {
                      required: true,
                      message: '请输入年龄'
                    }
                  ]
                })(
                  <InputNumber />
                )
              }
            </Form.Item>
            <Form.Item label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarryed', {
                  rules: [
                    {
                      required: true,
                      message: '请选择当前状态'
                    }
                  ],
                  initialValue: true,
                  valuePropName: 'checked'
                })(
                  <Switch />
                )
              }
            </Form.Item>

            <Form.Item label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  rules: [
                    {
                      required: true,
                      message: '请输入年龄'
                    }
                  ],
                  initialValue: moment('1994-09-03', 'YYYY-MM-DD HH:mm:ss')
                })(
                  <DatePicker
                  format="YYYY-MM-DD" />
                )
              }
            </Form.Item>

          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({name: 'RegisterForm'})(RegisterPageComponent);