export default {
  Query: {
    user(object, arguments, { user }) {
      return user || {};
    }
  },
  User: {
    email: user => user.emails[0].address
  }
}