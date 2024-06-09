import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [products,setproduct]=useState([])
  const [cart,setcart]=useState(0)

  useEffect(()=>{
    async function fetchdata()
    {
      const result =await axios.get("https://dummyjson.com/products")
        setproduct(result.data.products)
    }
    fetchdata()
  },[]);

  function add(){
    setcart(cart+1)
  }





  return (
    <>
    <header className='nav'>
      <h1>UseReducer</h1>
      <div className="cart">
      <p>CART</p>
      <span >{cart}</span>
      </div>
    </header>
    <div className="products">
      {products.map((e)=>{
        return <div className="product">
          <img src={e.thumbnail}></img>
          <h1>{e.title}</h1>
          <p>$ {e.price}</p>
          <button onClick={add}>ADD to cart</button>
        </div>;
      })}

    </div>
    </>
  )
}

export default App