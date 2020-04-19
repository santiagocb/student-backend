
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

const studentSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {type: String},
    lastname: {type: String},
    email: {type: String},
    summary: [
        {
            percentage: {type:Number},
            score:{type: Number}
        }],
});

module.exports = mongoose.model('student', studentSchema);