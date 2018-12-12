import * as React from 'react';
import { Card, Button, Modal } from 'antd';

import './Modals.less';

export default class ModalPageComponent extends React.Component<{}> {
  public state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    ConfirmModal1: false
  }

  public handleShowBaseModal = (type: string) => {
    this.setState({
      [type]: !this.state[type]
    })
  }

  public handleCloseBaseModal = (type: string) => {
    this.setState({
      [type]: !this.state[type]
    })
  }
  
  public handleShowConfirmModal = (type: string) => {

    Modal[type]({
      title: 'confirm modal',
      content: (
        <p>你学会React了吗</p>
      ),
      okText: '确定',
      cancelText: '取消',
      onOk():void {
        alert(type)
      }
    })

    // this.setState({
    //   [type]: !this.state[type]
    // })
  }
  public render(): React.ReactNode {
    return (
      <div className="Modal-wrapper">
        <Card title="基础模态框" className="card-wrapper">
          <Button type="default" onClick={this.handleShowBaseModal.bind(this, 'modal1')}>Open</Button>
          <Button type="primary" onClick={this.handleShowBaseModal.bind(this, 'modal2')}>自定义页脚</Button>
          <Button type="default" onClick={this.handleShowBaseModal.bind(this, 'modal3')}>顶部20px弹窗</Button>
          <Button type="default" onClick={this.handleShowBaseModal.bind(this, 'modal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className="card-wrapper">
          <Button type="primary" onClick={ this.handleShowConfirmModal.bind(this, 'confirm') }>Confirm</Button>
          <Button type="primary" onClick={ this.handleShowConfirmModal.bind(this, 'success') }>success</Button>
          <Button type="primary" onClick={ this.handleShowConfirmModal.bind(this, 'info') }>info</Button>
          <Button type="primary" onClick={ this.handleShowConfirmModal.bind(this, 'error') }>error</Button>
          <Button type="primary" onClick={ this.handleShowConfirmModal.bind(this, 'warning') }>warning</Button>
        </Card>
        <Modal
          title="BaseModal"
          visible={this.state.modal1}
          centered={true}
          onCancel={this.handleCloseBaseModal.bind(this, 'modal1')}
        >
          <p>this is Modal content</p>
        </Modal>
        <Modal
          title="自定义页脚"
          visible={this.state.modal2}
          centered={true}
          onCancel={this.handleCloseBaseModal.bind(this, 'modal2')}
          okText="确定"
          cancelText="取消"
        >
          <p>this is Modal content</p>
        </Modal>
        <Modal
          title="自定义位置"
          visible={this.state.modal3}
          onCancel={this.handleCloseBaseModal.bind(this, 'modal3')}
          okText="确定"
          cancelText="取消"
          style={{top: 20}}
        >
          <p>自定义位置modal</p>
        </Modal>
        <Modal
          title="水平垂直居中"
          visible={this.state.modal4}
          onCancel={this.handleCloseBaseModal.bind(this, 'modal4')}
          okText="确定"
          cancelText="取消"
          centered={true}
          maskClosable={false}
        >
          <p>水平垂直居中modal</p>
        </Modal>
      </div>
    )
  }
}