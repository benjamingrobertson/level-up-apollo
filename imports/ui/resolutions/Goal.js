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
    const { goal } = this.props;
    return (
      <li>
        <label htmlFor={`goal-${goal._id}`}>
          <input
            type="checkbox"
            onChange={this.toggleGoal}
            checked={goal.completed}
            id={`goal-${goal._id}`}
          />
          <span
            style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}
          >
            {goal.name}
          </span>
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
