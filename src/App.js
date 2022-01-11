import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {

  country = "in";

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact path="/"
            element={
              <News
                key="general" country={this.country}
                category={'general'}
              />
            }
          />
          <Route
            exact path="/general"
            element={
              <News
                key="general" country={this.country}
                category={'general'}
              />
            }
          />
          <Route
            exact path="/science"
            element={
              <News
                key="science" country={this.country}
                category={'science'}
              />
            }
          />
          <Route
            exact path="/sports"
            element={
              <News
                key="sports" country={this.country}
                category={'sports'}
              />
            }
          />
          <Route
            exact path="/business"
            element={
              <News
                key="business" country={this.country}
                category={'business'}
              />
            }
          />
          <Route
            exact path="/health"
            element={
              <News
                key="health" country={'us'}
                category={'health'}
              />
            }
          />
          <Route
            exact path="/entertainment"
            element={
              <News
                key="entertainment" country={this.country}
                category={'entertainment'}
              />
            }
          />
          <Route
            exact path="/tech"
            element={
              <News
                key="tech" country={this.country}
                category={'tech'}
              />
            }
          />
          <Route
            exact path="/politics"
            element={
              <News
                key="politics" country={this.country}
                category={'politics'}
              />
            }
          />
          <Route
            exact path="/food"
            element={
              <News
                key="food" country={this.country}
                category={'food'}
              />
            }
          />
          <Route
            exact path="/travel"
            element={
              <News
                key="travel" country={this.country}
                category={'travel'}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
