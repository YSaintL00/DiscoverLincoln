import React, {useState} from 'react'
import Image from 'next/image'

import NavbarItem from './NavbarItem'
import ActionButton from './ActionButton'

export default function Navbar() {

  const [mobileContainerPos, setMobileContainerPos] = useState("translate-x-full");

  return (
    <nav id="navbar" className="w-full bg-dark-green shadow flex justify-between items-center py-0.5 px-8 fixed top-0 left-0 z-50" style={{zIndex: "999"}}>
      <Image alt="Discover Lincoln Logo" src='/DiscoverLincolnLogo.svg' width="129" height="52"/>

      <div id="navbarItemContainer" className="py-2 justify-end items-center gap-8 inline-flex max-lg:hidden">
        <NavbarItem text="Home" href="../"/>
        <NavbarItem text="Events" href="/events"/>
        <NavbarItem text="Organizations" href="/organizations"/>
        <NavbarItem text="Map" href="/map"/>
        <NavbarItem text="Contact Us" href="/contact"/>
        <NavbarItem text="My Trip" href="/itinerary"/>

        <ActionButton text="Log In" href="/login" colour="#1E5639" hoverColour="#8BC49B" size="xl"/>
      </div>

      <svg
        className="fill-cream hover:fill-light-green transition-colors lg:hidden" width="32" height="32"
        onClick={() => {setMobileContainerPos("translate-x-0")}}
      >
        <rect y="6" width="32" height="4"></rect>
        <rect y="14" width="32" height="4"></rect>
        <rect y="22" width="32" height="4"></rect>
      </svg>

      <div id="navbarItemContainerMobile" className={"transition-all h-full w bg-dark-green pl-16 pr-4 fixed top-0 right-0 inline-flex flex-col justify-center items-end gap-8 float-right z-10 lg:hidden " + mobileContainerPos}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-cream hover:fill-light-green transition-colors fixed top-4" onClick={() => {setMobileContainerPos("translate-x-full")}}>
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
        </svg>

        <NavbarItem text="Home" href="/"/>
        <NavbarItem text="Events" href="/events"/>
        <NavbarItem text="Organizations" href="/orgs"/>
        <NavbarItem text="Map" href="/map"/>
        <NavbarItem text="Contact Us" href="/contact"/>

        <ActionButton text="Log In" href="/login"/>
        <ActionButton text="Itinerary" href="/itinerary"/>
      </div>
    </nav>
  )
}
