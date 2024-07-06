const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    Fname:{
        type: String,
        required:true
    },
    semester:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    enrollment:{
        type: String,
        required:true
    },
    branch:{
        type: String,
        required:true
    },

    DESCIPLINE : {
        type: String,
        //enum: ['1', '2', '3' ,'4' , '5'],
        required: true,
      },
      COMMUNICATION : {
        type: String,
        //enum: ['1', '2', '3' ,'4' , '5'],
        required: true,
      },
      PUNCTUALITY : {
        type: String,
        //enum: ['1', '2', '3' ,'4' , '5'],
        required: true,
      },
      LEADERSHIP : {
        type: String,
        //enum: ['1', '2', '3' ,'4' , '5'],
        required: true,
      },
      EDUCATIONAL_PROGRESS : {
        type: String,
        //enum: ['1', '2', '3' ,'4' , '5'],
        required: true,
      },
}) 

//hashing password

// userSchema.pre('save',async function(next){
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password,12);
//         //this.cpassword = await bcrypt.hash(this.cpassword,12);

//     }
//     next();
// });

// //generating Token
// userSchema.methods.generateAuthToken = async function() {
//     try{
//         let token = jwt.sign({_id:this._id} , process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     }catch (err){
//         console.log(err);
//     }
// }

const User = mongoose.model('FEEDBACK',userSchema);

module.exports = User;