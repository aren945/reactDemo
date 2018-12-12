import * as React from "react";

import MenuConfig from "../../config/menuConfig";
import { Menu } from "antd";

import "./index.less";
import { HashRouter as Router, NavLink, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

interface Imenu {
  title: string;
  key: string;
  children?: Imenu[];
}

interface Istate {
  theme: "dark" | "light" | undefined;
  menuTreeNode?: React.ReactNode;
}

class NavLeft extends React.Component<RouteComponentProps> {
  public state: Istate = {
    theme: "dark"
  };

  public componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode
    });
  }

  public handleSubMenuClick = (item: Imenu) => {
    window.console.log(item)
    this.props.history.push(item.key)
  }

  public renderMenu = (data: Imenu[]) => {
    return data.map((item: Imenu, index: number) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.title} title={item.title} onTitleClick={this.handleSubMenuClick.bind(this, item)}>
            {this.renderMenu(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.title}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  public render(): React.ReactNode {
    return (
      <div>
        <div className="logo-wrapper">
          <img src="/assets/logo-ant.svg" className="logo" />
          <div className="logo-name">ImoocMS</div>
        </div>
        <Router>
          <Menu mode="vertical" theme={this.state.theme}>
            {this.state.menuTreeNode}
          </Menu>
        </Router>
      </div>
    );
  }
}

export default withRouter(NavLeft)
