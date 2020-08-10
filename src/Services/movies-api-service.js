import config from '../config';

const MovieApiService = {
  getMovies() {
    return fetch(`${config.API_ENDPOINT}/movies`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getMovie(movieId) {
    return fetch(`${config.API_ENDPOINT}/movies/${movieId}`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default MovieApiService;
