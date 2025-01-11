const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};

// agar firstname email ya password teeno me se ek bhi agar nai hai to naya err throw karega and uske baad ek naya user create karega userModel.create ki help se and fir us user ko return kar dega uske uper ke function par jaha hum firstname email lastname password pass kar rahe hai
