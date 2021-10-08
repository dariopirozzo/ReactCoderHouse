import { getFirestore } from "../fireBase/config";
import firebase from 'firebase/app';
import 'firebase/firestore'

 export const generarOrder =(buyer, carrito,)=> {
return new Promise ((resolve, reject) => {

    const db = getFirestore()
    const orders = db.collection('orders')


  const newOrders ={
 buyer : buyer,
 items: carrito,
 total: carrito.reduce((acc, prod)=> acc + prod.precio * prod.cantidad,0),
 date: firebase.firestore.Timestamp.fromDate(new Date())
  }
 carrito.forEach((prod)=>{
     const docRef = db.collection('productos').doc(prod.id)
     docRef.get()
     .then(doc =>{

         const actualizar = docRef.update({
           stock: doc.data().stock - prod.cantidad
         })
         
     })
 })

orders.add(newOrders)
     .then((res) => {
         resolve(res.id)
     })
     .catch((err)=>{
         reject(err)
     })
})
 }