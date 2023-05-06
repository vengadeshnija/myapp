import { useEffect, useState } from "react"
import {getPosts} from './api' 
const Posts = () => {
    const [posts, setPosts] = useState([])
useEffect(()=>{
        async function init(){
            try{
                console.log("post is called")
                const posts = await getPosts()
                setPosts(posts)
            } 
            catch(e){
                console.log(e)
            }
        }   
        init()
    },[])
 return (
        <>
        {
            posts.map((post)=>{
                return (
                    <div class="card">
                        <div class="card-body">
                            <p>{post.comment}</p>
                            <small>{post.author.name}</small>
                        </div>
                    </div>
                ) 
            })
        }
        </>
    )
}

export default Posts;