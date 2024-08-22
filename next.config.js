const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  outputFileTracingIncludes: {
    "/": ["./node_modules/argon2/prebuilds/linux-x64/*.musl.*"],
  },
};
