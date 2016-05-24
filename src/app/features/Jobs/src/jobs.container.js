import React, {Component} from 'react';
import {Link} from 'react-router';

class JobsContainer extends Component {
  
  renderJobs() {
    var jobs = [
      {id: 1, title: 'ReactJs Developer'},
      {id: 2, title: 'ReactNative Developer'},
      {id: 3, title: 'AngularJs Developer'},
    ]; 
    return jobs.map((job, index) => {
      return (
        <li key={index}>
          <h3><Link to={`jobs/${job.id}`}>{job.title}</Link></h3>
        </li>
      );
    });
  }
  
  render() {
    return (
      <div className="jobs-listings">
        <h1>This is the jobs index page</h1>
        <ui className="job-rows">
            {this.renderJobs()}
        </ui>
      </div>
    )
  }
}

export default JobsContainer;
