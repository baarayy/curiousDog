const jwt = require("jsonwebtoken");

const generateToken = (payload, secretKey, expireDate) => {
  const token = jwt.sign(payload, secretKey, { expireDate });
  return token;
};
// console.log(generateToken({ id: 12 }, "secret", { expiresIn: "30m" }));
// console.log("Can you see the token?");
module.exports = {
  generateToken,
};
