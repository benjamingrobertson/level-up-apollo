import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ChartEntryForm from './ChartEntryForm';

const App = ({ data }) => {
  // if (data.loading) return null;
  return (
    <div>
    <h1>Charting</h1>
    <ChartEntryForm refetch={data.refetch}/>
    {/* <ul>
      {data.resolutions.map(resolution => (
        <li key={resolution._id}>{resolution.name}</li>
      ))}
    </ul> */}
  </div>
  )
}

const hiQuery = gql`
{
  hi
  resolutions {
    _id
    name
  }
}
`;

export default graphql(
  hiQuery
)(App);