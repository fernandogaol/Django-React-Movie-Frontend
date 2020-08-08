import React, { Component } from 'react';
import MoviesList from '../Components/MoviesList';

import axios from 'axios';

export default class Movies extends Component {
  state = { movies: [] };

  componentDidMount() {
    axios.get('http://localhost:8000/movies').then((res) => {
      this.setState({ movies: res.data });
    });
  }

  render() {
    return (
      <div>
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}
