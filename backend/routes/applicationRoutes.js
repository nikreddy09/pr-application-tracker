const Application = require('../models/applicationModel.js');
const express = require('express');
const userVerification = require('../middlewares/AuthMiddleware.js');
const router = express.Router();

// Route to save a new Applicant's Info
router.post('/', async (request, response) => {
    try {
        console.log(request.body)
        const {
            applicantName,
            category,
            ita,
            acknowledgment,
            biometricsInvitation,
            biometricsCompleted,
            medicalsInvitation,
            medicalsCompleted,
            p1Email,
            p2Email,
            copr
        } = request.body;
        if (!applicantName || !category || !ita) {
            return response.status(400).send('Please send applicant name and category details')
        }
        const newApplication = {
            applicantName,
            category,
            ita,
            acknowledgment,
            biometricsInvitation,
            biometricsCompleted,
            medicalsInvitation,
            medicalsCompleted,
            p1Email,
            p2Email,
            copr
        }
        const application = await Application.create(newApplication);
        return response.status(201).send(application);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
});

// Route to get all applications from DB

router.get('/', userVerification ,async (request, response) => {
    try {
        const applications = await Application.find({})
        return response.status(200).send({
            count: applications.length,
            data: applications
        });
    } catch(error) {
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
})

// Route to get one application from DB

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const application = await Application.findById(id)
        return response.status(200).send({
            data: application
        });
    } catch(error) {
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
})

// Route to update an application
router.put('/:id', async (request, response) => {
    try {

        const {applicantName, category, ita, acknowledgment} = request.body;
        if (!applicantName || !category || !ita) {
            return response.status(400).send('Please send applicant name and category details')
        }

        const { id } = request.params;

        const result = await Application.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).send('Application not found in the system')
        } else {
            return response.status(200).send({
                status: 'success'
            })
        }
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
});

module.exports = router