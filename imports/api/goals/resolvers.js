import Goals from "./goals";


const res = Goals.find({}).fetch();

export default {
  Mutation: {
    createGoal(object, { name, resolutionId }) {

      const goalId = Goals.insert({
        name,
        resolutionId,
        completed: false
      });

      return Goals.findOne(goalId);
    }
  }
};