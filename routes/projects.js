const express = require('express');
const router = express.Router();

const {projects} = require('../data')

router.get('/', (req,res)=> {
    res.status(200).json(projects)
})

router.get('/:projectId', setProject, (req,res)=> {
    res.json(req.projects)
})

function setProject(req,res,next){
    const projectId = parseInt(req.params.projectId)
    req.project  = projects.find(project => project.id === projectId)

    if(req.project === null){
        return res.status(404).send('Project not found');
    }

    next();
}

module.exports = router;