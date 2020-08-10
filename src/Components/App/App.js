import React from 'react';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import SiderDemo from '../Layout';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Header from '../Header/Header';
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';
import LoginForm from '../../Routes/LoginPage/LoginPage';
import MovieDetails from '../../Routes/MovieDetailView/MovieDetails';

function App() {
  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <Switch>
        <Route exact path={'/'} component={SiderDemo} />
        <Route path={'/register'} component={RegistrationForm} />
        <Route path={'/login'} component={LoginForm} />
        <Route exact path={'/:movieId'} component={MovieDetails} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
