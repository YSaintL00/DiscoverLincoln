import React from 'react'
import Link from 'next/link'

export default function NavbarItem(props) {
  return (
    <div className="justify-center items-center gap-2.5 inline-flex">
        <Link className="text-cream hover:text-light-green transition-colors text-xl font-roboto-slab-bold cursor-pointer" href={props.href}>
            {props.text}
        </Link>
    </div>
  )
}