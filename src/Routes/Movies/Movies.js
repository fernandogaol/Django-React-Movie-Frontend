import React, { Component } from 'react';
import MoviesList from '../../Components/MovieList/MoviesList';
import apiContext from '../../Context/ApiContext';
import MovieApiService from '../../Services/movies-api-service';

import './Movies.css';

export default class Movies extends Component {
  static contextType = apiContext;

  UpdateMovieSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  componentDidMount() {
    this.context.clearError();
    MovieApiService.getMovies()
      .then(this.context.setMovie)
      .catch(this.context.setError);
  }

  render() {
    const { movies = [] } = this.context;

    // let filterMovies = movies.filter((title) => {
    //   return title.title.indexOf(this.state.search) !== -1;
    // });
    // console.log(this.state.search);
    return (
      <div className='app-movies'>
        <h1>Movies</h1>

        <MoviesList movies={movies} />
      </div>
    );
  }
}
