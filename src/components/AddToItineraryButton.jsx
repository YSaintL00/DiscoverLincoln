import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import addToItinerary from "@/util/addToItinerary";
import removeFromItinerary from "@/util/removeFromItinerary";

export default function AddToItineraryButton(props) {
	const type = props.type;
	const id = props.id;

	function isInItinerary() {
		if (typeof window === "undefined") return false;
		const itinerary = JSON.parse(localStorage.getItem("itinerary"));
		if (itinerary && itinerary[type]) {
			return itinerary[type].includes(id);
		}
		return false;
	}

    useEffect(() => {
        setInItinerary(isInItinerary());
    }, []);

	const [inItinerary, setInItinerary] = useState(undefined);

	function handleAddToItinerary(id) {
		addToItinerary(type, id);
		// trigger a re-render
        setInItinerary(isInItinerary());
	}

    function handleRemoveFromItinerary(id) {
        removeFromItinerary(type, id);
        // trigger a re-render
        setInItinerary(isInItinerary());
    }

	return (
		<button
			className="w-10 h-10 z-30 absolute top-4 right-4 bg-blue hover:bg-light-blue active:bg-blue transition-colors rounded justify-center items-center inline-flex gap-1 cursor-pointer"
			onClick={() => {
				!inItinerary ? handleAddToItinerary(id) : handleRemoveFromItinerary(id);
			}}
		>
			<FontAwesomeIcon
				icon={faLocationDot}
				style={{ color: "white", width: "13px", height: "18px" }}
			/>
			{!inItinerary ? (
				<FontAwesomeIcon
					icon={faPlus}
					style={{ color: "white", width: "10px", height: "18px" }}
                    className={`transition-opacity ${inItinerary === undefined ? "invisible opacity-0" : "opacity-100"}`}
				/>
			) : (
				<FontAwesomeIcon
					icon={faMinus}
					style={{ color: "white", width: "10px", height: "18px" }}
                    className={`transition-opacity ${inItinerary === undefined ? "invisible opacity-0" : "opacity-100"}`}
				/>
			)}
		</button>
	);
}
