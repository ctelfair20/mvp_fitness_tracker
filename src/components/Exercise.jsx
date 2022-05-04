import React from 'react';
import './Exercise.css';
import axios from 'axios';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      exercise: '',
      sets: '',
      repititions: ''
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleExerciseChange = this.handleExerciseChange.bind(this);
    this.handleSetsChange = this.handleSetsChange.bind(this);
    this.handleRepititionsChange = this.handleRepititionsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(e) {
    this.setState({
      date: e.target.value
    })
  }

  handleExerciseChange(e) {
    this.setState({
      exercise: e.target.value
    })
  }

  handleSetsChange(e) {
    this.setState({
      sets: e.target.value
    })
  }

  handleRepititionsChange(e) {
    this.setState({
      repititions: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('was sent');
    axios({
      url: '/workout',
      method: 'post',
      data: {
        date: this.state.date,
        exercise: this.state.exercise,
        sets: this.state.sets,
        repititions: this.state.repititions
      },
      header: { 'content-type': 'application/json' }
    })
      .then((data) => {
        console.log('doc saved!')
      })
      .catch((err) => {
        console.log('ERROR!!!', err)
      })
  }

  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <label className="form-field">
          Date:
          <input type="text" value={this.state.date} onChange={this.handleDateChange} />
        </label>
        <label className="form-field">
          Exercise:
          <input type="text" value={this.state.exercise} onChange={this.handleExerciseChange} />
        </label>
        <label className="form-field">
          Sets:
          <input type="text" value={this.state.sets} onChange={this.handleSetsChange} />
        </label>
        <label className="form-field">
          Repititions:
          <input type="text" value={this.state.repititions} onChange={this.handleRepititionsChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Exercise;