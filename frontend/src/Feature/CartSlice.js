import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItem: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.info(`"${state.cartItem[itemIndex].name}" Quantity Increased`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
        toast.success(`"${action.payload.name}" Added in Card`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    removeFromCart(state, action) {
      const nextCartItem = state.cartItem.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItem = nextCartItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
      toast.error(`"${action.payload.name}" Remove from Card`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    decreaseProductCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
        toast.info(`"${state.cartItem[itemIndex].name}" Quantity decreased`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const nextCartItem = state.cartItem.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItem = nextCartItem;
        toast.error(`"${action.payload.name}" Remove from Card`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    clearCart(state, action) {
      state.cartItem = [];
      toast.error(`Card Cleared`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    getTotals(state, action) {
        let { total, quantity } = state.cartItem.reduce(
          (cartTotal, cartItem) => {
            const { price, cartQuantity } = cartItem;
            const itemTotal = price * cartQuantity;
  
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
  
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      },
  },
});

export const { addToCart, removeFromCart, decreaseProductCart, clearCart, getTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
