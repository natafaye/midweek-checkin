import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllProducts } from '../features/products/productSlice'
import { addToShoppingCart } from '../features/shopping-cart/cartSlice';

export default function ProductsPage() {
  const productsList = useSelector(selectAllProducts)
  const dispatch = useDispatch();

  const addToCart = (product) => {
    // tell redux to call addToCart reducer and put the product in the action.payload
    dispatch(addToShoppingCart(product)) 
  }

  return (
    <div>
      { productsList.map(product => (
        <div className="bg-light p-3 m-3" key={product.id}>
          { product.name }<br/>
          { product.price }<br/>
          <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}
