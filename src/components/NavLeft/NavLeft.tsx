import * as React from 'react';

import MenuConfig from '../../config/menuConfig';
import {Menu} from 'antd';

import './index.less';
import { HashRouter as Router, NavLink } from 'react-router-dom';

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
            return <Menu.Item key={index}> <NavLink to={item.key}>{item.title}</NavLink> </Menu.Item>
        })
    };

    public render(): React.ReactNode {
        return (
            <div>
                <div className="logo-wrapper">
                    <img src="/assets/logo-ant.svg" className="logo"/>
                    <div className="logo-name">ImoocMS</div>
                </div>
                <Router>
                    <Menu mode="vertical" theme={this.state.theme}>
                        {this.state.menuTreeNode}
                    </Menu>
                </Router>
            </div>
        )
    }
}