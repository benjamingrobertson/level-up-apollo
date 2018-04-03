import ChartEntries from "./chart-entries";

// ChartEntries.insert({
//   name: "Test Res",
// });

// Drop the collection.
// ChartEntries.rawCollection().drop();

const res = ChartEntries.find({}).fetch();
console.log(res);

export default {
  Query: {
    chartEntries(obj, args, { userId }) {
      if (userId === undefined) {
        userId = null;
      }
      return ChartEntries.find({
        userId
      }).fetch();
    }
  },

  Mutation: {
    createChartEntry(object, { date, consistency, qualities, flow, frequency, intercourse }, { userId }) {
      console.log('create Chart entry: ', date, consistency, qualities, flow, frequency, intercourse)
      const entryId = ChartEntries.insert({
        date,
        consistency,
        qualities,
        flow,
        frequency,
        intercourse,
        userId
      });

      return ChartEntries.findOne(entryId);
    }
  }
};