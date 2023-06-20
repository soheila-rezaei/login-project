import React, {useState,useEffect} from 'react';
import {validation} from "./validation";
import {notify} from "./toast";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Signin.module.css";

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
    const [touch,setTouch]=useState({});

    const focusHandler=event=>{
        setTouch({...touch,[event.target.name]:true})
    }
    const submitHandler=event=>{

        event.preventDefault();
        if (!Object.keys(errors).length){
            notify("you sign in successfully","success")
        }else{
            notify("invalid data","error")
            setTouch({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true
            })
        }
    }

    useEffect(()=>{
        setErrors(validation(data))
    },[data]);


    return (
        <div className={styles.container}>
            <form  onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>SignIn</h2>
                <div className={styles.formFild}>
                    <label>Please Enter Your Name</label>
                    <input className={(errors.name && touch.name)?  styles.uncompleted : styles.formInput}
                        type="text" value={data.name} name="name" onChange={changeHandler}  onFocus={focusHandler}/>
                    {errors.name && touch.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formFild}>
                    <label>  Please Enter Your Email</label>
                    <input   className={(errors.email && touch.email)?  styles.uncompleted : styles.formInput}
                        type="text" value={data.email} name="email" onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email &&  touch.email &&<span>{errors.email}</span>}
                </div>
                <div className={styles.formFild}>
                    <label>  Please Enter Your Password</label>
                    <input   className={(errors.password && touch.password)?  styles.uncompleted : styles.formInput}
                        type="password" value={data.password} name="password" onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && touch.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formFild}>
                    <label>  Please Enter Your ConfirmPassword</label>
                    <input   className={(errors.confirmPassword && touch.confirmPassword)?  styles.uncompleted : styles.formInput}
                        type="password" value={data.confirmPassword} name="confirmPassword" onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.confirmPassword &&  touch.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formFild}>
                    <div className={styles.checkboxContainer}>
                        <label> I Accept All Terms Of Privacy</label>
                        <input type="checkbox" value={data.isAccepted} name="isAccepted" onChange={changeHandler} onFocus={focusHandler}/>
                        {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
                    </div>

                </div>
                <div className={styles.formButtons}>
                    <a href="app">LogIn</a>
                    <button type="submit">SignUp</button>
                </div>
                <ToastContainer/>

            </form>

        </div>
    );
};

export default Signin;