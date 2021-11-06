const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
const { userValidateSchema } = require("../Helpers/userValidation");
const user = require("../Schemas/userSchema");

const signup = async (req, res) => {
  try {
    const userValidation = await userValidateSchema.validateAsync(req.body);

    const existEmail = await user.findOne({ email: userValidation.email });
    if (existEmail) {
      res.send(`${userValidation.email } is already been registered`);
    }
    const hashPassword = await bcrypt.hash(userValidation.password, 10);

    const saveUser = new user({
      name: userValidation.name,
      email: userValidation.email,
      password: hashPassword,
    });
    const User = await saveUser.save();
    res.send(User);
  } catch (error) {
      if(error.isJoi=== true) error.status=422
    res.json({ messages: "Registration Failed" });
  }
};

const login = async (req, res) => {
  try {
  const notExistEmail = await user.findOne({ email: req.body.email })
  if (!notExistEmail) {
       res.send("Couldn’t find your Account")
     }
     const validetePassword = await bcrypt.compare(req.body.password, notExistEmail.password)
       
     if (!validetePassword) {
       res.send("Wrong password")
  }
  
  const token = jwt.sign({ id: user._id }, process.env.TOKEN, { expiresIn: '2h' })
   res.send(token)
    
  } catch (error) {
    res.send("Signin Failed")
  }
  

}


module.exports = {
  signup,
  login
};
