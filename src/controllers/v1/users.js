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
      if (err.message) {
        if (err.message.includes("email")) {
          return res.status(409).json({
            message: `User with ${req.body.email} already exists`
          });
        }
        return res.status(409).json({
          message: err.message
        });
      }
      return res.status(409).json({
        message: err.message
      });
    });
};
