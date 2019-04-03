import * as React from 'react'
import { Select, Button, Form } from 'antd';
import axios from '../../axios';
import { FormComponentProps } from 'antd/lib/form';

const Option = Select.Option;
const FormItem = Form.Item;

interface Istate {
    city: []
}

interface IfilterFormProps extends FormComponentProps {
    city: []
}


class FilterForm extends React.Component<IfilterFormProps> {
    render(): React.ReactNode {
        const { getFieldDecorator } = this.props.form;
        const { city } = this.props;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{ width: 100 }}
                                placeholder="全部"
                                defaultValue="全部"
                            >
                                <Option value="">全部</Option>
                                {city.map((item: any) => { return <Option value={item.name} key={item.id}>{item.name}</Option> })}
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                style={{ width: 120 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">禁停区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                style={{ width: 100 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
const FilterForm1 = Form.create({name: 'city-header-form'})(FilterForm);


export default class CityPageComponent extends React.Component<{}, Istate> {
    constructor(props: any) {
        super(props)
        this.state = {
            city: []
        }
    }

    componentDidMount() {
        axios.ajax({
            url: '/open_city'
        }).then((res: any) => {
            this.setState({
                city: res['result']['item_list']
            })
        })
    }

    public render(): React.ReactNode {

        return (
            <div>
                <FilterForm1 city={this.state.city} />
            </div>
        )
    }
}