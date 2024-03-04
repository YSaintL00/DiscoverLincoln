import React, { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'

import ActionButton from '@/components/ActionButton'
import Navbar from '@/components/Navbar'
import EventCard from '@/components/EventCard'
import Footer from '@/components/Footer'
import DualSlider from '@/components/DualSlider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import OrgCard from '@/components/OrgCard'
import Events from './events'

const MapComponent = dynamic(() => import("@/components/Map"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});

export const getStaticProps = () => {
    return Promise.all([
        fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/events?populate=coverImage&sort=id", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }),
        fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/organizations?populate=featureImage,reviews&sort=id", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
    ])
    .then(([events, orgs]) => Promise.all([events.json(), orgs.json()]))
    .then(([events, orgs]) => Object({props: {eventsData: events.data, orgsData: orgs.data}}))
    .catch((error) => error);
}

export default function Map({ eventsData, orgsData }) {

    const [events, setEvents] = useState(eventsData);
    const [orgs, setOrgs] = useState(orgsData);

    const searchTerm = useRef();
    const [searchParams, setSearchParams] = useState({});

    const applyFilters = () => {
        let newSearchParams = {};

        if (searchTerm.current.value) {
            newSearchParams.searchTerm = searchTerm.current.value;
        }
        console.log(searchTerm.current.value);
        setSearchParams(newSearchParams);
    }

    useEffect(() => {
        let eventQueryString = "/api/events?populate=coverImage";
        let orgQueryString = "/api/organizations?populate=featureImage,reviews";
    
        if (searchParams.searchTerm) {
            eventQueryString += "&filters[title][$containsi]=" + searchParams.searchTerm;
            orgQueryString += "&filters[name][$containsi]=" + searchParams.searchTerm;
        }
    
        Promise.all([
            fetch(process.env.NEXT_PUBLIC_STRAPI_URL + eventQueryString, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }),
            fetch(process.env.NEXT_PUBLIC_STRAPI_URL + orgQueryString, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
        ])
        .then(([events, orgs]) => Promise.all([events.json(), orgs.json()]))
        .then(([events, orgs]) => {setEvents(events.data); setOrgs(orgs.data);})
        .catch(error => error);
    }, [searchParams])
    

    return (
        <div className="w-full h-screen">
            <div className="flex flex-col w-full h-full grow">
                <div className="bg-cream inline-flex flex-col h-full">
                    <div className="bg-cream w-full h-20 mt-16 px-8 inline-flex flex-row justify-between items-center border-b-2 border-dark-green">
                        <div className="text-dark-green text-3xl font-roboto-slab-bold">Map</div>
                        <div className="w-5/12 inline-flex flex-row justify-end gap-4 items-center">
                            <div className="grow h-8 px-4 bg-white shadow rounded inline-flex justify-start items-center gap-2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#102E1E", width: "15px", height: "15px"}}/>
                                <input className="inline-flex h-full grow text-black text-l font-roboto focus:outline-none" type="text" placeholder='Search...' id="search" name="search" ref={searchTerm} onChange={applyFilters}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-3/4 flex-auto inline-flex flex-row">
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
                                {orgs.map((org) =>
                                    <OrgCard
                                        key={org.id}
                                        id={org.id}
                                        name={org.attributes.name}
                                        street={org.attributes.street}
                                        city={org.attributes.city}
                                        state={org.attributes.state}
                                        rating={Math.round(org.attributes.reviews.data.reduce((acc, review) => acc + review.attributes.rating, 0) / Math.max(org.attributes.reviews.data.length, 1))}
                                        dollarRating={org.attributes.dollarRating}
                                        description={org.attributes.description}
                                        imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + org.attributes.featureImage.data.attributes.url}
                                    />
                                )}
                                {(events.length === 0 && orgs.length === 0) && <p className="pt-8 text-center w-full font-roboto text-green" >No results.</p>}
                            </div>
                        </div>
                        <div className="w-1/2 h-full inline-flex">
                            <MapComponent
                                eventMarkers={events.map(event => Object({
                                    title: event.attributes.title,
                                    street: event.attributes.street,
                                    city: event.attributes.city,
                                    state: event.attributes.state,
                                    coverImageUrl: process.env.NEXT_PUBLIC_STRAPI_URL + event.attributes.coverImage.data.attributes.url,
                                    lat: event.attributes.latitude, 
                                    lng: event.attributes.longitude
                                }))}
                                orgMarkers={orgs.map(org => Object({
                                    title: org.attributes.name,
                                    street: org.attributes.street,
                                    city: org.attributes.city,
                                    state: org.attributes.state,
                                    coverImageUrl: process.env.NEXT_PUBLIC_STRAPI_URL + org.attributes.featureImage.data.attributes.url,
                                    lat: org.attributes.latitude,
                                    lng: org.attributes.longitude
                                }))}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
