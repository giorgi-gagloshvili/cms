import dbConnect from "@/mongo"
import cookie from "cookie"

export default async function handler(req, res) {
  await dbConnect()
  if (req.method === "GET") {
    try {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("access_token", "", {
          httpOnly: true,
          expires: new Date(0),
          SameSite: "strict",
          path: "/",
        })
      )
      res.status(200).json({ message: "success" })
    } catch (err) {}
  }
}
