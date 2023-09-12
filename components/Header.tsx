import React from 'react'
import { ModeToggle } from './mode-toggle'
import { MainNav } from './main-nav'

const Header = () => {
  return (
    <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
          </div>
    </div>
  )
}

export default Header