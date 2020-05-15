// Import Crypto Modules
const CryptoJS = require('crypto-js');

module.exports = data => {
	return CryptoJS.AES.encrypt(JSON.stringify(data), process.env.encryptPass).toString()
};