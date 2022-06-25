import React from 'react'
import { useContext } from 'react'

export default function Cart() {

  const {cart} = useContext(CartContext)

  return (
    <div>Cart</div>
  )
}
