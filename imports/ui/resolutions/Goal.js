import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Goal extends Component {
  toggleGoal = () => {
    this.props.toggleGoal({
      variables: {
        id: this.props.goal._id
      }
    });
  };
  render() {
    return (
      <li>
        <label htmlFor={`goal-${this.props.goal._id}`}>
          <input
            type="checkbox"
            onChange={this.toggleGoal}
            checked={this.props.goal.completed}
            id={`goal-${this.props.goal._id}`}
          />
          {this.props.goal.name}
        </label>
      </li>
    );
  }
}

const toggleGoal = gql`
  mutation toggleGoal($id: String!) {
    toggleGoal(_id: $id) {
      _id
    }
  }
`;

export default graphql(toggleGoal, {
  name: 'toggleGoal',
  options: {
    refetchQueries: ['Resolutions']
  }
})(Goal);
