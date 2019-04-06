import { Users } from "../../models/index";
import { validationResult } from "express-validator/check";

export const createUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  Users.create({
    ...req.body
  })
    .then(user => {
      return res.json({
        message: "Registration Successful",
        user
      });
    })
    .catch(err => {
      return res.json({
        message: err.message
      });
    });
};
