import { ProductStore } from "./store/ProductStore"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"

function App() {
  const seeCart = ProductStore(state => state.seeCart)


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