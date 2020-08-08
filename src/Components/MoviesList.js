import React from 'react';
import { List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const MoviesList = (props) => {
  return (
    <div className='Movies'>
      <List
        itemLayout='vertical'
        size='large'
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={props.movies}
        footer={
          <div>
            <b></b> footer part
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text='156'
                key='list-vertical-star-o'
              />,
              <IconText
                icon={LikeOutlined}
                text='156'
                key='list-vertical-like-o'
              />,
              <IconText
                icon={MessageOutlined}
                text='2'
                key='list-vertical-message'
              />,
            ]}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.year}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};
export default MoviesList;
