import React from 'react';
import { List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import './MoviesList.css';
import { Input } from '../Utils/Utils';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const MoviesList = (props) => {
  return (
    <div className='movies'>
      <form id='search-bar' htmlFor='search'>
        <label htmlFor='search'>Search by name</label>
        <Input
          type='text'
          placeholder='Enter movie name'
          // value={this.state.search}
          // onChange={this.UpdateMovieSearch.bind(this)}
        ></Input>
      </form>
      <List
        itemLayout='vertical'
        size='large'
        pagination={{
          pageSize: 5,
        }}
        dataSource={props.movies}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text=''
                key='list-vertical-star-o'
              />,
              <IconText
                icon={LikeOutlined}
                text=''
                key='list-vertical-like-o'
              />,
              <IconText
                icon={MessageOutlined}
                text=''
                key='list-vertical-message'
              />,
            ]}
          >
            <List.Item.Meta
              className='each_movie'
              title={<a href={item.id}>{item.title}</a>}
              description={<label>Released on: {item.released_on}</label>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default MoviesList;
