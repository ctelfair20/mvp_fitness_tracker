import React from 'react';
import './Exercise.css';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  // onSubmit={this.handleSubmit}
  // value={this.state.value} onChange={this.handleChange}
  render() {
    return (
      <form id="form">
        <label className="form-field">
          Date:
          <input type="text" />
        </label>
        <label className="form-field">
          Exercise:
          <input type="text" />
        </label>
        <label className="form-field">
          Sets:
          <input type="text" />
        </label>
        <label className="form-field">
          Repititions:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Exercise;