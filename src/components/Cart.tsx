import { ProductStore } from "../assets/store/ProductStore"
import CartItems from "./CartItems"


function Cart() {
  const cart = ProductStore(state => state.cart)
  console.log(cart.length)

  return (
    
      <div className="w-[95%] rounded-lg fixed top-[12%] bg-white m-2 h-[35%] border z-0">
        <div className="border-b border-gray-200 p-4">
          <h1 className="text-md text-black font-bold">Cart</h1>
        </div>
        {cart.length === 0 ? (
          <div className="grid place-items-center h-full">
            <p className="text-lg text-gray-300">Your Cart is empty</p>
          </div>
        ): (
          <CartItems />
        )}
        
      </div>
    



  )
}

export default Cart