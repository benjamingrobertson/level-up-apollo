import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ChartEntryForm from './ChartEntryForm';

const App = ({ loading, chartEntries }) => {
  if (loading) return null;
  return (
    <div>
      <h1>Charting</h1>
      <ChartEntryForm />
      <ul>
        {chartEntries.map(chartEntry => (
          <li key={chartEntry._id}>{chartEntry._id}</li>
        ))}
      </ul>
    </div>
  )
}

const chartEntriesQuery = gql`
  query chartEntries {
    chartEntries {
      _id
    }
  }
`;

export default graphql(chartEntriesQuery, {
  props: ({ data }) => ({ ...data })
})(App);