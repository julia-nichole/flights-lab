var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var destinationSchema = new Schema({
    destAirport: {
        type: String,
    },
    arrives: {
        type: Date,
    }
})
var flightSchema = new Schema({
    airline :{
        type:String,
        enum:['American','Southwest','United',]
    },
    flightNo: {
        type: Number,
        min: 10,
        max:9999,
        required:true,
    },
    departs: {
        type:Date,
        default: function () {
            var redate = new Date();
            redate.setFullYear(redate.getFullYear()+1)
            return redate.toLocaleDateString();}
    },
    depAirport: {
        type: String,
        required: true,
        enum: ["AUN", "DAL", "LAX", "SEA"]
    },
    destinations: [destinationSchema],


    }, {
        timestamps: true
    });

module.exports = mongoose.model('Flight', flightSchema);