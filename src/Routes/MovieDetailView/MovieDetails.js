import React, { Component } from 'react';
import apiContext from '../../Context/ApiContext';
import MovieApiService from '../../Services/movies-api-service';

import { Card } from 'antd';
import { Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import './MovieDetails.css';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default class MovieDetails extends Component {
  static contextType = apiContext;

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.context.clearError();
    MovieApiService.getMovie(movieId)
      .then(this.context.setMovieById)
      .catch(this.context.setError);
  }

  render() {
    const { movieId } = this.context;
    return (
      <div className='movie-detail-view'>
        <Card title={movieId.title} bordered={false}>
          <p>Year: {movieId.year}</p>
          <p>Released On: {movieId.released_on}</p>
          <p className='movie-rated'>Rated: {movieId.rated}</p>
          <p>Genre: {movieId.genre}</p>
          <p>Director: {movieId.director}</p>
          <p>Plot: {movieId.plot}</p>
        </Card>
        <div className='movie-icons'>
          <IconText icon={StarOutlined} text='' key='list-vertical-star-o' />

          <IconText icon={LikeOutlined} text='' key='list-vertical-like-o' />

          <IconText
            icon={MessageOutlined}
            text=''
            key='list-vertical-message'
          />
        </div>
      </div>
    );
  }
}
