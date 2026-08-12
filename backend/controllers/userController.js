import fs from "fs"

export const getUser=(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));

    const user=data.users.find((user)=>user.id===req.params.id);

    res.json(user);
}