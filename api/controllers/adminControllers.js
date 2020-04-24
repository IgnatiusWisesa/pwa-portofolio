// Import Database
const db = require('./../database/db')

module.exports = {

    /**
    * @routes GET
    * @description Fetch name in name and overview 
    * @access Admin
    */
    fetchname : (req,res) => {
        // Get Name SQL
        let sql = `select name from nameoverview where id='1';`

        db.query(sql, (err, result) => {
            if(err) res.status(200).send(err)
            res.status(200).send(result)
        })
    },

    /**
    * @routes GET
    * @description Fetch overview in name and overview 
    * @access Admin
    */
   fetchoverview : (req,res) => {
        // Get Overview SQL
        let sql = `select overview from nameoverview where id='1';`

        db.query(sql, (err, result) => {
            if(err) res.status(200).send(err)
            res.status(200).send(result)
        })
    },
}