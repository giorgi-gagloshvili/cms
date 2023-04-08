import mongoose from "mongoose"

const lecturerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
})

export default mongoose.models.Lecturer ||
  mongoose.model("Lecturer", lecturerSchema)
