import * as React from 'react'
import { Card, Button, Icon } from 'antd';
import './Buttons.less'

interface IState {
  loading: boolean | false
}

export default class ButtonPageComponent extends React.Component<{},IState> {

  public componentWillMount() {
    this.setState({
      loading: false
    })
  }

  public ChangeLoading = () => {
    this.setState({
      loading: !this.state.loading
    })

    setTimeout(() => {
      this.ChangeLoading()
    }, 4000)
  }

  public render(): React.ReactNode {
    return (
      <div style={{ padding: '15px' }}>
        <Card title="基础按钮" className="card-wrapper">
          <Button type="primary">Imooc</Button>
          <Button type="danger">Imooc</Button>
          <Button type="dashed">Imooc</Button>
          <Button type="default">Imooc</Button>
          <Button type="ghost">Imooc</Button>
          <Button disabled={true}>Imooc</Button>
        </Card>
        <Card title="图形按钮" className="card-wrapper">
          <Button type="primary" icon="plus">创建</Button>
          <Button type="danger" icon="edit">编辑</Button>
          <Button type="dashed" icon="delete">删除</Button>
          <Button type="default" icon="search" shape="circle" />
          <Button type="ghost" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮" className="card-wrapper">
          <Button type="primary" icon="plus" loading={true}>创建</Button>
          {/* 4S后修改 */}
          <Button type="primary" icon="edit" onClick={this.ChangeLoading} loading={this.state.loading}>编辑</Button>
        </Card>
        <Card title="按钮组" className="card-wrapper">
          <Button.Group>
            <Button type="primary"><Icon type="left"/>返回</Button>
            <Button type="primary"><Icon type="right"/>前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrapper">
          <Button type="primary" size="large" icon="plus" loading={true}>创建</Button>
          {/* 4S后修改 */}
          <Button type="primary" size="small" icon="edit" onClick={this.ChangeLoading} loading={this.state.loading}>编辑</Button>
          <Button type="primary" size="default" icon="plus" loading={true}>创建</Button>
        </Card>
      </div>
    )
  }
}