const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "87212018a29dde",
		pass: "f47635078d5200"
	}
});

module.exports = transport;