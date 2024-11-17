import bcrypt from "bcrypt";

const saltRounds = 20;
const password = "password";

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(hash);
});
