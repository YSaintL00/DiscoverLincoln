import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

import EventCard from '@/components/EventCard';

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const OrganizationEventsTab = (props) => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/events?populate=coverImage&filters[organization]=" + props.id + "&sort=id", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((response) => response.json())
    .then((response) => setEvents(response.data))
    .catch((error) => error);
  }, [props.id]);

  return (
    <div className="w-full h-[28.5rem] flex-auto inline-flex flex-row">
      <div className='min-w-1/2 grow overflow-y-auto overflow-x-hidden'>
        <div className="min-w-full h-full inline-flex flex-col">
          {events.map((event) =>
            <EventCard
              key={event.id}
              id={event.id}
              name={event.attributes.title}
              street={event.attributes.street}
              city={event.attributes.city}
              state={event.attributes.state}
              startDate={event.attributes.startDate}
              endDate={event.attributes.endDate}
              price={event.attributes.price}
              description={event.attributes.description}
              imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + event.attributes.coverImage.data.attributes.url}     
            />
          )}
          {events.length == 0 && <p className="pt-8 text-center w-full font-roboto text-green" >No events.</p>}
        </div>
      </div>
      <div className="w-1/2 h-full inline-flex">
        <Map
          eventMarkers={events.map(event => Object({
            title: event.attributes.title,
            street: event.attributes.street,
            city: event.attributes.city,
            state: event.attributes.state,
            coverImageUrl: process.env.NEXT_PUBLIC_STRAPI_URL + event.attributes.coverImage.data.attributes.url,
            lat: event.attributes.latitude, 
            lng: event.attributes.longitude
          }))}
        />
      </div>
    </div>
  );
};

export default OrganizationEventsTab;