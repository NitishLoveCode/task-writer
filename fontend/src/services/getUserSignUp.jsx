import { baseUrl } from "./services"


export const getUserSignUp = async(name,email,password)=>{
    console.log(name, email, password)
    try{
        const data = await fetch(baseUrl+"signup-user",{
            method: "POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        })
        return data.json()
    }catch(error){
        console.log(error)
    }
    
}