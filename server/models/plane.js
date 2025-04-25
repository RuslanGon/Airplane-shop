import mongoose from "mongoose";

const planeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  capacity: { type: Number, required: true },
  planeImage: { type: String, required: true },
});

const PlaneModel = mongoose.model("Plane", planeSchema);

export default PlaneModel;