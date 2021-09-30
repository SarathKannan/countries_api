import mongoose, { Schema } from "mongoose";

const countrySchema = new Schema({
  num_code: {
    type: Number,
  },
  alpha_2_code: {
    type: String,
  },
  alpha_3_code: {
    type: String,
  },
  en_short_name: {
    type: String,
  },
  nationality: {
    type: String,
  },
  countryCode: {
    type: String,
  },
});

countrySchema.methods = {
  view(full) {
    let view = {};
    let fields = ["alpha_2_code", "en_short_name", "countryCode"];
    if (full) {
      fields = [...fields, "alpha_3_code", "nationality"];
    }
    fields.forEach((field) => {
      view[field] = this[field];
    });
    return view;
  },
};

const model = mongoose.model("Country", countrySchema);

export const schema = model.schema;
export default model;
