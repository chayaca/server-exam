const users = require('../model/user');
const user=require('../model/user');
const jwt=require('jsonwebtoken');

const createUser =(req,res)=>{
    const newUser=new user(req.body)
    console.log(newUser)
    newUser.save().then(
        (data)=>{
            res.status(200).json({user:data})
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
}

// const checkPermission=(req,res)=>{
//     user.findOne({password:req.body.password,email:req.body.email}).then(
//         (user)=>{
//             let token=jwt.sign(req.body.password+req.body.email,process.env.SECRET);
//             if(user){
//                 if(user.email === `admin@users.com` && user.password === `admin@765`){
//                     res.status(200).json({jwt:token,tafkid:'management',user:user})
//                 }
//                 else{
//                     res.status(200).json({jwt:token,tafkid:'employe',user:user})
//                 }
//             }
//             else{
//                 res.status(404).json({massage:'not found'})
//             }
//         }
//     )
// }

const getAllusers = (req, res)=>{
    user.find({}).then(
        (users)=>{
            res.status(200).json({users})
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
}

const getUserById=(req,res)=>{
    user.findById(req.params.id).then(
        (user)=>{
            res.status(200).json({user})
        }
    ).catch((err)=>{
        console.log(err)
    })
}

// const updateuser=(req,res)=>{
//     user.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(
        
//             (user)=>{
//                 res.status(200).json({user})
//             }
        
//     ).catch((err)=>{
//         console.log(err)
//     })
// }

module.exports={createUser, getAllusers,getUserById,}