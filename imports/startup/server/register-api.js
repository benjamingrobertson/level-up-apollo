import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ChartEntriesSchema from '../../api/chart-entries/ChartEntries.graphql';
import ChartEntriesResolvers from '../../api/chart-entries/resolvers';

const testSchema = `
type Query {
  hi: String
  ChartEntries: [ChartEntry]
}
`;

// test again here

// Schema
const typeDefs = [
  testSchema,
  ChartEntriesSchema
];

const testResolvers = {
  Query: {
    hi() {
      return 'Hello world';
    }
  }
}

const resolvers = merge(testResolvers, ChartEntriesResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema });