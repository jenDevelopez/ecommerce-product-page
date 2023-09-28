import { ProductStore } from "../assets/store/ProductStore"


function CartItems() {
  const cart = ProductStore(state => state.cart)
  const deleteItem = ProductStore(state => state.deleteItem)
  const total = ProductStore(state => state.totalPrice)
  return (
    <>
      {cart.map((item,index) => (
        <div key={index} className="px-4 pb-4">
          <div className="flex p-4 justify-between gap-4 h-1/2">
            <img className="w-16" src={item.image} alt="" />
            <div>
              <p className="text-gray-400 text-sm mb-2">
                {item.name}
              </p>
              <p className="text-gray-400">
                ${item.price} x {item.quantity}
                <span className="text-black font-bold"> ${total}</span>
              </p>
            </div>
            <button onClick={() => deleteItem(item.name)}>
              <img src="/public/images/icon-delete.svg" alt="delete icon" />
            </button>
          </div>
          <button className="bg-[#FF7D1B] text-white w-full p-4 font-semibold mt-2 rounded-lg">Checkout</button>
        </div>
      ))}
    </>



  )
}

export default CartItems   