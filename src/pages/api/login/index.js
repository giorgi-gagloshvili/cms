import bcrypt from "bcryptjs"
import dbConnect from "@/mongo"
import User from "@/models/User"
import jwt from "jsonwebtoken"
import cookie from "cookie"

export default async function handler(req, res) {
  await dbConnect()
  if (req.method === "POST") {
    if (req.body.email === "" && req.body.password === "") {
      res
        .status(422)
        .json({ status: "error", message: "Please fill all field", jwt: jwt })
      return
    }

    const response = await User.findOne({ email: req.body.email })
    if (!response) {
      res.status(422).json({ status: "error", message: "User does not exist" })
      return
    }

    const compared = await bcrypt.compare(req.body.password, response.password)
    if (!compared) {
      res
        .status(422)
        .json({ status: "error", message: "Password is not correct" })
      return
    }

    const token = jwt.sign({ id: response._id }, "secret")

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("access_token", token, {
        httpOnly: true,
        SameSite: "strict",
        path: "/",
        maxAge: 60 * 1000,
      })
    )
    res.status(200).json({
      email: response.email,
      firstName: response.firstName,
      lastName: response.lastName,
      token: token,
    })
  }
}
