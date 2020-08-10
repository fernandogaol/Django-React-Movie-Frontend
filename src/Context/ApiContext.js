import React, { Component } from 'react';

const apiContext = React.createContext({
  movies: [],
  movieId: {},
  userId: [],
  error: null,
  setMovie: () => {},
  setMovieById: () => {},
  clearError: () => {},
  setError: () => {},
});

export default apiContext;

export class ApiProvider extends Component {
  state = {
    movies: [],
    movieId: {},
    error: null,
  };

  setMovie = (movies) => {
    this.setState({ movies });
  };
  setMovieById = (movieId) => {
    this.setState({ movieId });
  };

  clearError = () => {
    this.setState({ error: null });
  };
  setError = () => {
    this.setState({ error: this.state.error });
  };

  render() {
    const value = {
      // userId: localStorage.getItem('user_id'),
      movies: this.state.movies,
      movieId: this.state.movieId,
      setMovie: this.setMovie,
      setMovieById: this.setMovieById,
      clearError: this.clearError,
      setError: this.setError,
    };
    return (
      <apiContext.Provider value={value}>
        {this.props.children}
      </apiContext.Provider>
    );
  }
}
