import Avatar from './Avatar'
import CartButton from './Buttons/CartButton'

export default function DesktopNav() {
  return (
    <nav className='w-3/4'>
      <div>
        <img src="/logo.sv" alt="logo" />
      </div>
      <ul>
        <li><a href="">Collections</a></li>
        <li><a href="">Men</a></li>
        <li><a href="">Women</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div>
        <CartButton />
        <Avatar />
      </div>
    </nav>
  )
}
