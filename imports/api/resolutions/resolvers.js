import Resolutions from './resolutions';
import Goals from '../goals/goals';

// Resolutions.insert({
//   name: "Test Res",
// });

const res = Resolutions.find({}).fetch();

export default {
  Query: {
    resolutions(object, arguments, {
      userId
    }) {
      if (userId === undefined) {
        userId = null;
      }

      return Resolutions.find({
        userId
      }).fetch();
    }
  },

  Resolution: {
    goals: (resolution) => {
      return Goals.find({
        resolutionId: resolution._id
      }).fetch();
    },
    completed: (resolution) => {
      const goals = Goals.find({
        resolutionId: resolution._id
      }).fetch();
      if (goals.length === 0) return false;
      const completedGoals = goals.filter((goal) => goal.completed);

      return goals.length === completedGoals.length;
    }
  },

  Mutation: {
    createResolution(object, {
      name
    }, {
      userId
    }) {
      if (userId) {
        const resolutionId = Resolutions.insert({
          name,
          userId
        });

        return Resolutions.findOne(resolutionId);
      }

      throw new Error('Unauthorized');
    }
  }
};