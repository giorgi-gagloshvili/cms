export default function handler(req, res) {
  if (req.method === "POST") {
    if (
      req.body.email === "test@gmail.com" &&
      req.body.password === "password"
    ) {
      res.status(200).json(req.body)
    } else {
      res.status(422).json({ message: "You have an error" })
    }
  }
}
