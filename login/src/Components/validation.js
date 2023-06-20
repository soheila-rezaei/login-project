export  const validation=data=>{
    const errors={};

    if (!data.name.trim()){
        errors.name="Please Insert Your FirstName";
    }else{
        delete errors.name;
    }

    if (!data.email){
        errors.email="Please Insert Your Email";
    }else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email))){
        errors.email="Please Enter Valid Email";
    }else {
        delete errors.email;
    }

    if (!data.password){
        errors.password="Enter Your Password"
    }else if (data.password.length <6){
        errors.password="Please Enter More Than 6 Digit " ;
    }else {
        delete errors.password;
    }
    if (!data.confirmPassword){
        errors.confirmPassword="Please Confirm Your Password";
    }else if (data.confirmPassword !== data.password){
        errors.confirmPassword="Password Do Not Match";
    }else {
        delete errors.confirmPassword;
    }

    if (data.isAccepted){
        delete errors.isAccepted;
    }else{
        errors.isAccepted="Please Choose This Item"
    }
    return errors

}