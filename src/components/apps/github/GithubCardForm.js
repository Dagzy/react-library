import React from 'react';
import { Component } from 'react';
import axios from 'axios';

export default class GitHubCardForm extends Component {
  state = { userName: '' }
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
          console.log(resp)
          console.log(resp.data.login)
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.userName}
        //   onChange={(event)=>{console.log(event.target.value)}}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="Github username" required />
        <button type="submit">Add card</button>
      </form>
    );
  }
}