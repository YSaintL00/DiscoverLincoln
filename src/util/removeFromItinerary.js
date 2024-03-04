import toast from "react-hot-toast";

export default function removeFromItinerary(type, id) {

    if (window === undefined) {
        return;
    }

    let itinerary = JSON.parse(localStorage.getItem("itinerary"));
    if (itinerary == null) {
        itinerary = {
        "events": [],
        "organizations": []
        };
    }
    
    if (type == "events") {
        itinerary.events = itinerary.events.filter(event => event != id);
    } else if (type == "organizations") {
        itinerary.organizations = itinerary.organizations.filter(org => org != id);
    }

    toast.success("Removed from itinerary!");
    
    localStorage.setItem("itinerary", JSON.stringify(itinerary));
}