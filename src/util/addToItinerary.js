import toast from "react-hot-toast"

export default function addToItinerary(type, id) {
    toast.success("Added to itinerary!")
    let itinerary = JSON.parse(localStorage.getItem("itinerary"))
    if (itinerary == null) {
        itinerary = {
            "events": [],
            "organizations": []
        }
    }
    if (type == "events") {
        itinerary.events.push(id)
    } else if (type == "organizations") {
        itinerary.organizations.push(id)
    }

    localStorage.setItem("itinerary", JSON.stringify(itinerary))
}