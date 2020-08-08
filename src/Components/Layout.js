import React from 'react';
import Movies from '../Routes/Movies';

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key='2' icon={<VideoCameraOutlined />}>
              Movies
            </Menu.Item>
            <Menu.Item key='3' icon={<UserAddOutlined />}>
              Sign Up
            </Menu.Item>
            <Menu.Item key='4' icon={<UserOutlined />}>
              Login
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Movies></Movies>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
