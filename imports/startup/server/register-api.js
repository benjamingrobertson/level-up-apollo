import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
type Query {
  hi: String
}
`;

// Schema
const typeDefs = [
  testSchema,
  ResolutionsSchema
];

// Server Side code
const resolvers = {
  Query: {
    hi() {
      return 'Hello World';
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema });