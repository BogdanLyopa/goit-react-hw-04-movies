import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Components/AppBar';
import routes from './routes';
import Loader from 'react-loader-spinner';
import NotFound from './Components/NotFound/NotFound';
import './styles.scss';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './Views/MovieDetailsPage' /* webpackChunkName: "moviesDetails-page" */
  ),
);
const style = {
  textAlign: 'center',
  marginTop: '100px',
};

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Suspense
          fallback={<Loader style={style} type="Circles" color="white" />}
        >
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.moviesDetails} component={MovieDetailsPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
