import { ProductStore } from "../../assets/store/ProductStore"


function BurgerButton() {
  const {open,setOpen} = ProductStore()
  return (
    <button className="absolute top-[6.3%]  z-10 md:hidden " onClick={() => setOpen(!open)}>
      {open ? (
          <img src="/public/images/icon-close.svg" alt="close menu icon" />
      ):(
        <img src="/public/images/icon-menu.svg" alt="burger menu icon " />
      )}
      
    </button>
  )
}

export default BurgerButton