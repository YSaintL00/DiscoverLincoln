import React from "react";
import Image from "next/image";

export default function VerticalCard({
    imageUrl,
    name,
    location,
    date,
    description,
}) {
	return (
		<div className="flex flex-col w-[20rem] bg-white rounded-lg overflow-hidden shadow">
			<div className="relative border h-48">
				<Image src={imageUrl} fill className="object-cover" />
			</div>
			<div className="relative p-6">
				<p className="font-roboto-slab-bold text-xl">{name}</p>
				<div className="flex items-center gap-2 font-semibold font-roboto">
					<i className="fa-solid fa-location-dot"></i>
					{location}
				</div>
				<div className="flex items-center gap-2 font-semibold font-roboto">
					<i className="fa-solid fa-calendar-check"></i>
					{date}
				</div>
				<p className="font-roboto mt-2 line-clamp-3">
					{description}
				</p>
			</div>
		</div>
	);
}
