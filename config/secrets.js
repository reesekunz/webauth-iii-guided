module.exports = {
  jwtSecret: process.env.JWT_SECRET || "keep it secret, keep it safe!"
};
// using in auth-router and restricted-middleware
