const express = require("express");
const bcrypt = require('bcrypt');
const { UserModel } = require("../model/userModel");
const jwt = require("jsonwebtoken");
const { BlackListModel } = require("../model/blacklistModel");
const sendEmail = require("../utils/sendEmail");
const { auth } = require("../middleware/auth.middleware");
const { RecipeModel } = require("../model/recipeModel");
const { admin } = require("../middleware/admin.middelware");
const multer = require("multer");
const cloudinary = require('cloudinary');
require('dotenv').config();


const userRouter = express.Router();




userRouter.post("/register", async (req, res) => {

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(200).json({ "error": "all the fields are requried", issue: true });
    } else {
        try {
            let user = await UserModel.findOne({ email: email });

            if (user) {
                res.status(200).json({ "error": "User has already registered", issue: true })
            } else {
                bcrypt.hash(password, 5, async (err, hash) => {
                    if (err) return err;
                    req.body.password = hash;
                    const newbody = {
                        ...req.body,
                        followers: [],
                        following: []
                    }

                    let newuser = new UserModel(newbody);
                    await newuser.save();
                    res.status(200).json({ "message": "The new user has been registered", issue: false });
                })

            }
        } catch (error) {
            res.status(200).json({ "error": error.message, issue: true })
        }
    }
})

userRouter.get("/profile", auth, async (req, res) => {
    const email = req.body.email;
    try {
        let users = await UserModel.findOne({email:email});
        res.status(200).json({ users, issue: false });
    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })
    }
})


userRouter.post("/login", async (req, res) => {
    const { password, email } = req.body;
    if (!password || !email) {
        res.status(200).json({ "error": "all the fields are requried", issue: true });
    } else {
        try {
            let user = await UserModel.findOne({ email });
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) return err;

                    if (result) {
                        const token = jwt.sign({ userId: user._id, username: user.username, email: user.email }, process.env.JWT_KEY);

                        res.status(200).json({ "message": "Login successful!", user: { username: user.username, email: user.email }, "token": token, issue: false })
                    } else {
                        res.status(200).json({ "error": "Invalid Password!", issue: true })
                    }
                })
            } else {
                res.status(200).json({ "error": "User Not Found!", issue: true })
            }
        } catch (error) {
            res.status(200).json({ "error": error.message, issue: true })
        }
    }

})

// send mail for forgot Password
userRouter.post("/forgot", async (req, res) => {
    const { email } = req.body;
    if (!email) {
        res.status(200).json({ "error": "all the fields are requried", issue: true });
    } else {
        try {
            let user = await UserModel.findOne({ email });
            if (user) {
                const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_RESET_KEY);
               

                const text = `here is the link to forgot Password, try to update Password  ${process.env.WEBURL}/reset_password/${token}`;

                let obj = await sendEmail(user.email, "Forgot Password @ Recipe Swap", text);
                if (!obj.issue) {
                    user.token = token;
                    await user.save();
                    res.send({ message: "Password reset link sent to your email account, check the spam folder", issue: false });
                } else {
                    res.status(200).json({ "error": obj.error, issue: true })
                }

            } else {
                res.status(200).json({ "error": "User Not Found!", issue: true })
            }
        } catch (error) {
            res.status(200).json({ "error": error.message, issue: true })
        }
    }

})

userRouter.post("/resetpassword/:token", async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    if (!password) {
        res.status(200).json({ "error": "all the fields are requried" });
    } else {
        try {
            let user = await UserModel.findOne({ token: token });
            if (user) {
                jwt.verify(token, process.env.JWT_RESET_KEY, (err, decoded) => {
                    if (err) return err;
                    if (decoded) {
                        bcrypt.hash(password, 5, async (err, hash) => {
                            if (err) return err;
                            user.password = hash;
                            user.token = "";
                            await user.save();
                            res.status(200).json({ "message": "Password has been changed", issue: false });
                        })
                    }
                })

            } else {
                res.status(200).json({ "error": "Token is expired!", issue: true })
            }
        } catch (error) {
            res.status(200).json({ "error": error.message, issue: true })
        }
    }

})


userRouter.get("/logout", async (req, res) => {
    const token = req.headers.auth;
    try {
        let obj = new BlackListModel({ token });
        await obj.save();
        res.status(200).json({ message: "User has been logged out", issue: false })
    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })
    }

})

userRouter.delete("/delete", admin, async (req, res) => {
    try {
        await RecipeModel.deleteMany({ email: req.body.email });
        await UserModel.deleteOne({ email: req.body.email });
        res.status(200).json({ message: "User Account has been deleted.", issue: false });
    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })
    }
})
module.exports = {
    userRouter
}