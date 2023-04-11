import React,{Component} from "react"
import "../styles/showdata.css"
import {redirect} from "../../Router"
import config from "../../config/config.json"

export default class ShowData extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            dob:"",
            course:"",
            email:"",
            mobile:"",
            college:"",
            address:"",
            password:"",
            register:[]
        }
       
    }
    
    componentDidMount(){
        let promise=fetch("http://localhost:5000/register");
        promise.then((response)=>{
                return response.json();
        })
        .then((data)=>{
            if(Array.isArray(data)){
                this.setState({
                    register:data
                })
            }
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    render=()=>{
        return(
            <React.Fragment>
                {this.showData()}
            </React.Fragment>
        )
    }
    showData=()=>{
        let Data=JSON.parse(window.localStorage.getItem('info'));
        //console.log(Data[0])
        let item=Data[0];
                 return(
                    <div id="showdata" key={item.id}>
                    <h5 style={{textAlign:"center"}}><u><i>Your Profile</i></u></h5>
                    <div id="profile"><img src="images/user.jpg"/></div>
                    <div id="data">
                    <b>Name:</b> {item.name}<br/>
                    <b>DOB:</b> {item.dob}<br/>
                    <b>Email:</b> {item.email}<br/>
                    <b>Course:</b> {item.course}<br/>
                    <b>College:</b> {item.college}<br/>
                    <b>Address:</b> {item.address}<br/>
                    <button className="m-3 btn btn-primary " type="button"   onClick={()=>{this.modifyData(item.id)}}>Modify</button>
                    </div>              
                    </div>
                )
    }

    modifyData=(id)=>{
        return redirect ('modifydata/'+id);
    }

}