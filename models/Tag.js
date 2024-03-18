import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({ name: { type: String, required: true, unique: true }, });

const Tag = mongoose.model("Tag", TagSchema);


export default mongoose.models.Tag ||
mongoose.model("Tag", TagSchema);