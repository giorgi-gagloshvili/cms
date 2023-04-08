import dbConnect from "@/mongo"
import User from "@/models/User"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export default async function handler(req, res) {
  await dbConnect()
  const user = await User.findOne({ email: req.body.email })

  if (req.method === "POST") {
    if (req.body.email === "" || req.body.password === "") {
      res.status(422).json({ status: "error", message: "Fill required data" })
      return
    } else if (user) {
      res.status(422).json({ status: "error", message: "email already exists" })
      return
    }

    console.log("Worked out", req.body, req.cookies)
    // return
    const hashed = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, hashed)

    try {
      const response = await User.create({
        ...req.body,
        password: hashedPassword,
      })
      // const token = jwt.sign({ id: response._id }, "secret_key")
      res
        .status(200)
        .setHeader("access_token", "asdqwdqwdasd", {
          httpOnly: true,
          maxAge: 60 * 1000,
        })
        .json(response)
    } catch (err) {
      res.status(500).json({ message: "Error occured" })
    }
  }
}
