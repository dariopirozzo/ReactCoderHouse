import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../Items/itemList";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../fireBase/config";

export const Items = () => {

  const {loading, setLoading} = useContext(UIContext);
  const { catId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true)
const db = getFirestore()
const productos = db.collection('productos')

if (catId){
  const filtrado = productos.where('category','==',catId)
  filtrado.get()
  .then((response) => {
    const data = response.docs.map((doc)=> ({...doc.data(), id: doc.id}))
    setData(data)
  })
  .finally(()=>{setLoading(false)})
} else {
  
  productos.get().then((response)=>{
    const data = response.docs.map((doc)=> ({...doc.data(), id: doc.id}))
    
    setData(data)
  })
  .finally(()=>{setLoading(false)})
}

  }, [catId]);

  return <>{loading ? <p>loading..</p> : <ItemList data={data} />}</>;
};
