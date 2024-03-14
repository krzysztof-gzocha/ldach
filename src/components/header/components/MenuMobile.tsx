'use client'

import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import classNames from 'classnames'
import Link from 'next/link'


import { mobileMenuAnimation } from '../animations'

import HamburgerIcon from './HamburgerIcon'
import CloseIcon from './CloseIcon'
import {useOnClickOutside} from "@/hooks/useOnClickOutside";

interface MenuMobileProps {
  options: {
    label: string
    path: string
    isButton?: boolean
  }[]
  isActive: boolean
  handleMenuState: (arg: boolean) => void


}

const MenuMobile = ({
  options,
  isActive,
  handleMenuState,


}: MenuMobileProps) => {
  const ref = useRef(null)
  useOnClickOutside(ref, () => handleMenuState(false))


  const toggleActiveState = () => {
    isActive ? handleMenuState(false) : handleMenuState(true)
  }

  const mobileMenuAppearance = classNames(
    'fixed top-4 right-0  w-full sm:w-1/2 h-auto md:h-auto pt-9 max-h-screen bg-white flex flex-col px-10 md:px-12 pb-5 overflow-y-auto shadow-xl rounded-2xl',
    {
      hidden: !isActive,
    },
  )

  return (
    <nav ref={ref}>
      {!isActive && (
        <button className="h-full z-0 relative" onClick={toggleActiveState}>
          <HamburgerIcon />
        </button>
      )}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className={mobileMenuAppearance}
            variants={mobileMenuAnimation}
            initial="initial"
            animate="show"
            exit="hide"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            key="menu-mobile"
          >
            <div className="flex justify-between">
              <h3 className="pb-8 text-left text-black text-base font-semibold">MENU</h3>
              <button className="self-start" onClick={toggleActiveState}>
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col text-black">
              {options.map(({ label, path, isButton }) => {
                return (
                  <Link
                      href={path}
                      key={label}
                      className="py-4 px-5 pl-0 md:mr-20 text-left uppercase font-medium first:pt-0"
                      onClick={() => handleMenuState(false)}
                  >
                    {label}
                  </Link>
                )})}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default MenuMobile
