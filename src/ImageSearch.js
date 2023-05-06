import React from "react";
import axios from 'axios'
import Imagedisplay from "./Imagedisplay";
class ImageSearch extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={image:[],serachtext:""}

    }
    /*componentDidMount()
    {
        const url="https://api.unsplash.com/search/photos?client_id=7DmCTAbYOLv0LzX5eOgWqXPK6Hp5WJPzTPnRmahKHzo&page=1&query=bus"
        axios.get(url).then((res)=>this.setState({image:res.data.results}))
        .catch((err)=>console.log(err))
    }*/
   getImage=(query)=>{
        const url="https://api.unsplash.com/search/photos?client_id=7DmCTAbYOLv0LzX5eOgWqXPK6Hp5WJPzTPnRmahKHzo&page=1&query="+query
        axios.get(url).then((res)=>this.setState({image:res.data.results}))
        .catch((err)=>console.log(err))       
    }
    handleSearch=(event)=>{
        console.log(event.target.value)
        this.setState({serachtext:event.target.value})
    }        
    handlersubmited=(event)=>{
        console.log("function called");
        event.preventDefault();
        this.getImage(this.state.serachtext)
    }
    render()
    {
        return(
            <>            
                <form onSubmit={this.handlersubmited}>
                    <input type="text" onChange={this.handleSearch}></input>
                    <input type="submit" value="serach"></input>                   
                </form>
                {this.state.image.map((img)=>
                <Imagedisplay src={img.urls.small_s3} des={img.alt_description}>                    
                </Imagedisplay>)

            }            
            </>
        )
    }
}
export default ImageSearch;
