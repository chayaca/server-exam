const mongoose=require('mongoose');

const usersSchema = mongoose.Schema(
    { 
        name: {type:String},
        age:{type:String},
       Id: {type:String},
        email: {type:String,},
       adress: {type:String,},
    }
)

module.exports = mongoose.model('user', usersSchema);