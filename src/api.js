import axios from 'axios'

// to set the base url
const instance = axios.create({
    baseURL:  "http://localhost:3001",
   });

   // fetching the token 
export const setToken = (token) =>{
    instance.defaults.headers.common['Authorization'] = "Bearer "+token;
     localStorage.setItem("TOKEN", token)
}



const token = localStorage.getItem("TOKEN")
if(token)
    setToken(token)

    // call ur backend http://localhost:3001/user/signIn
    export const signin = async (email, password) => {
    try{
        //          await baseurl.httpmethod("url")
        const res = await instance.post("user/signin",{
            email, password
        })
        setToken(res.data.token)
        console.log(res)
        return res 
     
    } catch(e){
        console.log(e)
    }
}
export const getPosts = async () =>{
    try{
        const res = await instance.get("/comment")
        console.log(res)
        return res.data
    } catch(e){
        console.log(e)
        throw e;
    }
}





