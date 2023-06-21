import React from 'react';
import styles from "./App.module.css"

import Signin from "./Components/Signin";
import Login from "./Components/Login";
import {Route,Routes,Navigate} from "react-router-dom";


const App = () => {
    return (
        <div className={styles.container}>

            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/" element={<Navigate to="/signin" />}/>
            </Routes>
        </div>
    );
};

export default App;