const jwt = require("jsonwebtoken");
const { BlackListModel } = require("../model/blacklistModel");
require('dotenv').config();
const admin = async (req, res, next) => {
    const token = req.headers.auth;

    if (token) {
        try {
            let obj = await BlackListModel.findOne({ token: token });

            if (obj) {
                res.status(200).json({ "error": "Login again...", issue: true });
            } else {
                jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
                    if (err) {
                        res.status(200).json({ "error": "You are not authorised to access the data.", issue: true })
                    }
                    if (decoded) {
                        if (decoded.username === "admin" && decoded.email === "admin@admin.com") {
                            next();
                        } else {
                            res.status(200).json({ "error": "You are not authorised to access the data.", issue: true })
                        }

                    }
                })
            }

        } catch (error) {
            res.status(200).json({ "error": error.message, issue: true });
        }
    } else {
        res.status(200).json({ "error": "try to Login first...", issue: true });
    }
}



module.exports = {
    admin
}