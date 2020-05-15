// Import Crypto Modules
const CryptoJS = require('crypto-js');

module.exports = encData => {
    var bytesData  = CryptoJS.AES.decrypt((encData), process.env.encryptPass);
	return JSON.parse(bytesData.toString(CryptoJS.enc.Utf8));
};