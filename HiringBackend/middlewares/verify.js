const jwt = require("jsonwebtoken");

module.exports = function checkToken(req, res, next) {
  console.log(req.headers["authorization"]);
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    next({ auth: false, message: "No token provided." });
  }
  jwt.verify(token, "secret", function (err, decoded) {
    if (err) {
      next({ auth: false, message: "Failed to authenticate token." });
    }
    req.user = decoded;
    console.log(req.user);
    next();
  });
};
