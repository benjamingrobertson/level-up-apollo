import Resolutions from "./resolutions";

// Resolutions.insert({
//   name: "Test Res",
// });

const res = Resolutions.find({}).fetch();
console.log(res);

export default {
  Query: {
    resolutions(object, arguments, {userId}) {

      if (userId === undefined) {
        userId = null;
      }

      return Resolutions.find({
        userId
      }).fetch();
    }
  },

  Mutation: {
    createResolution(object, { name }, {userId}) {

      const resolutionId = Resolutions.insert({
        name,
        userId
      });

      return Resolutions.findOne(resolutionId);
    }
  }
};