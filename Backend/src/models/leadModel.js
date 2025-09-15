import mongoose from "mongoose";

const leadSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    altPhone: { type: String },
    email: { type: String, required: true },
    altEmail: { type: String },
    note: { type: String },
    status: {
      type: String,
      enum: ["Qualified", "Converted", "Follow-Up", "New"],
      default: "New",
    },
    qualification: { type: String },
    interest: { type: String },
    source: { type: String, required: true },
    assignedTo: { type: String },
    jobInterest: { type: String },
    state: { type: String, required: true },
    city: { type: String },
    passoutYear: { type: String },
    heardFrom: { type: String },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
