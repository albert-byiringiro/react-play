import React from 'react'
import ShoppingCart from './Hooks/useState/shoppingCart/ShoppingCart'

export default function App() {
  const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
  }, {
    id: 1,
    name: 'Cheese',
    count: 5,
  }, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  }];
  return (
    <ShoppingCart />
  )
}
