import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromShoppingCart } from '../features/shopping-cart/cartSlice';


// THE REDUX STATE = {
//     products: {
//         entities: [
//             {
//                 id: 0,
//                 name: "Laptop",
//                 price: 500
//             },
//             {
//                 id: 1,
//                 name: "Desktop",
//                 price: 500
//             },
//         ]
//     },
//     cart: {
//         entities: [
//             {
//                 id: 0,
//                 name: "Laptop",
//                 price: 500
//             },
//         ]
//     }
// }

// function selectingFunction(state) {
//     return [
//         {
//             id: 0,
//             name: "Laptop",
//             price: 500
//         },
//     ]
// }

// function useSelector(selectingFunction) { // selectingFunction = state => state.cart.entities
//     return selectingFunction(THE REDUX STATE)
// }

export default function ShoppingCartPage() {
    const cartItems = useSelector(state => state.cart.entities)
    const dispatch = useDispatch();

    const removeFromCart = (cartItemId) => {
        // tell redux to call addToCart reducer and put the cart item id in the action.payload
        dispatch(removeFromShoppingCart(cartItemId)) 
    }

    return (
        <div>
            {cartItems.map(cartItem => (
                <div className="bg-light p-3 m-3 d-flex justify-content-between" key={cartItem.id}>
                    <p>{cartItem.name}</p>
                    <p>{cartItem.price}</p>
                    <button className="btn btn-success" onClick={() => removeFromCart(cartItem.id)}>Remove From Cart</button>
                </div>
            ))}
        </div>
    )
}
