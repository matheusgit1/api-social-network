const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const transport = require("../mail/transporter")
const verifyToken = require("./verifyToken")

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log("aqui")
    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    return res.status(200).json({error:null, user: user});
  } catch (err) {
    return res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")
    const accessToken = jwt.sign(
      {
        id: user._id,
        email: user.email
      },
      process.env.JWT_SEC,
      { expiresIn: "7d" }
    );
    return res.status(200).json({error: null, user, accessToken})
  } catch (err) {
    return res.status(500).json(err)
  }
});

//CHANGE PASSWORD
router.put("/change-password", verifyToken, async (req, res)=>{
  try{
    const email = req.user.email
    const user = await User.find({email: email})
    if(!user){
      return res.status(400).json("user not found")
    }
    if(req.body.password != req.body.confirmPassword){
      return res.status(400).json("passwords not match")
    }
    const salt = 10
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const userUpdate = await User.findByIdAndUpdate(req.user.id, {password: hashedPassword})
    const userReturn = await User.findById(req.user.id, {password: 0})
    return res.status(200).json("password updated sucefully")
  }catch(err){
    return res.status(500).json(err)
  }
})

module.exports = router;
