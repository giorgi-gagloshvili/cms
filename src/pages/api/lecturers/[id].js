import Lecturer from "@/models/Lecturer"
import dbConnect from "@/mongo"
export default async function handler(req, res) {
  dbConnect()
  if (req.method === "DELETE") {
    try {
      const response = await Lecturer.findByIdAndDelete(req.query.id)
      res.status(200).json({
        status: "success",
        message: "The row was deleted successfully",
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }

  if (req.method === "PUT") {
    try {
      const response = await Lecturer.findByIdAndUpdate(
        { _id: req.query.id },
        req.body,
        { new: true }
      )
      res.status(200).json(response)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
