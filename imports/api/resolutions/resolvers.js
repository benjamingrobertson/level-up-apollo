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
  }
};