import { ProductStore } from "../store/ProductStore"
import CartItems from "./CartItems"


function Cart() {
  const cart = ProductStore(state => state.cart)

  return (

    <div className="w-[95%] rounded-lg fixed top-[12%] bg-white m-2 pb-4 border z-0 sm:w-1/2 sm:right-0 lg:w-[25%] lg:right-20 lg:top-20">
      <div className="border-b border-gray-200 p-4">
        <h1 className="text-md text-black font-bold">Cart</h1>
      </div>
      {cart.length === 0 ? (
        <div className="grid place-items-center h-full">
          <p className="text-lg text-gray-300">Your Cart is empty</p>
        </div>
      ) : (
        <CartItems />
      )}
      {cart.length > 0 && (
        <div className="w-full   flex justify-center">
          <button className="bg-[#FF7D1B] text-white w-[90%]  p-4 font-semibold mt-2 rounded-lg">Checkout</button>
        </div>
      )}



    </div>




  )
}

export default Cart