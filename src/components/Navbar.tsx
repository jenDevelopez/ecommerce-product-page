import BurgerButton from './Buttons/BurgerButton'
import CartButton from './Buttons/CartButton'
import Avatar from './Avatar'
import { ProductStore } from '../assets/store/ProductStore'


function Navbar() {
  const { open,quantity } = ProductStore()
  
  const units = (quantity > 0) ? quantity : ''
  return (
    <>
      <div className='py-5 border-b flex justify-between items-center'>
        <div className='p-4 flex items-center justify-between gap-4 lg:p0'>
          
            <BurgerButton />
          
          <div>
            <img className='ml-6' src="/public/images/logo.svg" alt="" />
          </div>
          
          <nav className=" hidden md:block">
          <ul className="flex flex-row items-center gap-2 text-gray-400">
            <li className="font-semibold text-lg"><a href="#">Collections</a></li>
            <li className="font-semibold text-lg"><a href="#">Men</a></li>
            <li className="font-semibold text-lg"><a href="#">Women</a></li>
            <li className="font-semibold text-lg"><a href="3">About</a></li>
            <li className="font-semibold text-lg"><a href="#">Contact</a></li>
          </ul>
        </nav>

        </div>
        <div className='flex justify-between gap-5 lg:mr-6'>
          <CartButton />
          <p className={`
          w-[20px] h-[15px] rounded-xl  text-sm flex justify-center items-center text-white font-bold absolute right-[4.7rem] top-6
          ${quantity > 0 ? 'bg-[#FF7D1B]': 'bg-transparent'}
          `}>{units}</p>
          <Avatar />
        </div>
      </div>
      <div
          className={`bg-white flex flex-col justify-start items-start fixed top-0 w-4/6 h-full z-[9] ${
            open ? "left-0" : "left-[-100%]"
          } ease-linear duration-300  
      `}
        >
        
        <nav className="mt-20 h-[30%] border border-white pl-5">
          <ul className="h-full flex flex-col justify-around">
            <li className="font-bold text-lg"><a href="#">Collections</a></li>
            <li className="font-bold text-lg"><a href="#">Men</a></li>
            <li className="font-bold text-lg"><a href="#">Women</a></li>
            <li className="font-bold text-lg"><a href="3">About</a></li>
            <li className="font-bold text-lg"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

    </>

  )
}

export default Navbar