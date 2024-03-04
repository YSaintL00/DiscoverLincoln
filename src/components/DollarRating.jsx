import React from 'react'

export default function DollarRating(props) {

  console.log(props.rating)

  const myArr = Array(props.rating).fill(0)
  const myArrNF = Array(3 - props.rating).fill(0)

  return (
    <div className=''>
      {myArr.map((element, index) => (
        <i key={index} className= {"fa-solid fa-dollar-sign mr-1 " + props.className}></i>
      ))}
      {myArrNF.map((element, index) => (
        <i key={index} className= {"fa-solid fa-dollar-sign opacity-50 mr-1 " + props.className}></i>
      ))}

    </div>
  )
}
