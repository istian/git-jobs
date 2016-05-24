import React, {Component} from 'react';
import {Link, Route, RouteHander} from 'react-router';

class NavComponent extends Component {
  render() {
    return (
      <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="jobs">Search Jobs</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
          {this.props.children}
      </div>
      )
  }
}

export default NavComponent;
