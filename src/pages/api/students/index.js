import dbConnect from "@/mongo"
import Student from "@/models/Student"

export default async function handler(req, res) {
  dbConnect()
  if (req.method === "GET") {
    try {
      const response = await Student.find()
      res.status(200).json(response)
    } catch (err) {
      res.status(500).json(err.response)
    }
  }

  if (req.method === "POST") {
    try {
      const response = await Student.create(req.body)
      res.status(200).json(response)
    } catch (err) {
      res.status(500).json(err.response)
    }
  }
}
