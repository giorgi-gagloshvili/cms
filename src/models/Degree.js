import mongoose from "mongoose"

const degreeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Degree || mongoose.model("Degree", degreeSchema)
