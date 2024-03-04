import React, { useState } from 'react'
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays, faDollarSign, faPlus } from '@fortawesome/free-solid-svg-icons';
import AddToItineraryButton from './AddToItineraryButton';
import Image from 'next/image';

export default function EventCard(props) {

  const [accentBarPos, setAccentBarPos] = useState('-translate-x-1/2');

  const fittedDesc = props.description.length > 150 ? (props.description.substring(0, 150) + "...")  : props.description;

  return (
    <div className="w-[50vw] bg-cream relative inline-flex flex-row justify-start items-center" href="/map" onMouseEnter={() => {setAccentBarPos('translate-x-0')}} onMouseLeave={() => {setAccentBarPos('-translate-x-1/2')}}>
      <Link className="w-8/12 grow-0 px-8 py-6 shadow justify-start items-center inline-flex cursor-pointer transition-colors hover:bg-white" href={'/event/' + props.id}>
        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <div className="flex-col justify-start items-start gap-1 inline-flex">

            <div className="text-black text-2xl font-roboto-slab-bold">{props.name}</div>

            <div className="pt-1.5 justify-start items-center gap-2 inline-flex">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "black"}} />
              <div className="text-black text-base font-roboto">{props.street + ', ' + props.city + ', ' + props.state}</div>
            </div>

            <div className="justify-start items-center gap-2 inline-flex">
              <FontAwesomeIcon icon={faCalendarDays} style={{color: "black"}} />
              <div className="text-black text-base font-roboto">
                {new Date(props.startDate).toLocaleString('en-ca', {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour12: "true",
                    hour: "numeric",
                    minute: "numeric",
                  }) 
                  + ' - ' + 
                  new Date(props.endDate).toLocaleString('en-ca', {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour12: "true",
                    hour: "numeric",
                    minute: "numeric",
                  }) 
                }
              </div>
            </div>

            <div className="justify-start items-center gap-2 inline-flex">
              <FontAwesomeIcon icon={faDollarSign} style={{color: "black"}} />
              <div className="text-black text-base font-roboto">{props.price + " / ticket"}</div>
            </div>
          </div>

          <div className="text-black text-base font-roboto">
            {fittedDesc}
          </div>
        </div>
      </Link>
      
      <AddToItineraryButton type="events" id={props.id} />

      <div className="w-4/12 self-stretch relative">
					<Image src={props.imageUrl} alt={props.name} fill className="object-cover" />
				</div>

      <div className={"absolute top-0 left-0 w-2 h-full bg-dark-green transition-all " + accentBarPos}></div>
    </div>
  )
}
