import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import ChartEntryForm from './ChartEntryForm';
import RegisterForm from './login/RegisterForm';
import LoginForm from './login/LoginForm';

const App = ({ loading, chartEntries, client }) => {
  if (loading) return null;
  return (
    <div>
      <h1>Charting</h1>
      <p>Welcome userName</p>
      <h2>Register</h2>
      <RegisterForm client={client} />
      <h2>Login</h2>
      <LoginForm client={client} />
      <button onClick={() => {
        Meteor.logout();
        client.resetStore();
      }}>Logout</button>
      <h2>New Entry</h2>
      <ChartEntryForm />
      <ul>
        {chartEntries.map(chartEntry => (
          <li key={chartEntry._id} >
            <span>date: {chartEntry.date}</span><br />
            <span>consistency: {chartEntry.consistency}</span><br />
            <span>frequency: {chartEntry.frequency}</span><br />
            <span>flow: {chartEntry.flow}</span><br />
            <span>intercourse: {chartEntry.intercourse}</span><br />
          </li>
        ))}
      </ul>
    </div>
  )
}

const chartEntriesQuery = gql`
  query chartEntries {
        chartEntries {
      _id,
      date,
      consistency,
      frequency,
      flow,
      intercourse
    }
  }
`;

export default graphql(chartEntriesQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));