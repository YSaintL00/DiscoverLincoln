import React from 'react'

export default function Buttons({text,color}) {
  return (
    <div className={`px-3 py-2 font-roboto-slab-bold ${color} shadow-lg rounded-md cursor-pointer`}>
        {text}
    </div>
  )
}
