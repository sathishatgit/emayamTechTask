import User from "../modal/userSchema.js";

export const userSignin = async (req, res) => {
  const UserData = req.body;
  console.log(UserData.emailId);

  const info = await User.findOne({ emailId: UserData.emailId });
  if (info && info.password == UserData.password) {
    res.send(info);
  } else {
    res.status(500).send("invalid username or password");
  }
};

export const userSignup = async (req, res) => {
  const reqData = req.body;
  console.log(reqData);
  try {
    const newUser = new User(reqData);
    const addedUser = await newUser.save();
    res.send(addedUser);
  } catch (error) {
    console.log("Error Message", error);
    if (error.code == 11000) res.status(400).send("email id already exists");
    else res.status(500).send("Something went wrong");
  }
};
