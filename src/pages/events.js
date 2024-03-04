import React, { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import ActionButton from '@/components/ActionButton'
import Navbar from '@/components/Navbar'
import EventCard from '@/components/EventCard'
import Footer from '@/components/Footer'
import DualSlider from '@/components/DualSlider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Map = dynamic(() => import("@/components/Map"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});

export const getStaticProps = () => {
    return fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/events?populate=coverImage&sort=id", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((response) => response.json())
    .then((response) => Object({props: {eventsData: response.data}}))
    .catch((error) => error);
}

export default function Events({ eventsData }) {

    const [events, setEvents] = useState(eventsData);

    const filterPopup = useRef();
    const [showFilters, setShowFilters] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        if (!showFilters) return;
        const handlePopupDefocus = (e) => {
            if (filterPopup.current && !filterPopup.current.contains(e.target)) {
                setShowFilters(false);
                applyFilters();
            }
        }
        document.addEventListener('click', handlePopupDefocus);

        return () => {document.removeEventListener('click', handlePopupDefocus)}
    }, [showFilters]);

    const searchTerm = useRef();
    const dateLB = useRef();
    const dateUB = useRef();
    const priceLB = useRef();
    const priceUB = useRef();
    const [priceReset, setPriceReset] = useState(false);
    const sort = useRef();
    const [searchParams, setSearchParams] = useState({});

    const clearFilters = () => {
        dateLB.current.value = '';
        dateUB.current.value = '';
        priceLB.current.value = '0';
        priceUB.current.value = '300';
        setPriceReset(!priceReset);
        sort.current.value = 'startDate:asc';

        applyFilters();
    }

    const applyFilters = () => {

        let newSearchParams = {};
        let isFiltered = false;

        if (searchTerm.current.value) {
            newSearchParams.searchTerm = searchTerm.current.value;
        }

        if (dateLB.current.value) {
            const date = (new Date(dateLB.current.value));
            const utcDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

            const isoDate = (new Date(utcDate)).toISOString();
            newSearchParams.dateLB = isoDate;
            isFiltered = true;
        }

        if (dateUB.current.value) {
            const date = (new Date(dateUB.current.value));
            // Upper bound of date range, assume 11:59 PM
            date.setTime(date.getTime() + (1000*60*60*24) - (1000*60));

            const utcDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

            const isoDate = (new Date(utcDate)).toISOString();
            newSearchParams.dateUB = isoDate;
            isFiltered = true;
        }

        if (priceLB.current.value !== '0') {
            newSearchParams.priceLB = priceLB.current.value;
            isFiltered = true;
        }

        if (priceUB.current.value !== '300') {
            newSearchParams.priceUB = priceUB.current.value;
            isFiltered = true;
        }
        
        if (sort.current.value) {
            newSearchParams.sort = sort.current.value;
        }

        setSearchParams(newSearchParams);
        setIsFiltered(isFiltered);
    }

    useEffect(() => {
        let queryString = "/api/events?populate=coverImage";

        if (searchParams.searchTerm) {
            queryString += "&filters[title][$containsi]=" + searchParams.searchTerm;
        }

        if (searchParams.dateLB) {
            queryString += "&filters[endDate][$gte]=" + searchParams.dateLB;
        }

        if (searchParams.dateUB) {
            queryString += "&filters[startDate][$lte]=" + searchParams.dateUB;
        }

        if (searchParams.priceLB) {
            queryString += "&filters[price][$gte]=" + searchParams.priceLB;
        }

        if (searchParams.priceUB) {
            queryString += "&filters[price][$lte]=" + searchParams.priceUB;
        }

        if (searchParams.sort) {
            queryString += "&sort[0]=" + searchParams.sort + "&sort[1]=title";
        }

        fetch(process.env.NEXT_PUBLIC_STRAPI_URL + queryString, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then((response) => {setEvents(response.data)})
        .catch((error) => error);
    },[searchParams]);
    
    return (
        <div className="w-full h-screen">
            <div className="flex flex-col w-full h-full grow">
                <div className="bg-cream inline-flex flex-col h-full">
                    <div className="bg-cream w-full h-20 mt-16 px-8 inline-flex flex-row justify-between items-center border-b-2 border-dark-green">
                        <div className="text-dark-green text-3xl font-roboto-slab-bold">Events</div>
                        <div className="w-5/12 inline-flex flex-row justify-end gap-4 items-center">
                            <div className="grow h-8 px-4 bg-white shadow rounded inline-flex justify-start items-center gap-2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#102E1E", width: "15px", height: "15px"}}/>
                                <input className="inline-flex h-full grow text-black text-l font-roboto focus:outline-none" type="text" placeholder='Search...' id="search" name="search" ref={searchTerm} onChange={e => setSearchParams({...searchParams, searchTerm: e.target.value})}/>
                            </div>
                            <div className={"relative w-8 h-8 inline-flex transition-colors rounded justify-center items-center cursor-pointer " + (showFilters ? 'bg-green' : (isFiltered ? 'bg-light-green' : 'bg-dark-green'))} tabIndex="100"
                                onClick={(e) => {e.stopPropagation(); setShowFilters(!showFilters)}}
                            >
                                <FontAwesomeIcon icon={faSliders} style={{color: "white", width: "15px", height: "15px"}}/>
                                <div className={"absolute top-0 left-0 w-96 h-[22rem] z-40 translate-y-8 -translate-x-[80%] " + (!showFilters ? 'hidden' : '')} ref={filterPopup} onClick={(e) => e.stopPropagation()}>
                                    <div className="absolute top-[3%] left-[82%] rotate-45 w-4 h-4 bg-white rounded shadow"></div>
                                    <div className="absolute top-[5%] left-0 w-full h-full bg-white rounded cursor-default shadow flex flex-col grow p-4 font-roboto">
                                        <div className='text-xl font-roboto-slab-bold text-dark-green mb-4'>Filters & Sort</div>
                                        <form className="h-full inline-flex flex-col justify-evenly">
                                            <div className="font-roboto-slab-bold text-lg">Date</div>
                                            <div className="inline-flex flex-row h-1/4 w-full justify-start gap-4">
                                                <div className="inline-flex flex-row h-full w-1/2 justify-start gap-2 items-center">
                                                    <p>From </p>
                                                    <input className="bg-grey rounded w-32 focus:outline-none" type="date" ref={dateLB}></input>
                                                </div>
                                                <div className="inline-flex flex-row h-full w-1/2 justify-start gap-2 items-center">
                                                    <p>To </p>
                                                    <input className="bg-grey rounded w-32 focus:outline-none" type="date" ref={dateUB}></input>
                                                </div>
                                            </div>
                                            <div className="font-roboto-slab-bold text-lg">Price</div>
                                            <div className="h-1/4 w-full justify-start gap-4 pt-2">
                                                <DualSlider min={0} max={300} prefix="$" value1Ref={priceLB} value2Ref={priceUB} reset={priceReset} setReset={setPriceReset}/>
                                            </div>
                                            <div className="font-roboto-slab-bold text-lg">Sort By</div>
                                            <div className="inline-flex flex-row w-full h-1/4 justify-start items-center mb-4">
                                                <select className="w-full p-0 font-roboto text-[#9FA6B2] focus:outline-none cursor-pointer" name="sort" id="sort" ref={sort}>
                                                    <option value="startDate:asc" default>Date (Earliest First)</option>
                                                    <option value="startDate:desc">Date (Furthest First)</option>
                                                    <option value="price:asc">Price (Low to High)</option>
                                                    <option value="price:desc">Price (High to Low)</option>
                                                </select>
                                            </div>
                                            <div class="inline-flex flex-row justify-between">
                                                <ActionButton text="Clear" size="md" colour="#004E75" hoverColour="#117199" onClick={() => {clearFilters()}}/>  
                                                <ActionButton text="Apply" size="md" colour="#1E5639" hoverColour="#8BC49B" onClick={() => {applyFilters()}}/>
                                            </div>
                                        </form>

                                    </div>

                                </div>
                            </div>
                            <Link className="w-8 h-8 inline-flex bg-dark-blue hover:bg-light-blue active:bg-dark-blue transition-colors rounded justify-center items-center cursor-pointer" href="/event-form">
                                <FontAwesomeIcon icon={faPlus} style={{color: "white", width: "20px", height: "20px"}}/>
                            </Link>
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
                                {events.length == 0 && <p className="pt-8 text-center w-full font-roboto text-green" >No results.</p>}
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
                </div>
            </div>
        </div>
    )
}
