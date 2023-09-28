import { ProductStore } from "../store/ProductStore"


function OpenMenuNavbar() {
  const setOpen = ProductStore(state => state.setOpen)
  return (
    <div className="w-[65%] h-screen bg-blue-500 absolute top-0 p-5">
      <button onClick={() => setOpen(false)}>
        <img src="/public/images/icon-close.svg" alt="" />
      </button>
      <nav className="mt-20 h-[30%] border border-white ">
        <ul className="h-full flex flex-col justify-around">
          <li className="font-bold text-lg"><a href="#">Collections</a></li>
          <li className="font-bold text-lg"><a href="#">Men</a></li>
          <li className="font-bold text-lg"><a href="#">Women</a></li>
          <li className="font-bold text-lg"><a href="3">About</a></li>
          <li className="font-bold text-lg"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default OpenMenuNavbar