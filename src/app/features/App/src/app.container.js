import React, {Component} from 'react';
import NavComponent from './nav.component';

class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <NavComponent></NavComponent>
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer;
