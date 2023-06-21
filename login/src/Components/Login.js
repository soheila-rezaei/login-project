import React, {useState,useEffect} from 'react';
import {validation} from "./validation";
import {notify} from "./toast";
import {Link} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Signin.module.css";

const Signin = () => {
    const [data,setData]=useState({

        email:"",
        password:"",

    })
    const changeHandler=event=>{

            setData({...data, [event.target.name]:event.target.value})
        }

    const [errors,setErrors]=useState({});
    const [touch,setTouch]=useState({});

    const focusHandler=event=>{
        setTouch({...touch,[event.target.name]:true})
    }
    const submitHandler=event=>{

        event.preventDefault();
        if (!Object.keys(errors).length){
            notify("you log-in  successfully","success")
        }else{
            notify("invalid data","error")
            setTouch({

                email:true,
                password:true,

            })
        }
    }

    useEffect(()=>{
        setErrors(validation (data,"login"))
    },[data,touch]);


    return (
        <div className={styles.container}>
            <form  onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>LogIn</h2>

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

                <div className={styles.formButtons}>
                    <Link  to="/signin">SignUp</Link>
                    <button type="submit">LogIn</button>
                </div>
                <ToastContainer/>

            </form>

        </div>
    );
};

export default Signin;