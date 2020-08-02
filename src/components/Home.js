import React, { Component } from 'react';

class Home extends Component {    
  
  handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = this.name.value;
    let coursesTopic = this.topic.value;
    let path = `teachers/${teacherName}/${coursesTopic}`
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="main-content home">
        <h2>In Development</h2>
        <p>This fun directory is a project for the<em>React Router Basics</em> course on Treehouse.</p>
        <p>I worked out the functionality of the site with React.js and modified aspects of the CSS.</p>
        <p>I took this assignment on in order to develop my understanding of react-router.  I plan to integrate some of the functionality demonstrated here in my portfolio.</p>
        <hr />
        <h3>Suggest A New Class</h3>
        <p>In the form below suggest both a teacher and a topic you would like to see teach a class here.</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Teacher's Name" ref={ (input) => this.name = input } />
          <input type="text" placeholder="Topic" ref={ (input) => this.topic = input } />
          <button type="submit">Suggest Class!</button>
        </form>
      </div>
    );
  }
}

export default Home;