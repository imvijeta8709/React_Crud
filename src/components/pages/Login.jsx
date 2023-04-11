import React,{Component} from "react"
import "../styles/login.css"
import {redirect} from "../../Router"

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            userdata:[],
            loginuser:{}
        }
    }

   


    render=()=>{
        return(
            <React.Fragment>
                <div id="login">
                <h3 style={{textAlign:"center"}}><u>Login Here..</u></h3>
                    <form>
                        UserName:<br/><input type="email" name="email" placeholder="Enter email or UserName..." className="form-control"
                        value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>

                        Password:<br/><input type="password" name="password" placeholder="Type Password Here..." className="form-control"
                        value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}}/>
                        <input type="button" className="text-light btn btn-primary mt-2 form-control" onClick={this.saveInfo} value="Login" /><br/>
                        <center>
                            or<br/><a href="/#register">Register</a>
                        </center>
                    </form>
                </div>
            </React.Fragment>
        )
    }

    
    componentDidMount() {
        let promise = fetch("http://localhost:5000/register").then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((data) => {
                if(Array.isArray(data)){
                    this.setState({userdata:data})
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    

    saveInfo=()=>{
        let u1=this.state.userdata.filter((user)=>{
            return this.state.email==user.email && this.state.password==user.password
        });
        let Data=window.localStorage.setItem("info",JSON.stringify(u1))            
        console.log(Data)

        if(u1.length>0)
        {
            this.setState({loginuser:{...u1[0]}})
            if(this.state.userdata.email==this.state.loginuser.email && this.state.userdata.password==this.state.loginuser.password){
                let newObject={
                    email:this.state.email,
                    password:this.state.password
                    }
            
                    let promise=fetch("http://localhost:5001/login",{
                        headers:{"Content-Type":"application/json"},
                        method:"POST",
                        body:JSON.stringify(newObject)
                    });
                    promise.then((response)=>{
                        if(response.ok){
                            this.setState({
                                email:"",
                                password:""
                            })
                        }
                    }).then((data)=>{
                        console.log(data);
                    }).catch((error)=>{
                        console.log(error);
                    });
                return redirect('profile')  ;  
            }
        }
        else{
            alert("This Email and Password is not Exist.. Firstly Please Registered "); 
            this.setState({
                email:"",
                password:"",
            }) 
        }
    }
}