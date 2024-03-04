import React, { useState } from 'react'

export default function ActionButton(props) {

  const [currentColour, setCurrentColour] = useState(props.colour);
  const size = "text-" + props.size;
  
  return (
    <div className="px-4 py-2 rounded shadow justify-center items-center inline-flex transition-colors cursor-pointer" onClick={props.onClick}
      style={{backgroundColor: currentColour}} onMouseEnter={() => setCurrentColour(props.hoverColour)} onMouseLeave={() => setCurrentColour(props.colour)}
      onMouseDown={() => setCurrentColour(props.colour)} onMouseUp={() => setCurrentColour(props.hoverColour)}>
        <a className={"text-cream font-roboto-slab-bold " + size} href={props.href}>
            {props.text}
        </a>
    </div>
  )
}