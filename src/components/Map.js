import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";

export default function Map(props) {

    var map = useRef(null);
    var layerGroup = useRef(null);

    const eventIcon = L.icon({
        iconUrl: process.env.NEXT_PUBLIC_STRAPI_URL + '/uploads/event_marker_icon_615efa2c24.svg',

        iconSize: [32, 40],
        iconAnchor: [16, 39],
        popupAnchor: [0,-40],
        className: "w-6 h-8 transition hover:scale-110 active:scale-100"
    });

    const orgIcon = L.icon({
        iconUrl: process.env.NEXT_PUBLIC_STRAPI_URL + '/uploads/org_marker_icon_80f60d8207.svg',

        iconSize: [32, 40],
        iconAnchor: [16, 39],
        popupAnchor: [0,-40],
        className: "w-6 h-8 transition hover:scale-110 active:scale-100"
    });

    const eventPopup = (marker) => {
        const popup = L.popup({
            content: `
            <div class="flex flex-col justify-center items-start">
                <div class="w-64 h-64 grow bg-cover bg-center bg-no-repeat" style="background-image:url('${marker.coverImageUrl}')"></div>
                <a class="shrink font-roboto-slab-bold text-2xl mx-3 mt-3 cursor-pointer decoration-green text-green hover:text-light-green active:text-green transition-colors" style="color:#1E5639">${marker.title}</a>
                <div class="font-roboto text-sm px-3 pt-2">${marker.street}, ${marker.city}, ${marker.state}</p>
            </div>
            `,
            autoPan: true,
            autoClose: true
        })

        return popup;
    }

    const orgPopup = (marker) => {
        const popup = L.popup({
            content: `
            <div class="flex flex-col justify-center items-start">
                <div class="w-64 h-64 grow bg-cover bg-center bg-no-repeat" style="background-image:url('${marker.coverImageUrl}')"></div>
                <a class="shrink font-roboto-slab-bold text-2xl mx-3 mt-3 cursor-pointer decoration-green text-blue hover:text-light-blue active:text-blue transition-colors" style="color:#004E75">${marker.title}</a>
                <div class="font-roboto text-sm px-3 pt-2">${marker.street}, ${marker.city}, ${marker.state}</p>
            </div>
            `,
            autoPan: true,
            autoClose: true
        })

        return popup;
    }

    useEffect(() => {
        if (map.current) {
           map.current.remove();
        }

        map.current = L.map("map").setView([43.138968160995255, -79.48496038572324], 12);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map.current);
    }, []);

    useEffect(() => {
        if (layerGroup.current) {
            layerGroup.current.removeFrom(map.current);
        }

        layerGroup.current = L.layerGroup([]);

        let eventMarkers = props.eventMarkers ? props.eventMarkers : [];
        let orgMarkers = props.orgMarkers ? props.orgMarkers : [];

        for (const marker of eventMarkers) {
            layerGroup.current.addLayer(
                L.marker([marker.lat, marker.lng], {icon: eventIcon})
                .bindPopup(eventPopup(marker))
            );
        }

        for (const marker of orgMarkers) {
            layerGroup.current.addLayer(
                L.marker([marker.lat, marker.lng], {icon: orgIcon})
                .bindPopup(orgPopup(marker))
            );
        }

        layerGroup.current.addTo(map.current);

        if (eventMarkers.length === 1 && orgMarkers.length === 0) {
            map.current.setView([eventMarkers[0].lat, eventMarkers[0].lng], 12);
        } else if (orgMarkers.length === 1 && eventMarkers.length === 0) {
            map.current.setView([orgMarkers[0].lat, orgMarkers[0].lng], 12);
        }

    }, [props, props.eventMarkers, eventIcon, props.orgMarkers, orgIcon]);

    return (
        <div className="w-full h-full bg-cream z-10" id="map"></div>
    )
}
