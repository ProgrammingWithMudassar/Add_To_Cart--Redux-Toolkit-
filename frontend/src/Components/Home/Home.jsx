import React from 'react'
import './Home.css';
import { useGetAllProductsQuery } from '../../Feature/ProductAPI.js'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../../Feature/CartSlice.js'
import { useNavigate } from "react-router";



const Cart = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const HanldeAddToCart = (product)=>{
    dispatch(addToCart(product));
    navigate('/cart')
  }

  return (
    <div className='container'>
      {isLoading ?
        (
          <p>Loading...</p>
        ) : error ?
          (
            <p>An error ocured...</p>
          ) : (
            <>
              <div className="cart">
                <h2>New Arrivals</h2>
                <div className="products">
                  {
                    data?.map((product)=>(
                      <div key={data.id} className="product">
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} />
                        <div className="details">
                          <span>{product.desc}</span>
                          <span className='price'>${product.price}</span>
                        </div>
                        <button className='btn' onClick={()=>HanldeAddToCart(product)}>Add To Cart</button>
                      </div>
                    ))
                  }
                </div>
              </div> 
            </>
          )}
    </div>
  )
}

export default Cart
