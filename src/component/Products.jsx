import axios from 'axios';
import React,{useState,useEffect} from 'react'

const Products = () => {
    const [products,setProducts]=useState([]);

    const fetchData=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products")
        const data=await response.data;
        console.log(data)
        setProducts(data);
    }
 

    useEffect(()=>{
        fetchData();

    },[])

  return (
    <div>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
      {
        products.map((item)=>{
            return(
<div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" alt="..." width={"200px"} height={"200px"}/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description.slice(0,50)+"..."}</p>
    <a href="#" class="btn btn-primary">{item.price}</a>
  </div>
</div>
            )
        })
    }
    </div>
          </div>
  )
}

export default Products
