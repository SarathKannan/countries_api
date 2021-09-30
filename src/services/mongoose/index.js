import mongoose from "mongoose";
import Promise from "bluebird";
import { mongo } from "../../config";

Object.keys(mongo.options).forEach((key) => {
  mongoose.set(key, mongo.options[key]);
});

mongoose.Promise = Promise;

mongoose.Types.ObjectId.prototype.view = function () {
  return { id: this.toString() };
};

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});

export default mongoose;
