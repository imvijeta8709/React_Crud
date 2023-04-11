import React,{Component} from "react"

export default class Home extends Component{
    render=()=>{
        return(
            <React.Fragment>
                <h1 style={{paddingTop:"150px",fontSize:"55px",fontFamily:"algerian",textAlign:"center",textShadow:"2px 2px 10px black"}}>
                    Welcome to our Home Page 🙂</h1>
                    <center><progress style={{height:"40px",width:"40%"}}></progress></center>
                    
            </React.Fragment>
        )
    }
}