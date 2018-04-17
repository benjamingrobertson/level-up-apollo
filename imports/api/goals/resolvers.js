import Goals from './goals';

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
    },
    toggleGoal(obj, { _id }) {
      const goal = Goals.findOne(_id);
      Goals.update(_id, {
        $set: {
          completed: !goal.completed
        }
      });

      return Goals.findOne(_id);
    }
  }
};
