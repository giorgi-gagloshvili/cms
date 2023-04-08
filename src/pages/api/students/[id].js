import Student from "@/models/Student"
import dbConnect from "@/mongo"

export default async function handler(req, res) {
  await dbConnect()

  if (req.method === "GET") {
    try {
      const response = await Student.findById(req.query.id)
      res.status(200).json(response)
    } catch (err) {
      res.json(500).json(err)
    }
  }

  if (req.method === "DELETE") {
    try {
      const response = await Student.findByIdAndDelete(req.query.id)
      res.json(200).json({ message: "The row was deleted successfuly" })
    } catch (err) {
      res.json(500).json(err)
    }
  }

  if (req.method === "PUT") {
    try {
      const response = await Student.findByIdAndUpdate(
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
