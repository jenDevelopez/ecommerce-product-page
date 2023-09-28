import { ProductStore } from "../assets/store/ProductStore"



export default function Counter() {
  const quantity = ProductStore(state => state.quantity)
  const subQuantity = ProductStore(state => state.subQuantity)
  const addQuantity = ProductStore(state => state.addQuantity)

  console.log(quantity)
  return (
    <div className="w-full border p-4 flex justify-between items-center bg-gray-100 rounded-lg h-12 lg:w-1/2">
      <button onClick={subQuantity}>
        <img className="w-4" src="/public/images/icon-minus.svg" alt="" />
      </button>
      <span className="text-xl">{quantity}</span>
      <button onClick={addQuantity}>
        <img className="w-4" src="/public/images/icon-plus.svg" alt="" />
      </button>
    </div>
  )
}
