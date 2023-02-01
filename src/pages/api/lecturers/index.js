import dbConnect from "@/mongo"
import Lecturer from "@/models/Lecturer"

export default async function handler(req, res) {
  dbConnect()

  if (req.method === "GET") {
    try {
      const response = await Lecturer.find()
      res.status(200).json(response)
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: "Data was not found",
      })
    }
  }

  if (req.method === "POST") {
    try {
      const response = await Lecturer.create(req.body)
      res.status(200).json(response)
    } catch (err) {
      res.status(500).json({ status: "error", message: "Something went wrong" })
    }
  }
}
