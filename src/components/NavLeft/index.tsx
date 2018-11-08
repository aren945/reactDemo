import * as React from 'react';

import MenuConfig from '../../config/menuConfig';
import {Menu} from 'antd';

import './index.less';

interface Imenu {
    title: string,
    key: string,
    children?: Imenu[]
}

interface Istate {
    theme: 'dark' |  'light' | undefined,
    menuTreeNode?: React.ReactNode
}

export default class NavLeft extends React.Component {
    public state: Istate = {
        theme: 'dark'
    };

    public componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }

    public renderMenu = (data: Imenu[]) => {
        return data.map((item: Imenu, index: number) => {
            if (item.children) {
                return (
                    <Menu.SubMenu key={index} title={item.title}>
                        {this.renderMenu(item.children)}
                    </Menu.SubMenu>
                )
            }
            return <Menu.Item key={index}> {item.title} </Menu.Item>
        })
    };

    public render(): React.ReactNode {
        return (
            <div>
                <div className="logo-wrapper">
                    <img src="/assets/logo-ant.svg" className="logo"/>
                    <div className="logo-name">ImoocMS</div>
                </div>
                <Menu mode="vertical" theme={this.state.theme}>
                    {/*{MenuConfig.map((item, index) => {*/}
                        {/*if (item.children) {*/}
                            {/*return (<Menu.SubMenu key={index} title={item.title}>*/}
                                {/*{item.children.map((cItem, cIndex) => {*/}
                                    {/*return <Menu.Item key={cIndex}>{cItem.title}</Menu.Item>*/}
                                {/*})}*/}
                            {/*</Menu.SubMenu>)*/}
                        {/*}*/}
                        {/*return <Menu.SubMenu key={index} title={item.title}/>*/}
                    {/*})}*/}
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}