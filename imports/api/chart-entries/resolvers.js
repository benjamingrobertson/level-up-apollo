import ChartEntries from "./chart-entries";

// ChartEntries.insert({
//   name: "Test Res",
// });

const res = ChartEntries.find({}).fetch();
console.log(res);

export default {
  Query: {
    ChartEntries() {
      return ChartEntries.find({}).fetch();
    }
  },

  Mutation: {
    createChartEntry(object, { date, length }, context) {
      console.log('create Chart entry: ', date, length)
      const entryId = ChartEntries.insert({
        date,
        length
      });

      return ChartEntries.findOne(entryId);
    }
  }
};