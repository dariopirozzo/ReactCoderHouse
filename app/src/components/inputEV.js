import React, {useState} from "react";

export const InputEV=()=>{

const [values, setValues] = useState({

nombre:'',
apellido:'',
email:'',
})
const handelInputChange =(e)=>{
setValues({
    ...values,
    [e.target.name]: e.target.value
})

}
}