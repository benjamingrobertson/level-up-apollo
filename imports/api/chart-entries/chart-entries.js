import { Mongo } from "meteor/mongo";

const ChartEntries = new Mongo.Collection("chart-entries");

export default ChartEntries;