import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
