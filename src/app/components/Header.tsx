import { FiTwitter } from 'react-icons/fi'
import { FaFacebook, FaMedium } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { HiBars3BottomRight } from 'react-icons/hi2'

export function Header() {
  return (
    <header className="max-w-web mx-auto pt-16 flex items-center justify-between">
      <ul className="flex gap-6">
        <li>
          <FiTwitter color="#02B15A" className="h-5 w-5" />
        </li>
        <li>
          <FaMedium color="#02B15A" className="h-5 w-5" />
        </li>
        <li>
          <FaFacebook color="#02B15A" className="stroke-green300 h-5 w-5" />
        </li>
      </ul>

      <div className="flex items-center">
        <MdOutlineAttachMoney color="#02B15A" className="h-12 w-12" />
        <p className="text-white font-semibold text-2xl tracking-wide">
          Finance
        </p>
      </div>

      <HiBars3BottomRight color="#02B15A" className="h-8 w-8" />
    </header>
  )
}
