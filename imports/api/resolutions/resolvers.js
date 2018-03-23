import Resolutions from "./resolutions";

// Resolutions.insert({
//   name: "Test Res",
// });

const res = Resolutions.find({}).fetch();
console.log(res);

export default {
  Query: {
    resolutions(object, arguments, {userId}) {
      console.log(userId);
      return Resolutions.find({
        userId
      }).fetch();
    }
  },

  Mutation: {
    createResolution(object, { name }, context) {

      const resolutionId = Resolutions.insert({
        name
      });

      return Resolutions.findOne(resolutionId);
    }
  }
};