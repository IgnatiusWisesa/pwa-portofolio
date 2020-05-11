// Import Database
const db = require('./../database/db')

module.exports = {

    /**
    * @routes GET
    * @description Fetch name in name and overview 
    * @access Admin
    */
    fetchname : (req,res) => {
        // Set SQL Syntax
        // Get Name SQL
        let sql = `select name from nameoverview where id='1';`

        // Database Action
        db.query(sql, (err, result) => {
            if(err) res.status(200).send(err)

            if (result.length === 0) {
				return res.status(200).send({ error: true, message: 'Data unavailable!' });
			} else {
				return res.status(200).send({ error: false, result });
			}
        })
    },

    /**
    * @routes GET
    * @description Fetch overview in name and overview 
    * @access Admin
    */
   fetchoverview : (req,res) => {
        // Set SQL Syntax
        // Get Overview SQL
        let sql = `select overview from nameoverview where id='1';`

        // Database Action
        db.query(sql, (err, result) => {
            if(err) res.status(200).send(err)
            
            if (result.length === 0) {
				return res.status(200).send({ error: true, message: 'Data unavailable!' });
			} else {
				return res.status(200).send({ error: false, result });
			}
        })
    },

    /**
    * @routes PUT
    * @description Edit name in name and overview 
    * @access Admin
    */
    updatename : (req,res) => {
        // Get Name
        const { name } = req.body

        // Validation Data
        if(
            name === '' || name === undefined
        ){
            return res.status(500).send({ error: true, message: `Name cannot be empty!` })
        } else {
            // Set Data
			const data = {
				name
            };
            
            // Set SQL Syntax
            // Update Name SQL
            const sql = `UPDATE nameoverview SET name = ? WHERE (id = '1')`;
            
            // Database Action
            db.query(sql, [data.name], (err, updateNameResult) => {
                if (err) return res.status(500).send(err);

                if (updateNameResult.affectedRows === 0) {
                    return res
                        .status(200)
                        .send({ error: true, message: "Failed to update name!" })
                } else {
                    return res
                        .status(200)
                        .send({ error: false, message: "Update name successful!" })
                }
            })
        }
    },

    /**
    * @routes PUT
    * @description Edit overview in name and overview 
    * @access Admin
    */
    updateoverview : (req,res) => {
        // Get Overview
        const { overview } = req.body

        // Validation Data
        if(
            overview === '' || overview === undefined
        ) {
            return res.status(500).send({ error: true, message: `Overview cannot be empty!` })
        } else {
            // Set Data
            const data = {
                overview
            };

            // Set SQL Syntax
            // Update Overview SQL
            const sql = `UPDATE nameoverview SET overview = ? WHERE (id = '1')`;

            // Database Action
            db.query(sql, [data.overview], (err, updateOverviewResult) => {
                if (err) return res.status(500).send(err);

                if (updateOverviewResult.affectedRows === 0) {
                    return res
                        .status(200)
                        .send({ error: true, message: "Failed to update overview!" })
                } else {
                    return res
                        .status(200)
                        .send({ error: false, message: "Update overview successfull!" })
                }
            })
        }
    },
    
    /**
    * @routes GET
    * @description Fetch comp skills
    * @access Admin
    */
    fetchcompskills : (req,res) => {
        // Set SQL Syntax
        // Get Computational Skills SQL
        let sql = `select * from computational_skills;`

        // Database Action
        db.query(sql, (err, result) => {
            if(err) res.status(200).send(err)

            if (result.length === 0) {
				return res.status(200).send({ error: true, message: 'Data unavailable!' });
			} else {
				return res.status(200).send({ error: false, result });
			}
        })
    },

    /**
    * @routes POST
    * @description Add computational skill 
    * @access Admin
    */
    addcompskill : (req,res) => {
        // Get Skill
        const { skill } = req.body

        // Validation Data
        if(
            skill === '' || skill === undefined
        ){
            return res.status(500).send({ error: true, message: `Skill cannot be empty!` })
        } else {
            // Set Data
            const data = {
                skills: skill
            };
            
            // Set SQL Syntax
            // Add Comp-Skill SQL
            let sql = `INSERT INTO computational_skills SET ? `;

            // Database Action
            db.query(sql, data,(err, result) => {
                if (err) return res.status(500).send(err);

                if (result.insertId === 0) {
                    return res
                        .status(200)
                        .send({ error: true, message: "Failed to add computational skill!" })
                } else {
                    return res
                        .status(200)
                        .send({ error: false, message: "Add computational skill successfull!" })
                }
            })
        }
    },

    /**
    * @routes POST
    * @description Delete computational skill 
    * @access Admin
    */
    deletecompskill : (req,res) => {
            // Get Id
            const { id } = req.body;

            // Set SQL Syntax
            // Delete Comp-Skill SQL
            let sql = `DELETE FROM computational_skills WHERE (id = ? )`;

            // Database Action
            db.query(sql, parseInt(id), (err, result) => {
                if (err) res.status(500).send({ error: true, err });

                if (result.affectedRows === 0) {
                    return res.status(200).send({ error: true, message: 'Deletion unsuccessful!' });
                } else {
                    return res.status(200).send({ error: false, message: 'Data deleted!' });
                }
            });
    },

    /**
    * @routes GET
    * @description Fetch noncomp skills
    * @access Admin
    */
    fetchnoncompskills : (req,res) => {
        // Set SQL Syntax
        // Get Computational Skills SQL
        let sql = `select * from noncomputational_skills;`

        // Database Action
        db.query(sql, (err, result) => {
            if(err) res.status(200).send(err)

            if (result.length === 0) {
                return res.status(200).send({ error: true, message: 'Data unavailable!' });
            } else {
                return res.status(200).send({ error: false, result });
            }
        })
    },

    /**
    * @routes POST
    * @description Add noncomputational skill 
    * @access Admin
    */
    addnoncompskill : (req,res) => {
        // Get Skill
        const { skill } = req.body

        // Validation Data
        if(
            skill === '' || skill === undefined
        ){
            return res.status(500).send({ error: true, message: `Skill cannot be empty!` })
        } else {
            // Set Data
            const data = {
                skills: skill
            };
            
            // Set SQL Syntax
            // Add Comp-Skill SQL
            let sql = `INSERT INTO noncomputational_skills SET ? `;

            // Database Action
            db.query(sql, data,(err, result) => {
                if (err) return res.status(500).send(err);

                if (result.insertId === 0) {
                    return res
                        .status(200)
                        .send({ error: true, message: "Failed to add noncomputational skill!" })
                } else {
                    return res
                        .status(200)
                        .send({ error: false, message: "Add noncomputational skill successfull!" })
                }
            })
        }
    },

    /**
    * @routes POST
    * @description Delete noncomputational skill 
    * @access Admin
    */
    deletenoncompskill : (req,res) => {
        // Get Id
        const { id } = req.body;

        // Set SQL Syntax
        // Delete Comp-Skill SQL
        let sql = `DELETE FROM noncomputational_skills WHERE (id = ? )`;

        // Database Action
        db.query(sql, parseInt(id), (err, result) => {
            if (err) res.status(500).send({ error: true, err });

            if (result.affectedRows === 0) {
                return res.status(200).send({ error: true, message: 'Deletion unsuccessful!' });
            } else {
                return res.status(200).send({ error: false, message: 'Data deleted!' });
            }
        });
    },

    /**
    * @routes GET
    * @description Fetch education
    * @access Admin
    */
   fetcheducation : (req,res) => {
        // Set SQL Syntax
        // Get Education SQL
        let sql = `select * from education ORDER BY educationId;`

        // Database Action
        db.query(sql, (err, result) => {
            if(err) res.status(200).send(err)

            if (result.length === 0) {
                return res.status(200).send({ error: true, message: 'Data unavailable!' });
            } else {
                return res.status(200).send({ error: false, result });
            }
        })
    },

    /**
    * @routes PUT
    * @description Rearrange education array 
    * @access Admin
    */
   rearrangeeducation : (req,res) => {
        // Get newEducationArray
        const {newEducationArray} = req.body

        // Validation Data
        if(
            newEducationArray === '' || newEducationArray === undefined
        ){
            return res.status(500).send({ error: true, message: `There is an error with the dnd!` })
        } else {

            // Set SQL Syntax
            // Rearrange Education SQL
            let sql = ``;
            for(var i=0; i<newEducationArray.length; i++){
                sql += `UPDATE education SET 
                        starts = '${newEducationArray[i].starts}', 
                        finish = '${newEducationArray[i].finish}', 
                        institution = '${newEducationArray[i].institution}', 
                        grade = '${newEducationArray[i].grade}', 
                        educationId = '${i+1}' 
                        WHERE id = ${newEducationArray[i].id};`
            }

            // Database Action
            db.query(sql, (err, rearrangeEducationResult) => {
                if (err) return res.status(500).send(err);

                if (rearrangeEducationResult.affectedRows === 0) {
                    return res
                        .status(200)
                        .send({ error: true, message: "Failed to rearrange education!" })
                } else {
                    return res
                        .status(200)
                        .send({ error: false, message: "Rearrange education successfull!" })
                }
            })
        }
   },

    /**
    * @routes POST
    * @description Add education 
    * @access Admin
    */
    addeducation : (req,res) => {
        // Get new education
        const newEducation = req.body

        // Validation Data
        if(
            newEducation.starts === '' || newEducation.starts === undefined ||
            newEducation.finish === '' || newEducation.finish === undefined ||
            newEducation.institution === '' || newEducation.institution === undefined
        ){
            return res.status(500).send({ error: true, message: `Input cannot be empty!` })
        } else {
            // Set Data
            let data = {}
            if(
                newEducation.grade === '' || newEducation.grade === undefined
            ) {
                data = {
                    ...newEducation,
                    grade: '-'
                }
            } else {
                data = {
                    ...newEducation
                };
            }

            // Set SQL Syntax
            // Add Education SQL
            let sql = `INSERT INTO education SET ? `;

            // Database Action
            db.query(sql, data,(err, result) => {
                if (err) return res.status(500).send(err);

                if (result.insertId === 0) {
                    return res
                        .status(200)
                        .send({ error: true, message: "Failed to add new education!" })
                } else {
                    return res
                        .status(200)
                        .send({ error: false, message: "Add new education successfull!" })
                }
            })
        }
    },

    /**
    * @routes PUT
    * @description Update education
    * @access Admin
    */
    updateeducation : (req,res) => {
        // Get Updated Education
        const { updatedEducation } = req.body.updatedEducation

        // Validation Data
        if(
            updatedEducation.starts === '' || updatedEducation.starts === undefined ||
            updatedEducation.finish === '' || updatedEducation.finish === undefined ||
            updatedEducation.institution === '' || updatedEducation.institution === undefined
        ){
            return res.status(500).send({ error: true, message: `Input cannot be empty!` })
        } else {
            // Set Data
            let data = {}
            if(
                updatedEducation.grade === '' || updatedEducation.grade === undefined
            ) {
                data = {
                    ...updatedEducation,
                    grade: '-'
                }
            } else {
                data = {
                    ...updatedEducation
                };
            }

            // Set SQL Syntax
            // Update Overview SQL
            const sql = `UPDATE education SET ? WHERE (id = ?)`;
    
            // Database Action
            db.query(sql, [data, updatedEducation.id], (err, updateOverviewResult) => {
                if (err) return res.status(500).send(err);
                
                if (updateOverviewResult.affectedRows === 0) {
                    return res
                        .status(200)
                        .send({ error: true, message: "Failed to update education!" })
                } else {
                    return res
                        .status(200)
                        .send({ error: false, message: "Update education successfull!" })
                }
            })
        }
    },

    /**
    * @routes POST
    * @description Delete education
    * @access Admin
    */
    deleteeducation : (req,res) => {
        // Get Id
        const { id } = req.body;

        // Set SQL Syntax
        // Delete Comp-Skill SQL
        let sql = `DELETE FROM education WHERE (educationId = ? )`;

        // Database Action
        db.query(sql, parseInt(id), (err, result) => {
            if (err) res.status(500).send({ error: true, err });

            if (result.affectedRows === 0) {
                return res.status(200).send({ error: true, message: 'Deletion unsuccessful!' });
            } else {

                // Set SQL Syntax
                // Get Education SQL
                sql = `select * from education;`

                // Database Action
                db.query(sql, (err, result) => {
                    if(err) res.status(200).send(err)

                    if (result.length === 0) {
                        return res.status(200).send({ error: true, message: 'Data unavailable!' });
                    } else {
                        return res.status(200).send({ error: false, result });
                    }
                })
            }
        });
    },

    /**
    * @routes GET
    * @description Fetch workach
    * @access Admin
    */
    fetchworkach : (req,res) => {
        // Set SQL Syntax
        // Get Workach SQL
        let sql = `select * from workach ORDER BY workachId;`

        // Database Action
        db.query(sql, (err, result) => {
            if(err) res.status(200).send(err)

            if (result.length === 0) {
                return res.status(200).send({ error: true, message: 'Data unavailable!' });
            } else {
                //
                // Set Result
                let resultSuccess = []

                for (var i=0; i<result.length;i++) {
                    resultSuccess.push(
                        {
                            id : result[i].id,
                            workachId : result[i].workachId,
                            title : result[i].title,
                            institution : result[i].institution,
                            time : result[i].time,
                            opt : result[i].opt,
                            description : JSON.parse(result[i].description)
                        }
                    )
                }

                return res.status(200).send({ error: false, resultSuccess });
            }
        })
    },

    /**
    * @routes PUT
    * @description Rearrange workach array 
    * @access Admin
    */
    rearrangeworkach : (req,res) => {
        // Get workach array
        const {newWorkachArray} = req.body

        //
        // Stringify description
        for (var i = 0; i<newWorkachArray.length; i++) {
            
            //
            // Validify option
            if (newWorkachArray[i].opt === false){
                newWorkachArray[i] = {
                    ...newWorkachArray[i],
                    opt: '-'
                }
            }

            //
            // Validify description
            if (newWorkachArray[i].description){
                newWorkachArray[i] = {
                    ...newWorkachArray[i],
                    description: JSON.stringify(newWorkachArray[i].description)
                }
            } else {
                newWorkachArray[i] = {
                    ...newWorkachArray[i],
                    description: '["-"]'
                }
            }
        }

        // Validation Data
        if(
            newWorkachArray === '' || newWorkachArray === undefined
        ){
            return res.status(500).send({ error: true, message: `There is an error with the dnd!` })
        } else {
            // Set SQL Syntax
            // Rearrange Workach SQL
            let sql = ``;
            for(var i=0; i<newWorkachArray.length; i++){
                sql += `UPDATE workach SET 
                        title = '${newWorkachArray[i].title}', 
                        institution = '${newWorkachArray[i].institution}', 
                        time = '${newWorkachArray[i].time}', 
                        opt = '${newWorkachArray[i].opt}',
                        description = '${newWorkachArray[i].description}', 
                        workachId = '${i+1}'
                        WHERE id = ${newWorkachArray[i].id};`
            }

            // Database Action
            db.query(sql, (err, rearrangeWorkachResult) => {
                if (err) return res.status(500).send(err);

                if (rearrangeWorkachResult.affectedRows === 0) {
                    return res
                        .status(200)
                        .send({ error: true, message: "Failed to rearrange workach!" })
                } else {
                    return res
                        .status(200)
                        .send({ error: false, message: "Rearrange workach successfull!" })
                }
            })
        }
    },

    /**
    * @routes POST
    * @description Add workach 
    * @access Admin
    */
    addworkach : (req,res) => {
        // Get new workach
        const { newWorkach } = req.body

        // Validation Data
        if(
            newWorkach.title === '' || newWorkach.title === undefined ||
            newWorkach.institution === '' || newWorkach.institution === undefined ||
            newWorkach.time === '' || newWorkach.time === undefined
        ){
            return res.status(500).send({ error: true, message: `Input cannot be empty!` })
        } 
        else {
            // Set Data
            let data = {}
            if(
                newWorkach.opt === '' || newWorkach.opt === undefined
            ) {
                data = {
                    ...newWorkach,
                    opt: '-',
                    description: '["-"]'
                }
            } else {
                // 
                // configuring description array]

                let DSC = newWorkach.description.sort((a, b) => (a.timestamp) - (b.timestamp));
                DSC = DSC.concat({
                    index:1000,
                    value: 'last'
                })

                let description = []
                for(var i=0; i<DSC.length-1; i++) {
                    if( DSC[i].index < DSC[i+1].index ) {
                        description.push(DSC[i])
                    }
                }
                description = description.sort((a, b) => (a.index) - (b.index));
                description = description.concat({
                    index:1000,
                    value: 'last'
                })

                let newDescription = []
                for(var j=0; j<description.length-1; j++) {
                    if( description[j].index < description[j+1].index ) {
                        newDescription.push(description[j].value)
                    }
                }

                newDescription = JSON.stringify(newDescription)

                data = {
                    ...newWorkach,
                    description: newDescription
                }
            }

            delete data.length

            // Set SQL Syntax
            // Add Workach SQL
            let sql = `INSERT INTO workach SET ? `;

            // Database Action
            db.query(sql, data,(err, result) => {
                if (err) return res.status(500).send(err);

                if (result.insertId === 0) {
                    return res
                        .status(200)
                        .send({ error: true, message: "Failed to add new workach!" })
                } else {
                    return res
                        .status(200)
                        .send({ error: false, message: "Add new workach successfull!" })
                }
            })
        }
    },

    /**
    * @routes POST
    * @description Fetch workach for update
    * @access Admin
    */
    fetchupdateworkach : (req,res) => {
        // Get id
        const { id } = req.body

        // Set SQL Syntax
        // Get Workach SQL
        let sql = `select * from workach WHERE id = ?;`

        // Database Action
        db.query(sql, id, (err, result) => {
            if(err) res.status(200).send(err)

            if (result.length === 0) {
                return res.status(200).send({ error: true, message: 'Data unavailable!' });
            } else {
                let resultSuccess = {
                    ...result[0],
                    description: JSON.parse(result[0].description)
                }

                return res.status(200).send({ error: false, result: resultSuccess });
            }
        })
    },

    /**
    * @routes PUT
    * @description Update workach
    * @access Admin
    */
    updateworkach : (req,res) => {
        // Get Updated Education
        const { updatedWorkach } = req.body

        // Validation Data
        if(
            updatedWorkach.title === '' || updatedWorkach.title === undefined ||
            updatedWorkach.institution === '' || updatedWorkach.institution === undefined ||
            updatedWorkach.time === '' || updatedWorkach.time === undefined
        ){
            return res.status(500).send({ error: true, message: `Input cannot be empty!` })
        } else {
        // Set Data
        let data = {}
        if(
            updatedWorkach.opt === '' || updatedWorkach.opt === undefined || updatedWorkach.opt === null
        ) {
            data = {
                ...updatedWorkach,
                opt: '-',
                description: '["-"]'
            }
        } else {
            data = {
                ...updatedWorkach,
                description: JSON.stringify(updatedWorkach.description)
            };
        }

        // Set SQL Syntax
        // Update Overview SQL
        const sql = `UPDATE workach SET ? WHERE (id = ?)`;

        // Database Action
        db.query(sql, [data, updatedWorkach.id], (err, updatedWorkachResult) => {
            if (err) return res.status(500).send(err);
            
            if (updatedWorkachResult.affectedRows === 0) {
                return res
                    .status(200)
                    .send({ error: true, message: "Failed to update workach!" })
            } else {
                return res
                    .status(200)
                    .send({ error: false, message: "Update workach successfull!" })
            }
        })
        }
    },

    /**
    * @routes POST
    * @description Delete workach
    * @access Admin
    */
    deleteworkach : (req,res) => {
        // Get Id
        const { id } = req.body;

        // Set SQL Syntax
        // Delete Comp-Skill SQL
        let sql = `DELETE FROM workach WHERE (id = ? )`;

        // Database Action
        db.query(sql, parseInt(id), (err, result) => {
            if (err) res.status(500).send({ error: true, err });

            if (result.affectedRows === 0) {
                return res.status(200).send({ error: true, message: 'Deletion unsuccessful!' });
            } else {

                // Set SQL Syntax
                // Get Education SQL
                sql = `select * from workach;`

                // Database Action
                db.query(sql, (err, result) => {
                    if(err) res.status(200).send(err)

                    if (result.length === 0) {
                        return res.status(200).send({ error: true, message: 'Data unavailable!' });
                    } else {
                        return res.status(200).send({ error: false, result });
                    }
                })
            }
        });
    },
}