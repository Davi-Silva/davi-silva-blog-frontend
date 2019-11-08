import React, { Component } from 'react';

import {
  NavBar,
  LinkA,
  Brand,
  ToggleButton,
} from '../../../styled-components/navbar.styled-components';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      signup: {
        backgroundColor: '#fff',
        border: "1px solid #0058e4",
        color: '#0058e4',
        borderRadius: '3px',
        padding: '5px',
        marginTop: "3px",
        fontWeight: "600",
        // letterSpacing: "unset"
      },
    };
  }

  render() {
    return (
      <>
        <NavBar className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Brand className="navbar-brand" to="/">
              Name
            </Brand>
            <ToggleButton
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </ToggleButton>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                    Home
                    <span className="sr-only">(current)</span>
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/blog"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                    Blog
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/courses"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                    Courses
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/podcasts"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                    Podcasts
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/dashboard"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                    Dashboard
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/admin"
                    params={{
                      name: 'Davi Silva',
                      email: 'davi@davi.com',
                      created_on: '2019',
                    }}
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                    Admin
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/about"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                    About
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/login"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                    Login
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    style={this.styles.signup}
                    to="/signup"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                    Sign Up
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="//localhost:5000/auth/logout"
                    onClick={() => {
                      window.location.href = 'https://course-backend.herokuapp.com/auth/logout';
                    }}
                    // to="https://course-backend.herokuapp.com/auth/logout"
                  >
                    Logout
                  </LinkA>
                </li>
              </ul>
            </div>
          </div>
        </NavBar>
      </>
    );
  }
}

export default Navbar;
