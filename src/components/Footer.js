import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

    const footerLinks = [
        {heading: "Home", href: "/", links: []},

        {heading: "Events", href:"/events", links: [
            {label: "Events Feed", href: "/events"},
            {label: "Event Creation Form", href: "/events/add"},
            {label: "Sample Event", href: "/event/1"}
        ]},

        {heading: "Organizations", href: "/orgs", links: [
            {label: "Organization Feed", href: "/orgs"},
            {label: "Organization Dashboard", href: "/dashboard"},
            {label: "Sample Organization", href: "/org/1"}
        ]},

        {heading: "Map", href: "/map", links: []},

        {heading: "Contact Us", href: "/contact", links: []}
    ];

    return (
        <div className="w-full grow bg-dark-green border-t-8 border-green flex flex-row gap-32 justify-center items-start py-12 z-50">
            <div className="inline-flex flex-col">
                <Image src="/DiscoverLincolnLogo.svg" width="129" height="52" alt="Discover Lincoln Logo" className='mb-2'/>
                <div className="border-l-2 border-light-green font-roboto text-xs text-cream max-w-96 pl-2">
                    Discover Lincoln is a local tourism and events organization that aims to promote the beauty and unique experiences of Lincoln to visitors from across the globe.
                    <br/><br/>
                    Our goal is to showcase the best that our community has to offer by highlighting the various attractions, events, and businesses that make Lincoln special.
                </div>
            </div>
            {footerLinks.map(heading => 
                <div key={heading.heading} className="inline-flex flex-col">
                    <Link className='text-lg font-roboto-slab-bold text-cream hover:text-light-green transition-colors' href={heading.href}>{heading.heading}</Link>
                    {heading.links.map(link =>
                        <Link key={link.label} className="text-md font-roboto text-cream hover:text-light-green transition-colors pt-4" href={link.href}>{link.label}</Link>
                    )}
                </div>
            )}
        </div>
    )
}