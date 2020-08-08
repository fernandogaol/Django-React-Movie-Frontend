import React, { Component } from 'react';
import axios from 'axios';

export default class HomePage extends Component {
  state = { articles: [] };

  componentDidMount() {
    axios.get('http://localhost:8000/movies').then((res) => {
      this.setState({ articles: res.data });
    });
  }

  render() {
    return <div>{this.state.articles}</div>;
  }
}
