import { ProductStore } from "../../assets/store/ProductStore"




function CartButton() {
  const {setSeeCart,seeCart} = ProductStore()
  return (
    <button onClick={() => setSeeCart(!seeCart)}>
      <img src="/public/images/icon-cart.svg" alt="cart icon" />
    </button>
  )
}

export default CartButton