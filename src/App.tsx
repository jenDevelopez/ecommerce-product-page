import { ProductStore } from "./store/ProductStore"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"
import { useEffect } from "react"


function App() {
  const seeCart = ProductStore(state => state.seeCart)

  const cart = ProductStore(state => state.cart)

  useEffect(() => {
    console.log(cart)
  },[cart])

  return (
    <div className={` h-screen lg:px-36 `}>
      <Navbar />
      <ProductCard />
      {seeCart && (
        <Cart />
      )}
    </div>
  )
}

export default App