import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends Component {
  state = {
    error: null
  };

  submitForm = () => {
    this.props
      .createResolution({
        variables: {
          name: this.name.value
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <div className="resolution-form">
        {this.state.error && <p>{this.state.error}</p>}
        <div className="form-group">
          <label htmlFor="resolution">Add a new resolution</label>
          <input
            type="text"
            ref={(input) => (this.name = input)}
            id="resolution"
          />
        </div>

        <button onClick={this.submitForm}>Add Resolution</button>
      </div>
    );
  }
}

export default graphql(createResolution, {
  name: 'createResolution', // adds the mutation to this.props
  options: {
    refetchQueries: ['Resolutions']
  }
})(ResolutionForm);
