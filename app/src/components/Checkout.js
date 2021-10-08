import React,{useState}  from "react";
import { useContext } from "react";
import { unContext } from "../context/unContext";
import 'firebase/firestore'
import { generarOrder } from "../fireBase/generarOrder";
import Swal from 'sweetalert2'


export const Checkout  =()=>{

const {carrito, vaciarCarrito} = useContext(unContext)
const [values, setValues] = useState({

    nombre:'',
    apellido:'',
    email:'',
    })
    const handelInputChange =(e)=>{
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })}

const buyer = {
    nombre :"dario",
    tel: 123123123,
   email: "a@b.com"
     }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (values.nombre.length > 3 && values.email.length >3 && values.apellido.length > 3){
            generarOrder(values,carrito)
             .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'su compra fue registrada',
                    text:      `guarde el identificador : ${res}`,
                    confirmButtonText:'genial!'
                })
                vaciarCarrito()
             })
             .catch(err => alert(err))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'campos invalidos',
                text:      `vuelva a intentarlo`,
                confirmButtonText:'ups!'
            })
        }
    }
    
return (

<div>   
<h2>    checkout</h2>
<hr/>  
{!carrito.length
? <h3>no hay elementos</h3>
:

 <form onSubmit={handleSubmit}>
     <input
     type="text"
     value={values.nombre}
     onChange={handelInputChange}
     name="nombre"
     required
     />   
     <input
     type="text"
     value={values.apellido}
     onChange={handelInputChange}
     name="apellido"
     required
     />   
     <input
     type="text"
     value={values.email}
     onChange={handelInputChange}
     name="email"
     required
     />   
    <button tupe="submit" className="btn btn-primary">  enviar  </button>
 </form>
}

</div>

)

}