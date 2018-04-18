import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import GoalForm from './GoalForm';
import Goal from './resolutions/Goal';
import ResolutionForm from './ResolutionForm';

import UserForm from './UserForm';

const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;
  return (
    <div>
      <header className="site-header">
        <h1 className="site-branding">Resolution Tracker</h1>
      </header>

      <UserForm user={user} client={client} />

      <div className="l-container">
        {user._id && <ResolutionForm />}
        {user._id && (
          <div>
            <h2>Resolutions:</h2>
            <ul>
              {resolutions.map((resolution) => (
                <li key={resolution._id}>
                  <span
                    style={{
                      textDecoration: resolution.completed
                        ? 'line-through'
                        : 'none'
                    }}
                  >
                    {resolution.name}
                  </span>
                  <ul>
                    {resolution.goals.map((goal) => (
                      <Goal goal={goal} key={goal._id} />
                    ))}
                  </ul>
                  <GoalForm resolutionId={resolution._id} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
      completed
      goals {
        _id
        name
        completed
      }
    }
    user {
      _id
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
