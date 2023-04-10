import dbConnect from "@/mongo"
import Lecturer from "@/models/Lecturer"

export default async function handler(req, res) {
  await dbConnect()

  if (req.method === "GET") {
    console.log(req.query)
    try {
      const response = await Lecturer.find()
      const data = req.query.degrees
        ? response.filter((item) => item.degrees === req.query.degrees)
        : response
      res.status(200).json(data)
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
      res
        .status(500)
        .json({ status: "error", message: "Something fuckin went wrong" })
    }
  }
}
