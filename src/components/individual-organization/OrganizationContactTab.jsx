import React from "react";
import styles from "../../styles/components/OrganizationHero.module.css";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     "https://strapi.discoverlincoln-c9.civiconnect.net/api/organizations"
//   );
//   const organizations = await res.json();
//   // Pass data to the page via props
//   console.log(organizations);
//   return { props: { organizations} };
// }

const OrganizationContactTab = (props) => {
  console.log(props);

  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    fetch(
      process.env.NEXT_PUBLIC_STRAPI_URL +
        "/api/organizations/" +
        props.id +
        "?populate=featureImage",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => setOrgs([response.data]))
      .catch((error) => error);
  }, [props.id]);

  console.log(props.organization);
  return (
    <div className="flex justify-between items-center w-[60vw] mx-auto py-8">
      {/* <div className=' flex min-w-1/2 grow overflow-y-auto overflow-x-hidden'> */}

      {/* left Contact */}
      <div className="w-[35%] h-full">
        {/* where to find us */}
        <div className="flex flex-col  mb-4">
          <h2 className="text-2xl font-roboto-slab-bold">Where to find us</h2>

          <div className="flex">
            <i className="fa-sharp fa-solid fa-location-dot text-sm mr-2 text-dark-green"></i>
            <h4>{props.organization.data.attributes.street + ', ' + props.organization.data.attributes.city + ', ' + props.organization.data.attributes.state}</h4>
          </div>

          <div className="flex">
            <i class="fa-solid fa-phone text-sm mr-2 text-dark-green"></i>
            <h4>{props.organization.data.attributes.phoneContact}</h4>
          </div>

          <div className="flex">
            <i class="fa-sharp fa-solid fa-envelope text-sm mr-2 text-dark-green"></i>
            <h4>{props.organization.data.attributes.emailContact}</h4>
          </div>
        </div>

        {/* Social Medias */}
        <div className="flex flex-col mb-4 ">
          <h2 className="text-2xl font-roboto-slab-bold">Social Medias</h2>

          <div className="flex">
            <i class="fa-brands fa-twitter text-sm mr-1 text-dark-green"></i>
            <h4>{props.organization.data.attributes.socialTwitter}</h4>
          </div>

          <div className="flex">
            <i class="fa-brands fa-instagram text-sm mr-1 text-dark-green"></i>
            <h4>{props.organization.data.attributes.socialInstagram}</h4>
          </div>

          <div className="flex">
            <i class="fa-brands fa-facebook text-sm mr-1 text-dark-green"></i>
            <h4>{props.organization.data.attributes.socialFacebook}</h4>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-roboto-slab-bold">Business Hours</h2>

          <div className="flex justify-between">
            <h4>Monday</h4>
            <h4 className="text-dark-green">9AM - 5PM</h4>
          </div>
          <div className="flex justify-between">
            <h4>Tuesday</h4>
            <h4 className="text-dark-green">9AM - 5PM</h4>
          </div>
          <div className="flex justify-between">
            <h4>Wednesday</h4>
            <h4 className="text-dark-green">9AM - 5PM</h4>
          </div>
          <div className="flex justify-between">
            <h4>Thursday</h4>
            <h4 className="text-dark-green">9AM - 5PM</h4>
          </div>
          <div className="flex justify-between">
            <h4>Friday</h4>
            <h4 className="text-dark-green">9AM - 5PM</h4>
          </div>
          <div className="flex justify-between">
            <h4>Saturday</h4>
            <h4 className="text-dark-green">9AM - 1PM</h4>
          </div>
          <div className="flex justify-between">
            <h4>Sunday</h4>
            <h4 className="text-dark-green">Closed</h4>
          </div>
        </div>
      </div>

      {/* right Map */}
      <div className="w-[55%] h-[450px] rounded overflow-hidden shadow">
        <Map
          eventMarkers={[]}
          orgMarkers={orgs.map((org) =>
            Object({
              title: org.attributes.name,
              street: org.attributes.street,
              city: org.attributes.city,
              state: org.attributes.state,
              coverImageUrl:
                process.env.NEXT_PUBLIC_STRAPI_URL +
                org.attributes.featureImage.data.attributes.url,
              lat: org.attributes.latitude,
              lng: org.attributes.longitude,
            })
          )}
        />
      </div>
    </div>
  );
};

export default OrganizationContactTab;
