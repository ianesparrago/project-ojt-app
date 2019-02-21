const { body } = require("express-validator/check");

const validateRegisterUser = [
  // >>> username
  body("username").trim(),
  body("username")
    .isLength({ min: 2, max: 30 })
    .withMessage("Username must be between 2 to 30 characters long")
    .not()
    .isEmpty()
    .withMessage("Username is required"),

  // >>> password
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required"),

  // >>> confirmPassword
  body("confirmPassword")
    .not()
    .isEmpty()
    .withMessage("Confirm Password is required")
    .custom((value, { req, loc, path }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords must match");
      } else {
        return value;
      }
    })
    .withMessage("Passwords must match"),

  // >>> role
  body("role")
    .trim()
    .isIn(["administrator", "supervisor", "trainee", "employee"])
    .withMessage("Invalid role value")
    .not()
    .isEmpty()
    .withMessage("Role is required"),

  body("firstName").trim(),

  body("middleName").trim(),

  body("lastName").trim(),

  body("gender")
    .trim()
    .isIn(["male", "female"])
    .withMessage("Invalid gender value")
    .optional(),

  body("contactNumber").trim(),

  body("email")
    .trim()
    .normalizeEmail(),

  body("email")
    .isEmail()
    .withMessage("Email is not valid")
    .optional()
];

const validateRegisterUserTrainee = [
  ...validateRegisterUser,
  body("requiredHours").trim(),
  body("requiredHours")
    .isInt({ max: 999 })
    .withMessage("Required Hours must be a number not greater than 999")
    .not()
    .isEmpty()
    .withMessage("Required Hours is required"),

  body("dateOfBirth")
    .trim()
    .isISO8601()
    .withMessage("Date of Birth is invalid")
    .optional(),

  body("address").trim(),

  body("contactNumber").trim(),

  body("school").trim(),

  body("adviserName").trim(),

  body("adviserContactNumber").trim(),

  body("guardianName").trim(),

  body("guardianContactNumber").trim()
];

module.exports = {
  validateRegisterUser,
  validateRegisterUserTrainee
};
