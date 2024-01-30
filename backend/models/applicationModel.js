const mongoose = require('mongoose');
const applicationSchema = mongoose.Schema(
    {
        applicantName: {
            type: String,
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
        acknowledgment: {
            type: String
            // required: true
        },
        biometricsInvitation: {
            type: String
        },
        biometricsCompleted: {
            type: String
        },
        medicalsInvitation: {
            type: String
        },
        medicalsCompleted: {
            type: String
        },
        p1Email: {
            type: String
        },
        p2Email: {
            type: String
        },
        copr: {
            type: String
        }
    }
)


const Application = mongoose.model('Application', applicationSchema);

module.exports = Application
