const jwt = require("jsonwebtoken");
const { BlackListModel } = require("../model/blacklistModel");
require('dotenv').config();
const auth = async (req, res, next) => {
    const token = req.headers.auth;

    if (token) {
        try {
            let obj = await BlackListModel.findOne({ token: token });

            if (obj) {
                res.status(200).json({ "error": "Login again...", issue: true });
            } else {
                jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
                    if (err) return err;
                    if (decoded) {

                        const requested = {
                            ...req.body,
                            userId: decoded.userId,
                            username: decoded.username,
                            email: decoded.email
                        };

                        req.body = requested;
                        next();
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
    auth
}