import ChartEntries from "./chart-entries";

// ChartEntries.insert({
//   name: "Test Res",
// });

// Drop the collection.
ChartEntries.rawCollection().drop();

const res = ChartEntries.find({}).fetch();
console.log(res);

export default {
  Query: {
    chartEntries() {
      return ChartEntries.find({}).fetch();
    }
  },

  Mutation: {
    createChartEntry(object, { date, consistency }, context) {
      console.log('create Chart entry: ', date, consistency)
      const entryId = ChartEntries.insert({
        date,
        consistency
      });

      return ChartEntries.findOne(entryId);
    }
  }
};