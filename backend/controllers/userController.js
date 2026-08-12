import fs from "fs"
import crypto from "crypto";

export const getUser=(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));

    const user=data.users.find((user)=>user.id===req.params.id);

    res.json(user);
}

export const createUser=(req,res)=>{

    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));

    const newUser={

        ...req.body,
        id:crypto.randomUUID(),
        balance: 0,
        completed: 0,
        totalearned: 0,
        completedOffers: []
    };

     data.users.push(newUser);

     fs.writeFileSync(
        './db.json', JSON.stringify(data,null,2)
     );

     res.status(201).json(newUser);
}

export const loginUser=(req,res)=>{

    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));

    const {email,password}=req.body;

    const user=data.users.find((user)=>user.email===email && user.password==password);

    if(!user){
        return res.status(401).json({message:"Invalid email or password"});
    }

    res.json(user);
}