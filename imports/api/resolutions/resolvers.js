import Resolutions from "./resolutions";

// Resolutions.insert({
//   name: "Test Res",
// });

const res = Resolutions.find({}).fetch();
console.log(res);

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
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