import { ProductStore } from "../../store/ProductStore"


function BurgerButton() {
  const { open, setOpen } = ProductStore()
  return (
    <button className="absolute top-[6.3%]  z-10 md:hidden " onClick={() => setOpen(!open)}>
      {open ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#69707D" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      ) : (
        <img src="../images/icon-menu.svg" alt="burger menu icon " />
      )}

    </button>
  )
}

export default BurgerButton