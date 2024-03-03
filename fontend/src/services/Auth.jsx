import { baseUrl } from "./services"


export const Auth =async()=>{
    try{
        const data = await fetch(baseUrl+"validAuth",{
            method: "GET",
            credentials:"include"
        })
        return data.status
    }catch(error){
        console.log(error)
    }
}