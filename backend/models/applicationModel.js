const mongoose = require('mongoose');
const applicationSchema = mongoose.Schema(
    {
        applicantName: {
            type: String,
            required: true
        },
        userId: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        ita: {
            type: String,
            required: true
        },
        aor: {
            type: String
        },
        bil: {
            type: String
        },
        biometricsPassed: {
            type: String
        },
        mil: {
            type: String
        },
        medicalsPassed: {
            type: String
        },
        p1: {
            type: String
        },
        p2: {
            type: String
        },
        copr: {
            type: String
        }
    }
)


const Application = mongoose.model('Application', applicationSchema);

module.exports = Application
