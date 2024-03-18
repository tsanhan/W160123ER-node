const registerValidation = require("./Joi/registerValidation");
const loginValidation = require("./Joi/loginValidation");

const validator = undefined || "Joi";

const validateRegistration = user => {
  if (validator === "Joi") return registerValidation(user);
};

const validateLogin = user => {
  if (validator === "Joi") return loginValidation(user);
};

exports.validateRegistration = validateRegistration;
exports.validateLogin = validateLogin;
