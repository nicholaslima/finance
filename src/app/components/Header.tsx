import { FiTwitter } from 'react-icons/fi'
import { FaFacebook, FaMedium } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { HiBars3BottomRight } from 'react-icons/hi2'

export function Header() {
  return (
    <header className="flex flex-row sm:flex-row sm:justify-between sm:items-center max-w-web  mx-auto sm:px-4 pt-4 sm:pt-16">
      <ul className="flex justify-around w-full sm:w-auto  sm:gap-6 order-3 sm:order-1  sm:ml-3 ml-0  sm:static fixed bottom-4">
        <li>
          <FiTwitter color="#02B15A" className="h-7 w-7" />
        </li>
        <li>
          <FaMedium color="#02B15A" className="h-7 w-7" />
        </li>
        <li>
          <FaFacebook color="#02B15A" className="h-7 w-7" />
        </li>
      </ul>

      <div className="flex items-center order-2">
        <MdOutlineAttachMoney color="#02B15A" className="h-12 w-12" />
        <p className="text-white font-semibold text-2xl tracking-wide">
          Finance
        </p>
      </div>

      <HiBars3BottomRight
        color="#02B15A"
        className="h-8 w-8 order-1 sm:order-3 fixed sm:static top-4 right-4"
      />
    </header>
  )
}
