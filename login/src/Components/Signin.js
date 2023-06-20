import React, {useState,useEffect} from 'react';
import {validation} from "./validation";

const Signin = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:"false",
    })
    const changeHandler=event=>{
       if (event.target.name==="isAccepted"){
           setData({...data,[event.target.name]:event.target.checked})
       }else{
           setData({...data, [event.target.name]:event.target.value})
       }
    }
    const [errors,setErrors]=useState({});
    useEffect(()=>{
        setErrors(validation(data))
        console.log(errors)
    },[data]);


    return (
        <div>
            <form action="">
                <div>
                    <label>Please Enter Your Name</label>
                    <input type="text" value={data.name} name="name" onChange={changeHandler}/>
                </div>
                <div>
                    <label>  Please Enter Your Email</label>
                    <input type="text" value={data.email} name="email" onChange={changeHandler}/>
                </div>
                <div>
                    <label>  Please Enter Your Password</label>
                    <input type="password" value={data.password} name="password" onChange={changeHandler}/>
                </div>
                <div>
                    <label>  Please Enter Your ConfirmPassword</label>
                    <input type="password" value={data.confirmPassword} name="confirmPassword" onChange={changeHandler}/>
                </div>
                <div>
                    <label> I Accept All Terms Of Privacy</label>
                    <input type="checkbox" value={data.isAccepted} name="isAccepted" onChange={changeHandler}/>
                </div>
                <div>
                    <a href="#">LogIn</a>
                    <button type="submit">SignUp</button>
                </div>

            </form>

        </div>
    );
};

export default Signin;