import { FiTwitter } from 'react-icons/fi'
import { FaFacebook, FaMedium } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { HiBars3BottomRight } from 'react-icons/hi2'

export function Header() {
  return (
    <header className="w-[1118px] mx-auto pt-[64px] flex items-center justify-between">
      <ul className="flex gap-[25px]">
        <li>
          <FiTwitter color="#02B15A" className="h-[20px] w-[20px]" />
        </li>
        <li>
          <FaMedium color="#02B15A" className="h-[20px] w-[20px]" />
        </li>
        <li>
          <FaFacebook
            color="#02B15A"
            className="stroke-green300 h-[20px] w-[20px]"
          />
        </li>
      </ul>

      <div className="flex items-center">
        <MdOutlineAttachMoney color="#02B15A" className="h-[50px] w-[40px]" />
        <p className="text-white font-[600] text-[20px]">Finance</p>
      </div>

      <HiBars3BottomRight color="#02B15A" className="h-[34px] w-[34px]" />
    </header>
  )
}
