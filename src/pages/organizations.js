import React, { useState, useEffect } from "react";
import StarRating from "@/components/StarRating";
import Buttons from "@/components/Buttons";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import OrgCard from "@/components/OrgCard";
import Link from "next/link";
// import Link from "next/link";

// Strapi Integration
// export async function getServerSideProps() {
//   // Fetch data from both external APIs concurrently
//   const [organizationsRes, reviewsRes] = await Promise.all([
//     fetch("https://strapi.discoverlincoln-c9.civiconnect.net/api/organizations?populate=*"),
//     fetch("https://strapi.discoverlincoln-c9.civiconnect.net/api/reviews?populate=*")
//   ]);

//   // Parse the responses as JSON
//   const organizations = await organizationsRes.json();
//   const reviews = await reviewsRes.json();

//   // Pass data to the page via props
//   return { props: { organizations, reviews } };
// }

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    "https://strapi.discoverlincoln-c9.civiconnect.net/api/organizations?populate=*"
  );
  const organizations = await res.json();
  // Pass data to the page via props
  return { props: { organizationData: organizations.data } };
}


export default function OrganizationsFeed({organizationData}) {

  const [previewOrgIndex, setPreviewOrgIndex] = useState(0);


  const [orgData, setOrgData] = useState(organizationData);
  
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState("All");

  useEffect(() => {
    let queryString = "/api/organizations?populate=featureImage,reviews";

    if (searchTerm) {
      queryString += "&filters[name][$containsi]=" + searchTerm;
    }

    if (searchCategory !== "All" && searchCategory !== "Other") {
      queryString += "&filters[typeOfOrganization][$eq]=" + searchCategory;
    } else if (searchCategory === "Other") {
      queryString += "&filters[typeOfOrganization][$notIn][0]=Restaurant&filters[typeOfOrganization][$notIn][1]=Entertainment&filters[typeOfOrganization][$notIn][2]=Shop&filters[typeOfOrganization][$notIn][3]=Winery"
    }

    fetch(process.env.NEXT_PUBLIC_STRAPI_URL + queryString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(response => setOrgData(response.data))
    .catch(error => error);
  }, [searchTerm, searchCategory])

  return (
    // parent core div
    <div className=" h-screen w-full text-white">
      <div className="flex flex-col w-full h-full grow">
        <div className="bg-cream inline-flex flex-col h-full">
          <div className="bg-cream w-full h-20 mt-16 px-8 inline-flex flex-row justify-between items-center border-b-2 border-dark-green">
            <div className="text-dark-green text-3xl font-roboto-slab-bold">
              Organizations
            </div>
            <div className="w-5/12 inline-flex flex-row justify-end gap-4 items-center">
              <div className="grow h-8 px-4 bg-white shadow rounded inline-flex justify-start items-center gap-2">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#102E1E", width: "15px", height: "15px" }}
                />
                <input
                  className="inline-flex h-full grow text-black text-l font-roboto"
                  type="text"
                  placeholder="Search..."
                  id="search"
                  name="search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* div for body */}
          <div className="inline-flex flex-row flex-auto w-full h-3/4 ">
            {/* left side for org cards */}
            <div className="bg-cream w-1/2 h-full inline-flex flex-col overflow-y-auto overflow-x-hidden relative">
              <div id="filter-list" className="bg-cream w-full z-50 shadow py-2 sticky top-0 left-0 z-50">
                <ul className=" flex gap-8 pl-8 align-middle font-roboto-slab-bold m-1 text-black cursor-pointer">
                  <li>
                    <h3 className={searchCategory === "All" ? "text-green border-b-2 border-green" : "text-black hover:text-blue hover:border-b-2"}
                        onClick={() => {setSearchCategory("All")}}
                    >
                      All
                    </h3>
                  </li>
                  <li>
                    <h3 className={searchCategory === "Restaurant" ? "text-green border-b-2 border-green" : "text-black hover:text-blue hover:border-b-2"}
                      onClick={() => {setSearchCategory("Restaurant")}}
                    >
                      Restaurants
                    </h3>
                  </li>
                  <li>
                    <h3 className={searchCategory === "Entertainment" ? "text-green border-b-2 border-green" : "text-black hover:text-blue hover:border-b-2"}
                      onClick={() => {setSearchCategory("Entertainment")}}
                    >
                      Entertainment
                    </h3>
                  </li>
                  <li>
                    <h3 className={searchCategory === "Shop" ? "text-green border-b-2 border-green" : "text-black hover:text-blue hover:border-b-2"}
                      onClick={() => {setSearchCategory("Shop")}}
                    >
                      Shopping
                    </h3>
                  </li>
                  <li>
                    <h3 className={searchCategory === "Winery" ? "text-green border-b-2 border-green" : "text-black hover:text-blue hover:border-b-2"}
                      onClick={() => {setSearchCategory("Winery")}}
                    >
                      Wineries
                    </h3>
                  </li>
                  <li>
                    <h3  className={searchCategory === "Other" ? "text-green border-b-2 border-green" : "text-black hover:text-blue hover:border-b-2"}
                      onClick={() => {setSearchCategory("Other")}}
                    >
                      Other
                    </h3>
                  </li>
                </ul>
              </div>

              {orgData.map((org, index) => {
                return (
                    <OrgCard
                      key={org.id}
                      id={org.id}
                      name={org.attributes.name}
                      street={org.attributes.street}
                      city={org.attributes.city}
                      state={org.attributes.state}
                      rating={Math.round(org.attributes.reviews.data.reduce((accumulator,review) => accumulator + review.attributes.rating, 0) / Math.max(org.attributes.reviews.data.length, 1))}
                      // rating={4}
                      dollarRating={
                        org.attributes.dollarRating
                          ? org.attributes.dollarRating
                          : 3
                      }
                      description={org.attributes.description}
                      imageUrl={
                        "https://strapi.discoverlincoln-c9.civiconnect.net" +
                        org.attributes.featureImage.data.attributes.url
                      }
                      onClick={() => {
                        setPreviewOrgIndex(index);
                      }}
                    />
                );
              })}
              {orgData.length === 0 && <p className="pt-8 text-center w-full font-roboto text-green" >No results.</p>}
            </div>

            {/* right side for the preview */}
            <div className="flex flex-col w-1/2 bg-dark-green pt-10 pl-16 overflow-auto">
              <h1 className="text-5xl font-roboto-slab-bold mb-2">
                {organizationData[previewOrgIndex].attributes.name}
              </h1>
              <h3 className="text-lg">{organizationData[previewOrgIndex].attributes.typeOfOrganization}</h3>

              {/* div for location and number */}
              <div className="my-5">
                <div className="flex gap-2">
                  <i className="fa-sharp fa-solid fa-location-dot text-sm"></i>
                  {/* <h4>Grand Canyon National Park, AZ</h4> */}
                  <h4>{organizationData[previewOrgIndex].attributes.street + ", " + organizationData[previewOrgIndex].attributes.city + ", " + organizationData[previewOrgIndex].attributes.state}</h4>
                  
                </div>

{
  
<div className="flex gap-2">
                  <i className="fa-solid fa-phone text-sm"></i>
                  <h4>{organizationData[previewOrgIndex].attributes.phoneContact}</h4>
                </div>
}
                
              </div>

              {/* using rating comp */}
              <StarRating className=" mb-5 text-white" rating={Math.round(organizationData[previewOrgIndex].attributes.reviews.data.reduce((accumulator,review) => accumulator + review.attributes.rating, 0) / Math.max(organizationData[previewOrgIndex].attributes.reviews.data.length, 1))} />

              {/* div for image */}
              <div>
                <Carousel images={organizationData[previewOrgIndex].attributes.images} />
              </div>

              {/* div for buttons */}
              <div className="flex  gap-5 pb-10">
                <Link href={"/organization/" + organizationData[previewOrgIndex].id}>
                    <Buttons
                      text={"More Info"}
                      color={"bg-green"}
                    />
                </Link>

                <Link href={"/organization/" + organizationData[previewOrgIndex].id + '?tab=OrganizationContactTab#tabs'}>
                    <Buttons
                      text={"Contact"}
                      color={"bg-green"}
                    />
                </Link>

                <Link href={"/organization/" + organizationData[previewOrgIndex].id + '?tab=OrganizationReviewsTab#tabs'}>
                    <Buttons
                      text={"Reviews"}
                      color={"bg-green"}
                    />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
