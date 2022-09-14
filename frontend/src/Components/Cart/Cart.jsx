import React,{useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './Cart.css'
import Table from 'react-bootstrap/Table';
import { removeFromCart, decreaseProductCart,addToCart, clearCart, getTotals } from '../../Feature/CartSlice';

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTotals())
  },[cart, dispatch])

  const HandleRemoveProduct = (cartItem)=>{
    dispatch(removeFromCart(cartItem))
  }

  const handleDecreaseProduct = (cartItem)=>{
    dispatch(decreaseProductCart(cartItem))
  }

  const handleIncreaseProduct =(cartItem)=>{
    dispatch(addToCart(cartItem))
  }

  const HandleCartClear =()=>{
    dispatch(clearCart())
  }
  return (
    <div className="container cart-container">
      <div className="cart-container">
        <h2 className='cart-heading'>Shopping Cart</h2>
        {
          cart.cartItem.length === 0 ? (
            <div className="cart-empty">
              <h4>cart is empty</h4>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                <div className="start-shopping">
                  <h5>{"<-- "} Start Shopping</h5>
                </div>
              </Link>
            </div>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr className='cart-table-heading-row'>
                  <th>Product</th>
                  <th>Details</th>
                  <th>Quantity</th>
                  <th>Number of products</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr> 
              </thead>
              {
                cart.cartItem?.map((cartItem) => {
                  return (
                    <tbody>
                      <tr key={cartItem.id} className="cart-row">

                        <td><img src={cartItem.image} alt="" style={{ width: "100px" }} /></td>
                        <td>
                          <div className="details">
                            <h5>{cartItem.desc}</h5>
                            ${cartItem.price}
                          </div>
                        </td>
                        <td>
                          <div className="cart-btn">
                            <div className="cart-product-quantity">
                              <button onClick={()=>handleDecreaseProduct(cartItem)}> - </button>
                              <div className="count">{cartItem.cartQuantity}</div>
                              <button onClick={()=>handleIncreaseProduct(cartItem)}> + </button>
                            </div>
                          </div>
                        </td>
                        <td>{cartItem.cartQuantity}</td>
                        <td>${cartItem.price * cartItem.cartQuantity}</td>
                        <td><button className='remove' onClick={()=>HandleRemoveProduct(cartItem)}>Remove</button></td>
                      </tr>
                    </tbody>
                  )
                })
              }
            </Table>
          )}
      </div>
      <div className="cart-summary">
        <button onClick={()=>HandleCartClear()}>
          <div className="clear-products">
            Clear Cart
          </div>
        </button>
        <div className="cart-bill">
          <div className="cart-subtotal">
            <h5>Subtotal</h5>
                  <h5>${cart.cartTotalAmount}</h5>
          </div>
          <p className='cart-bill-text'>Texes and shipping calculated checkout</p>
          <button >Check Out</button>
          <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
            <h6 className='cart-bill-h6'>Countinue Shopping</h6>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart