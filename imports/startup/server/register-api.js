import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
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
    },
    resolutions() {
      return [
        {
          _id: "adsfdsa",
          name: "Get stuff done!"
        },
        {
          _id: "adsfdsaadfdf",
          name: "Make an app!"
        }
      ]
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema });