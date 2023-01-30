import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
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
  isEmployee: {
    type: Boolean,
    default: false,
  },
  occupation: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
})

export default mongoose.models.Student ||
  mongoose.model("Student", studentSchema)
