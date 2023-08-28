const nodemailer = require("nodemailer");
require('dotenv').config();
const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: 465,
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        });

        return { issue: false };
    } catch (error) {
        return { issue: true, "error": error.message };
    }
};

module.exports = sendEmail;