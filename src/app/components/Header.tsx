import { FiTwitter } from 'react-icons/fi'
import { FaFacebook, FaMedium } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { BsGraphUpArrow } from 'react-icons/bs'

export function Header() {
  return (
    <header className="flex flex-row sm:flex-row sm:justify-between justify-between sm:items-center max-w-large mx-auto  sm:pt-8">
      <ul className="flex justify-between  w-full sm:w-auto  sm:gap-6 order-3 sm:order-1  sm:static fixed bottom-4">
        <li>
          <FiTwitter color="#02B15A" className="h-5 w-5" />
        </li>
        <li>
          <FaMedium color="#02B15A" className="h-5 w-5" />
        </li>
        <li>
          <FaFacebook color="#02B15A" className="h-5 w-5" />
        </li>
      </ul>

      <div className="flex items-center gap-3 order-2">
        <BsGraphUpArrow className="text-green300 h-6 w-6" />
        <p className="text-white font-semibold text-2xl tracking-wide">
          Finance
        </p>
      </div>

      <HiBars3BottomRight
        color="#02B15A"
        className="h-8 w-8  order-1 sm:order-3 fixed sm:static top-4 right-4"
      />
    </header>
  )
}
