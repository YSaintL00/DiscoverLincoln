import React from "react";
import Link from "next/link";
import StarRating from "./StarRating";
import DollarRating from "./DollarRating";
import { useState } from "react";
import AddToItineraryButton from "./AddToItineraryButton";
import Image from "next/image";


export default function OrgCard(props) {
	const [accentBarPos, setAccentBarPos] = useState("-translate-x-1/2");

	return (
		<div className="w-[50vw] relative">
			{
				props.onClick ?
				<button
					className="bg-cream inline-flex flex-row justify-start items-center w-full h-full"
					href={`/organization/${props.id}`}
					onMouseEnter={() => {
						setAccentBarPos("translate-x-0");
					}}
					onMouseLeave={() => {
						setAccentBarPos("-translate-x-1/2");
					}}
					onClick={props.onClick}
				>
					<div className="w-8/12 grow-0 px-8 py-6 shadow justify-start items-center inline-flex cursor-pointer transition-colors ">
						<div className="flex-col justify-start items-start gap-3 inline-flex">
							<div className="flex-col justify-start w-full items-start gap-1 inline-flex">
								<div className="text-black inline-flex w-full justify-between text-2xl font-roboto-slab-bold">
									<div>{props.name}</div>
									<div>
										<StarRating
											className="text-blue p-0.1"
											rating={props.rating}
										/>
									</div>
								</div>

								<div className="pt-1.5 justify-start items-center gap-2 inline-flex">
									<i className="fa-sharp fa-solid fa-location-dot text-sm text-black"></i>
									<div className="text-black text-base font-roboto">
										{props.street + ", " + props.city + ", " + props.state}
									</div>
								</div>
								<div className="justify-start items-center gap-2 inline-flex">
									<DollarRating
										className="text-black"
										rating={props.dollarRating}
									/>
								</div>
							</div>

							<div className="text-black text-start text-base font-roboto line-clamp-3">
								{props.description}
							</div>
						</div>
					</div>

					<div className="w-4/12 self-stretch relative">
						<Image src={props.imageUrl} alt={props.name} fill className="object-cover" />
					</div>

					<div
						className={
							"absolute top-0 left-0 w-2 h-full bg-blue transition-all " +
							accentBarPos
						}
					></div>
				</button>
				:
				<Link
					className="bg-cream inline-flex flex-row justify-start items-center w-full h-full"
					href={`/organization/${props.id}`}
					onMouseEnter={() => {
						setAccentBarPos("translate-x-0");
					}}
					onMouseLeave={() => {
						setAccentBarPos("-translate-x-1/2");
					}}
				>
					<div className="w-8/12 grow-0 px-8 py-6 shadow justify-start items-center inline-flex cursor-pointer transition-colors ">
						<div className="flex-col justify-start items-start gap-3 inline-flex">
							<div className="flex-col justify-start w-full items-start gap-1 inline-flex">
								<div className="text-black inline-flex w-full justify-between text-2xl font-roboto-slab-bold">
									<div>{props.name}</div>
									<div>
										<StarRating
											className="text-blue p-0.1"
											rating={props.rating}
										/>
									</div>
								</div>

								<div className="pt-1.5 justify-start items-center gap-2 inline-flex">
									<i className="fa-sharp fa-solid fa-location-dot text-sm text-black"></i>
									<div className="text-black text-base font-roboto">
										{props.street + ", " + props.city + ", " + props.state}
									</div>
								</div>
								<div className="justify-start items-center gap-2 inline-flex">
									<DollarRating
										className="text-black"
										rating={props.dollarRating}
									/>
								</div>
							</div>

							<div className="text-black text-start text-base font-roboto line-clamp-3">
								{props.description}
							</div>
						</div>
					</div>

					<div className="w-4/12 self-stretch relative">
						<Image src={props.imageUrl} alt={props.name} fill className="object-cover" />
					</div>

					<div
						className={
							"absolute top-0 left-0 w-2 h-full bg-blue transition-all " +
							accentBarPos
						}
					></div>
				</Link>
			}
			<AddToItineraryButton type="organizations" id={props.id} />
		</div>
	);
}
