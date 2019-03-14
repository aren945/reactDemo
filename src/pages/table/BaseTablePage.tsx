import * as React from 'react';
import { Table, Card, Modal } from 'antd';
import { ColumnProps } from 'antd/lib/table';

// import axios from 'axios';
import axios from '../../axios/index';
import { Button } from 'antd/lib/radio';

interface IDataSource {
    id: number,
    userName: string,
    gender: string | number,
    status: string,
    hobby: string,
    birthday: string,
    address: string,
    wakeTime: string
}

interface Isate {
  dataSource1: IDataSource[],
  dataSource2: IDataSource[],
  selectedRowKeys: any[],
  selectedRowKeys1: number[]
}

export default class BasicTablePageComponent extends React.Component<{}, Isate> {

  constructor(props: {}) {
    super(props);
    this.state = {
      dataSource1: [
        {
          id: 0,
          userName: 'Tom',
          gender: 1,
          status: '1',
          hobby: '散打',
          birthday: '2011-1-1',
          address: 'beijing',
          wakeTime: '09:00'
        },
        {
          id: 1,
          userName: 'Tom1',
          gender: 1,
          status: '2',
          hobby: '拳击',
          birthday: '2011-1-2',
          address: 'shanghai',
          wakeTime: '09:01'
        },
        {
          id: 2,
          userName: 'Tom2',
          gender: 2,
          status: '3',
          hobby: '柔道',
          birthday: '2011-1-3',
          address: 'chengdu',
          wakeTime: '09:01'
        }
      ],
      dataSource2: [],
      selectedRowKeys: [],
      selectedRowKeys1: []
    }
  }

  componentWillMount() {
    this._request();
  }

  public handleOnTableRow = (record: IDataSource, index: any): void => {
    Modal.info({
      title: '点击了',
      content: record.userName
    })
    this.setState({
      selectedRowKeys: [index]
    })
  }

  public handleOnTableRow1 = (record: IDataSource, index: any): void => {
    Modal.info({
      title: '点击了',
      content: record.userName
    })
    const a = this.state.selectedRowKeys1.concat([index]);
    this.setState({
      selectedRowKeys1: a
    })
  }

  private _request = () => {
    axios.ajax({
      url: '/tablelist'
    }).then((res: any )=> {
      this.setState({
        dataSource2: (res['result'] as IDataSource[])
      })
    })
  }

  public delterow = () => {
    
  }

  public render(): React.ReactNode {
    const colums:ColumnProps<IDataSource>[] = [
      {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        render(key) {
          return key === 1 ? 'man' : 'woman';
        }
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
      },
      {
        title: '爱好',
        dataIndex: 'hobby',
        key: 'hobby'
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '起床时间',
        dataIndex: 'wakeTime',
        key: 'wakeTime'
      }
  ];
    const { dataSource1, dataSource2, selectedRowKeys, selectedRowKeys1 } = this.state;
    return (
        <div>
          <Card title="基础表格">
            <Table
            columns={ colums } 
            dataSource={dataSource1}
            rowKey="id"
            bordered={true} />     
          </Card>
          <Card title="动态数据表格">
            <Table
            columns={ colums } 
            dataSource={dataSource2}
            rowKey="id"
            rowSelection = {
              {
                type: 'radio',
                selectedRowKeys
              }
            }
            onRow = { (record: IDataSource, index: any) => {
              return {
                onClick: () => {
                  this.handleOnTableRow(record, index)
                }
              }
            } }
            bordered={true} />     
          </Card> 

          <Card title="动态数据表格2">
            <Button onClick={this.delterow}>删除</Button>
            <Table
            columns={ colums } 
            dataSource={dataSource2}
            rowKey="id"
            rowSelection = {
              {
                type: 'checkbox',
                selectedRowKeys: selectedRowKeys1
              }
            }
            onRow = { (record: IDataSource, index: any) => {
              return {
                onClick: () => {
                  console.log(record);
                  this.handleOnTableRow1(record, index)
                }
              }
            } }
            bordered={true} />     
          </Card> 
        </div>
      )
    }
}