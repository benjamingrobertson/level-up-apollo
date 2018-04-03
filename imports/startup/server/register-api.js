import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';


// test yolo
const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
  user: User
}
`;

// Schema
const typeDefs = [
  testSchema,
  ResolutionsSchema,
  UsersSchema
];

const testResolvers = {
  Query: {
    hi() {
      return 'Hello world';
    }
  }
}

const resolvers = merge(testResolvers, ResolutionsResolvers, UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema });