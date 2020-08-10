import React from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className='app-header'>
      <Menu theme='' defaultSelectedKeys={['1']}>
        <Menu.Item key='1' icon={<VideoCameraOutlined />}>
          <Link to='/'>Movies</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<UserAddOutlined />}>
          <Link to='/register'>Sign Up</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<UserOutlined />}>
          <Link to='/login'>Log In</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
