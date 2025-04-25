import mongoose from "mongoose";

const planeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const PlaneModel = mongoose.model("Plane", planeSchema);

export default PlaneModel;