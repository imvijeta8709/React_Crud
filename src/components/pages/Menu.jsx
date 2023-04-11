import React,{Component} from "react";
import "../styles/menu.css"

export default class Menu extends Component{
    render=()=>{
        return(
            <React.Fragment>
                <div id="menublock">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#register">Registration</a></li>
                        <li><a href="#profile">Profile</a></li>
                        <li><a href="#login">Login</a></li>
                        
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}