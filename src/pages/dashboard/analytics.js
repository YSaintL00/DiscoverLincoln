import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/DashboardSidebar";
import ChartData from "@/components/ChartData";
import StarRating from "@/components/StarRating";

export default function analyticsTab() {
  const [dollarRatings, setdollarRatings] = useState(null);

  useEffect(() => {
    fetch("https://strapi.discoverlincoln-c9.civiconnect.net/api/organizations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <>
      <div className="analyticsFormat">
        <Dashboard />


        <div className="data">
          <h1 className="pageTitle">Analytics</h1>
          <div className="views">
            Total Views
            <h1>700</h1>
          </div>
          <div className="rating-events">
            Average Rating
            <StarRating className="starColors" rating={4} />
            {/* <div>{dollarRatings}</div> */}
          </div>
          <div className="rating-events">
            Event Posted
            <h1>10</h1>
          </div>
        </div>

        <div className="graphFormat">
          <div className="flex gap-2">
            <button className="graphButtons">Day</button>
            <button className="graphButtons">Week</button>
            <button className="graphButtons">Month</button>
          </div>
          <div className="graph">
            {/* graph */}
            <ChartData />
          </div>
        </div>
      </div>
    </>
  );
}
