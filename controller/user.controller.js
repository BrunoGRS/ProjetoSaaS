import User from "../database/use.model.js"
import jwt from "jwt";

export async function register(req,res){
    const { name, email, senha } = req.body

    try {
        const userExists = await User.findOnde({email})

        if(userExists){
            return res.status(409).json({message:"Usuário já existe"});
        }

        const user = await User.create({
            name,
            email,
            senha
        })

        return res.status(201).json({message:{user}});

    } catch (error) {
        return res.status(500).json({message:"Erro de Servidor"})
    }
}

export async function login(req,res){
    const {email, senha} = req.body

    try {
        
        const user = await User.findOne({email});


        if(!user){
            return res.status(401).json({message:"Usuário não logado"});
        }

        const token = jwt.sign({id: user._id}, 'QS', {
            expiresIn: '1h'
        });

        return res.status(200).json({token});
    
    } catch (error) {
        
    }
}