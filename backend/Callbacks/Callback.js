import products from '../Products.js'
import bcrypt from 'bcrypt';
import userModel from '../Model/Model.js'
import jsonWebToken from '../utils/JWT.js';


//Register API
export const Register = async (req,res)=>{
    const { name , email , password } = req.body;
    try {
        let  oldUser = await userModel.findOne({ email });
        if(oldUser) res.status(400).json({ message: "User is already exist...!!!"}); 
        const HashPassword = await bcrypt.hash(password, 10);
        const savedUserData = await userModel.create({
            name, 
            email,
            password : HashPassword
        });        
        const token = jsonWebToken(savedUserData)
        res.status(200).json({savedUserData, token})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Login API
export const Login = async (req,res)=>{
    try {
        const {email} = req.body;
    const user = await userModel.findOne({ email });
    if(!user) res.status(400).send({message : "Invailed Email and Password...!"});

    let passwordValid =   bcrypt.compare(req.body.password, userModel.password)
    if(!passwordValid) res.status(400).send("invalid Email and Password...!")
    const token = jsonWebToken(user);
    res.status(200).send({message:"Credational matched successfuly.",Token : token})
    } catch (error) {
        res.status(500).send("something went wrong")
    }
}



export const Product = (req,res)=>{
    res.send(products);
}