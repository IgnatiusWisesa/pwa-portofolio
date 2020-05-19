// Import Database
const db = require('./../database/db')
// Import Crypto
const encryptC = require('./../helper/encryptC')
const decryptC = require('./../helper/decryptC')
// Import JWT
const jwt = require('jsonwebtoken');
// DOTENV config
require('dotenv').config();

module.exports = {

    /**
	 * @routes POST
	 * @description Super Admin register Admin
	 * @access Super Admin
	 */
	adminRegister: (req, res) => {
		// Get Username And Password
        const { adminUsername, adminPassword } = req.body;

		// Validation Email And Password
		if (
			adminUsername === undefined ||
			adminUsername === '' ||
			adminPassword === undefined ||
			adminPassword === ''
		) {
			return res
				.status(200)
				.send({ error: true, message: 'Kolom email/password tidak boleh kosong!' });
        } else {
		// Set Data
        const data = {
            adminUsername,
            adminPassword
		};
		
		// Encrypt data
		const encData = encryptC(data)

			// Set SQL Syntax
			const sqlRegister = 'INSERT INTO user_admin (data) VALUES (?);';

			// Database Action
			db.query(sqlRegister, encData, (err, registerResult) => {
				if (err) res.status(500).send(err);

				if (registerResult.indertId === 0) {
					return res.status(200).send({ error: true, message: 'Admin registration failed' });
				} else {
					return res.status(200).send({ error: false, message: 'Admin registration success!' });
				}
			});
		}
	},

	/**
	 * @routes POST
	 * @description Admin login action
	 * @access Admin
	 */
	adminLogin: (req, res) => {
		// Get Email And Password
		const { adminUsername, adminPassword } = req.body;

		// Set SQL Syntax
		const sqlFetch =
			'SELECT * FROM user_admin';

		// Database Action
		db.query(sqlFetch, (err, loginResult) => {
			if (err) res.status(500).send(err);

			if (loginResult.length === 0) {
				return res
					.status(200)
					.send({ error: true, message: 'There is an error occured within the database!' });
			} else {
				// decrypt data in array
				let decResult = []
				for(var i=0; i<loginResult.length; i++){
					decResult.push(decryptC(loginResult[i].data))
				}

				// check decrypt with input
				for(var j=0; j<decResult.length; j++){
					if(decResult[j].adminUsername === adminUsername){
						if(decResult[j].adminPassword === adminPassword){

							// set admin user
							const admin = {
								...decResult[j],
								id: j+1
							}

							// make token with jwt
							let accessToken = jwt.sign({admin}, process.env.tokenPass, { expiresIn: '3d' })

							// send token to front-end
							return res.status(200).send({
								error: false,
								result: accessToken
							});
						} else {
							return res.status(200).send({ error: true, message: 'wrong password' });
						}
					}
				}
				return res.status(200).send({ error: true, message: 'username not registered' });
			}
		})
	},

	/**
	 * @routes POST
	 * @description Verify admin access
	 * @access Admin
	 */
	adminVerify: (req, res) => {
		jwt.verify(req.token, process.env.tokenPass, (err, authData) => {
			if(err) {
			  return res.status(200).send({ error: true, message: 'wrong token!' });
			} else {
			  res.json({
				message: 'Admin authorized!',
				authData
			  });
			}
		  });
		
	}
}