const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const authentication =require("../middleware/authenticate");

require('../db/conn');
const User=require('../model/userSchema');
const Faculty=require('../model/facultySchema');
const STUDENT=require('../model/studentSchema');
const FEEDBACK=require('../model/feedBackSchema');
//const { default: FeedBack } = require('../../client/src/components/FeedBack');
//const { default: AddFaculty } = require('../../client/src/components/AddFaculty');

router.get('/' , (req ,res)=>{
    res.send(`Hello world from  the server router js`);
});

router.post('/register',async (req,res)=>{
    const {name , email , password , cpassword}=req.body;
    
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error:"plz fill all the filed properly"});
    }

    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error : "Email already exists"});
        }else if(password != cpassword){
            return res.status(422).json({error : "password are not matching"});

        }else{
            const user =new User({name , email , password , cpassword});

            await user.save();

            res.status(201).json({message: "user registered successfully"});
        }
        
        
    }catch (err) {
        console.log(err);
    }
    
});

//Faculty Registration
router.post('/AddFaculty',async (req,res)=>{
    const {name , email , employeeId, department, password}=req.body;
    
    if(!name || !email || !employeeId || !department ||  !password){
        return res.status(422).json({error:"plz fill all the filed properly"});
    }

    try{
        const userExist = await Faculty.findOne({email:email})
        const userexist = await Faculty.findOne({employeeId:employeeId})

        if(userExist){
            return res.status(422).json({error : "Email already exists"});
        }
        if(userexist){
            return res.status(422).json({error : "Email already exists"});
        }
        
            const user =new Faculty({name , email , employeeId , department ,password});

            await user.save();

            res.status(201).json({message: "user registered successfully"});
        
        
        
    }catch (err) {
        console.log(err);
    }
    
});

//Update Admin
// router.put('/FeedBack' , async(req,res)=>{
//     try{
//         const customer = await AddFaculty({},req.body,{new:true});
//         res.json({customer});
//     }catch(e){
//         console.log(e.message);
//         res.status(500).json({error: 'somting went wrong'});
//     }
// });

//Student Registration
router.post('/AddStudent',async (req,res)=>{
    const {name , enrollment , branch, semester}=req.body;
    
    if(!name || !enrollment || !branch || !semester){
        return res.status(422).json({error:"plz fill all the field properly"});
    }

    try{
        const userExist = await STUDENT.findOne({enrollment:enrollment})
        if(userExist){
            return res.status(422).json({error : "Student already exists"});
        }
        if(semester<1){
            return res.status(422).json({error : "Student already exists"});
        }
        
        
            const user =new STUDENT({name , enrollment , branch, semester});

            await user.save();

            res.status(201).json({message: "Student registered successfully"});
        
        
        
    }catch (err) {
        console.log(err);
    }
    
});

// login route For Admin

router.post('/Admin' ,async (req,res) => {
    try{
        const{email ,password} = req.body;

        if(!email || !password) {
            return res.status(400).json({error :"plz filled the data"});
        }

        const userLogin = await User.findOne({email:email});

        //console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            const token = await userLogin.generateAuthToken();
            //console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error: "Invalid "});
            }else{
                res.json({message:"user Login Successfully"});
            }
        }else{
            res.status(400).json({error: "Invalid "});

        }
       
    }
    catch(err){
        console.log(err);
    }
});


//login route For faculty

router.post('/Login' ,async (req,res) => {
    try{
        const{email ,password} = req.body;

        if(!email || !password) {
            return res.status(400).json({error :"plz filled the data"});
        }

        const userLogin = await Faculty.findOne({email:email});

        //console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            const token = await userLogin.generateAuthToken();
            //console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error: "Invalid "});
            }else{
                res.json({message:"user Login Successfully"});
            }
        }else{
            res.status(400).json({error: "Invalid "});

        }
       
    }
    catch(err){
        console.log(err);
    }
});

// router.get('/Login', authentication,(req,res) => {
//     console.log('hello my Login');
//     res.send(req.rootUser);
// });


router.post('/FeedBack',async (req,res)=>{
    const {Fname,semester , name , enrollment, branch,DESCIPLINE ,COMMUNICATION ,PUNCTUALITY ,LEADERSHIP ,EDUCATIONAL_PROGRESS }=req.body;
    
    if(!Fname ||  !semester || !name  || !enrollment || !branch ||  !DESCIPLINE||  !COMMUNICATION||  !PUNCTUALITY||  !LEADERSHIP||  !EDUCATIONAL_PROGRESS){
        return res.status(422).json({error:"plz fill all the field properly"});
    }

    try{
        const FExist = await Faculty.findOne({name:Fname})
        if(!FExist){
            return res.status(422).json({error : "Faculty does not exists"});
        }

        const SExist = await STUDENT.findOne({enrollment:enrollment})
        if(!SExist){
            return res.status(422).json({error : "Student does not exists"});
        }
        if(SExist.name!=name)
        {
            return res.status(422).json({error : "Student does not exists"});

        }

        const SSExist = await STUDENT.findOne({name:name})
        if(!SSExist){
            return res.status(422).json({error : "Student does not exists"});
        }

        const userExist = await FEEDBACK.findOne({enrollment:enrollment})
        if(userExist){
            return res.status(422).json({error : "FeedBack already Registered"});
            
        }
        
            const user =new FEEDBACK({Fname , semester, name, enrollment , branch, DESCIPLINE ,COMMUNICATION ,PUNCTUALITY ,LEADERSHIP ,EDUCATIONAL_PROGRESS });

            await user.save();

            res.status(201).json({message: "FeedBack registered successfully"});
        
        
        
    }catch (err) {
        console.log(err);
    }
    
});
router.get("/stuli",async(req,res)=>{
    try{
        const fuser = await FEEDBACK.find({})
        res.send({status:"ok",data:fuser})
    }
    catch(err){
        console.log(err);
    }
})
router.get("/original",async(req,res)=>{
    try{
        const fuser = await STUDENT.find({})
        res.send({status:"ok",data:fuser})
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;