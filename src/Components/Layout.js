import React from 'react';
import Movies from '../Routes/Movies/Movies';

import { Layout } from 'antd';

const { Content } = Layout;

export default class SiderDemo extends React.Component {
  render() {
    return (
      <Layout>
        <Layout className='site-layout'>
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
