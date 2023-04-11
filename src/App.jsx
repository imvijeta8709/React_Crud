import React,{Component} from "react"
import "./app.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/pages/Header"
import Menu from "./components/pages/Menu"
import Footer from "./components/pages/Footer"
import { route } from "./Router"
import Profile from "./components/pages/Profile"
import Home from "./components/pages/Home"
import Registration from "./components/pages/Registration"
import Login from "./components/pages/Login"
import ModifyData from "./components/pages/ModifyData"

export default class App extends Component{
    constructor(props){
        super(props);
        this.id=window.localStorage.getItem('hash').split('/')[1]
        this.views={
            home:<Home/>,
            login:<Login/>,
            profile:<Profile/>,
            register:<Registration/>,
            ["modifydata/"+this.id]:<ModifyData studentId={this.id}/>
        }
    }


    render=()=>{
        return(
            <div id="outer">
                <Header/>
                <Menu/>
                <div id="middle">
                {this.renderView()}
                </div>
                <Footer/>
            </div>
        )
    }

    renderView=()=>{
        return this.views[route];
    }

}