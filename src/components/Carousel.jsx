import React from 'react'
import { useState } from 'react'

export default function Carousel(props) {

    console.log(props.images);

    // step 1: store images in an array (a bunch of the src attributes)
    const imgArray = props.images.data.map((item) => `https://strapi.discoverlincoln-c9.civiconnect.net${item.attributes.url}`);

    // step 2: have a state var that stores what image(s) are currently being stored (do index of the image(s) in array)
    const [imgIndex, setImgIndex] = useState(0)

    // step 5: use a function to check the max length of the index
    const nextImage = () => {
        if (imgIndex === (imgArray.length - 1)) {
            setImgIndex(0)
        }
        else {
            // setImgIndex(imgArray[0] += 1)
            setImgIndex((prevIndex) => prevIndex + 1)
        }
    }

    const prevImage = () => {
        if (imgIndex === 0) {
            setImgIndex(imgArray.length -1)
        }
        else {
            setImgIndex((prevIndex) => prevIndex - 1)
        }
    }

  return (
    // step 3: need an image tag in the component that the src will be that state variable (dynamic source)
    <div className='relative mb-10 rounded-2xl h-80 w-[94%]'>
        <img className=' h-full w-full object-cover rounded-2xl' src={imgArray[imgIndex]} alt="Picture of Fusion Latina" />


        {/* step 4" set up 2 buttons for past and next index, onclick handler that changes the state */}
        <button className='absolute top-[45%] left-5 h-8 w-8 rounded-full bg-black/15 hover:bg-black/50 transition-colors' onClick={prevImage}><i className="fa-solid fa-angle-left"></i></button>
        <button className='absolute top-[45%] right-5 h-8 w-8 rounded-full bg-black/15 hover:bg-black/50 transition-colors' onClick={nextImage}><i className="fa-solid fa-angle-right"></i></button>
        {/* <button onClick={nextImage}><i className="fa-solid fa-angle-right"></i></button>  */}
    </div>
  )
}
