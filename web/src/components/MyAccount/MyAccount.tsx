import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

const MyAccount = () => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownShowing((prevValue) => !prevValue)
  }

  return (
    <>
      <button
        onClick={toggleDropdown}
        className=" flex items-center gap-2 text-black dark:text-white"
      >
        <motion.div
          animate={{ rotate: isDropdownShowing ? '-180deg' : '0deg' }}
        >
          <Icon id="chevron" size={24} />
        </motion.div>
        <Avatar avatar="/images/avatar-01.png" alt="Avatar" />
        <div className="text-left ">
          <div className="text-sm ">Logged in as</div>
          <div className="text-lg font-bold ">Cody Fisher</div>
        </div>
      </button>

      <AnimatePresence>
        {isDropdownShowing && (
          <motion.nav
            className="dropdown inline-block bg-white py-5 pl-4 pr-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="flex flex-col gap-2">
              <li>
                <div className="text-pastelMagenta">
                  <Icon id="user" size={32} />
                </div>
                My Account
              </li>
              <li>
                <div className="text-pastelMagenta">
                  <Icon id="calender" size={32} />
                </div>
                My Event
              </li>
              <li>
                <div className="text-pastelMagenta">
                  <Icon id="logout" size={32} />
                </div>
                Logout
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default MyAccount
