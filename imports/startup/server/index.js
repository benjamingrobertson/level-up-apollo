import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

// Schema
const typeDefs = `
  type Query {
    hi: String
  }
`;

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