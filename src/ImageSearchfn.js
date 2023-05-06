

import React from "react";
import axios from 'axios'
import { useState } from "react";
function ImageSearchfn()
{
const [image,setimage]=useState([])
const [searchText,setText]=useState("")

const getImage=(query)=>{
    const url="https://api.unsplash.com/search/photos?client_id=7DmCTAbYOLv0LzX5eOgWqXPK6Hp5WJPzTPnRmahKHzo&page=1&query="+query    
    axios.get(url).then((res)=>setimage(res.data.results))
    .catch((err)=>console.log(err))
}

const handleSearch=(event)=>{
    console.log(event.target.value)
    setText(event.target.value)
   //console.log(this.state.serachtext)
}

const handlersubmited=(event)=>{
    console.log("function called");
    event.preventDefault();
        getImage(searchText)
}

return(<>
    <form onSubmit={handlersubmited}>
        <input type="text" onChange={handleSearch}></input>
        <input type="submit" value="serach"></input>
    </form>
     {image.map((img)=>
<img src={img.urls.small_s3}>
</img>
    
) }</>)

}


export default ImageSearchfn;

