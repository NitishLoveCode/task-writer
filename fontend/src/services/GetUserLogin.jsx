import { baseUrl } from "./services"


export const getUserLogin = async(email,password)=>{
    console.log(email, password)
    try{
        const data = await fetch(baseUrl+"login-user",{
            method: "POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        return data.json()
    }catch(error){
        console.log(error)
    }
    
}