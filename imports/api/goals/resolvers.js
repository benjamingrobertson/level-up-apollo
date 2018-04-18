import Goals from './goals';

const res = Goals.find({}).fetch();

export default {
  Mutation: {
    createGoal(object, { name, resolutionId }, { userId }) {
      if (userId) {
        const goalId = Goals.insert({
          name,
          resolutionId,
          completed: false
        });
        return Goals.findOne(goalId);
      }

      throw new Error('Unauthorized');
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
