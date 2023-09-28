import { ProductStore } from "../../store/ProductStore"




function CartButton() {
  const {setSeeCart,seeCart} = ProductStore()
  return (
    <button onClick={() => setSeeCart(!seeCart)}>
      <img src="../images/icon-cart.svg" alt="cart icon" />
    </button>
  )
}

export default CartButton