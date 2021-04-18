import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import routes from '../../routes';

export class AppBar extends Component {
  render() {
    return (
      <header className={styles.headerBar}>
        <nav>
          <ul className={styles.Navbar}>
            <li>
              <NavLink
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
                to={routes.home}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.link}
                activeClassName={styles.activeLink}
                to={routes.movies}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default AppBar;
