import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  position: Number,
  started: Boolean,
  minigamePoints: Number,
  idRecruiter: String,
});

export default mongoose.model("Game", Schema);
