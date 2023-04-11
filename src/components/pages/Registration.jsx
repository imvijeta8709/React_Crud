import React,{Component} from "react"
import "../styles/registration.css"
import {redirect} from "../../Router"

export default class Registration extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            course:"",
            dob:"",
            email:"",
            mobile:"",
            college:"",
            address:"",
            password:""
        }
    }

    render=()=>{
        return(
            <React.Fragment>
                <div id="register">
                <h3 style={{textAlign:"center"}}><u>Registration page</u></h3>
                    <form>
                        Name:<br/><input type="text" name="name" placeholder="Enter Your Name..." className="form-control"
                        value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}}/>
                        DOB:<br/><input type="text" name="dob" placeholder="Enter Your DOB..." className="form-control"
                        value={this.state.dob} onChange={(event)=>{this.setState({dob:event.target.value})}}/>
                        Mobile No:<br/><input type="mobile" name="mobile" placeholder="Enter Mobile Number..." className="form-control"
                        value={this.state.mobile} onChange={(event)=>{this.setState({mobile:event.target.value})}}/>
                        Course:<br/><input type="text" name="course" placeholder="Enter Your Course..." className="form-control"
                        value={this.state.course} onChange={(event)=>{this.setState({course:event.target.value})}}/>
                        Email:<br/><input type="email" name="email" placeholder="Enter Your Email..." className="form-control"
                        value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
                        College Name:<br/><input type="text" name="college" placeholder="Enter Your College..." className="form-control"
                        value={this.state.college} onChange={(event)=>{this.setState({college:event.target.value})}}/>
                        Address:<br/><input type="text" name="address" placeholder="Enter Your Address..." className="form-control"
                        value={this.state.address} onChange={(event)=>{this.setState({address:event.target.value})}}/>
                        Password:<br/><input type="password" name="password" placeholder="Enter Your Password..." className="form-control"
                        value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}}/>
                        <button className="text-light btn btn-primary my-2" type="button" onClick={this.saveData}>Register</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

    saveData=()=>{
        alert("User Registered Successfully...!!!")
        let newObject={
            name:this.state.name,
            dob:this.state.dob,
            course:this.state.course,
            email:this.state.email,
            mobile:this.state.mobile,
            college:this.state.college,
            address:this.state.address,
            password:this.state.password
        }

        let promise=fetch("http://localhost:5000/register",{
            headers:{"Content-Type":"application/json"},
            method:"POST",
            body:JSON.stringify(newObject)
        });
        promise.then((response)=>{
            if(response.ok){
                this.setState({
                    name:"",
                    dob:"",
                    course:"",
                    email:"",
                    mobile:"",
                    college:"",
                    address:"",
                    password:""
                })
            }
        }).then((data)=>{
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        });
    }
}