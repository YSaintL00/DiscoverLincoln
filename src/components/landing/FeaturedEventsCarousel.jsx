import React from "react";
import VerticalCard from "@/components/VerticalCard";
import { useState } from "react";
import styles from '../../styles/components/LandingFeaturedEvents.module.css';
import formatDate from "@/util/formatDate";

export default function FeaturedEventsCarousel({ events }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const items = events.data;

	console.log(items);

	const handleNextSlide = () => {
		if (activeIndex < items.length - 1) {
			setActiveIndex(activeIndex + 1);
		} else {
			setActiveIndex(0);
		}
	};

	const handlePrevSlide = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		} else {
			setActiveIndex(0);
		}
	};

	return (
		<div className="min-h-screen pt-24 overflow-x-hidden">
			<div className="mx-auto max-w-[1230px]">
				<div className="flex justify-between w-full">
					<div>
						<p className="uppercase font-roboto font-light">Where to Go</p>
						<h2 className="font-roboto-slab-bold text-3xl">
							Popular Events to Attend
						</h2>
					</div>
					<div className="flex gap-3">
						<button onClick={handlePrevSlide}>
							<i className="fa-solid fa-arrow-left text-xl"></i>
						</button>
						<button onClick={handleNextSlide}>
							<i className="fa-solid fa-arrow-right text-xl"></i>
						</button>
					</div>
				</div>
				<div
					className="flex gap-5"
					style={{
						transform: `translateX(${activeIndex * -20 + "rem"})`,
						transition: "transform 0.5s ease",
					}}
				>
					{items.map((item, index) => {
						return (
							<div className="shrink-0 mt-3" key={item.id}>
								<VerticalCard
									imageUrl={`https://strapi.discoverlincoln-c9.civiconnect.net${item.attributes.coverImage.data.attributes.url}`}
									name={item.attributes.title}
									location={item.attributes.city + ", " + item.attributes.state}
									date={formatDate(item.attributes.startDate)}
									description={item.attributes.description}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className={styles['bottom-container']}>
				<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="2" viewBox="0 0 1230 2" fill="none">
					<path opacity="0.19" d="M0 1L615 1L1230 1" stroke="black" stroke-width="2"/>
				</svg>
                <div className={styles['row']}>
                    <div className={styles['col']}>
                        <h1>01</h1>
                        <h3>Browse</h3>
                        <p>Explore a diverse selection of current events happening in Lincoln, handpicked for you.</p>
                    </div>
                    <div className={styles['col']}>
						<h1>02</h1>
                        <h3>Engage</h3>
                        <p>Dive into event details, find what interests you, and mark your calendar for an unforgettable experience.</p>
                    </div>
                    <div className={styles['col']}>
						<h1>03</h1>
                        <h3>Join In</h3>
                        <p>Participate in the festivities, connect with fellow attendees, and make memories at Lincoln&apos;s most exciting gatherings.</p>
                    </div>
                </div>
            </div>
		</div>
	);
}
