import React,{Component} from "react"
import "../styles/header.css"

export default class Header extends Component{
    render=()=>{
        return(
            <React.Fragment>
                <div id="top">
                    Welcome to our Task Website
                </div>
            </React.Fragment>
        )
    }
}