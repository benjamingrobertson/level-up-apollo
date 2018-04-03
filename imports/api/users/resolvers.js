export default {
  Query: {
    user(object, arguments, { user }) {
      return user || {};
    }
  }
}