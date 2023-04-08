import dbConnect from "@/mongo"
import Degree from "@/models/Degree"

export default async function handler(req, res) {
  await dbConnect()
  if (req.method === "GET") {
    try {
      const response = await Degree.find()
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
      const response = await Degree.create(req.body)
      res.status(200).json(response)
    } catch (err) {
      res.status(500).json({ status: "error", message: "Something went wrong" })
    }
  }
}
