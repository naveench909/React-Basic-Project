import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()


const intialState = {
  loading:false,
  cart:cartItems,
  total:0,
  amount:0
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState)

  const clearCart = ()=>{
    dispatch({type:"CLEAR_CART"})
  }
  
  const remove = (id)=>{
    dispatch({type:"REMOVE" , payload:id})
  }

  const increase = (id)=>{
    dispatch({type:"INCREASE" , payload:id})
  }

  const decrease = (id)=>{
    dispatch({type:"DECREASE" , payload:id})
  }

  const toggleButton = (id , btn) =>{
    dispatch({type:"TOGGLE_BUTTON" , payload:{id , btn}})
  }

  const fetchData = async ()=>{
    dispatch({type:"LOADING"})
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type:"DISPLAY_ITEM" , payload:cart})
  }

  useEffect(()=>{
    fetchData()
  },[]) 

  useEffect(()=>{
      dispatch({type:"GET_TOTALS"})
  },[state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase, 
        decrease,
        toggleButton
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
