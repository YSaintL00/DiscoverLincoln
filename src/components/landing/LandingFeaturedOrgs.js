import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faBullseye, faCommentsDollar, faUsersLine} from "@fortawesome/free-solid-svg-icons";

import OrgCard from "@/components/OrgCard";

export default function LandingFeaturedOrgs() {

    const [orgs, setOrgs] = useState([]);

    useEffect(() => {
      fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/organizations?populate=featureImage,reviews&sort=id", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          }
      })
      .then((response) => response.json())
      .then((response) => setOrgs(response.data))
      .catch((error) => error);
    }, []);

    return (
        <div className="w-full h-screen shadow-[0_0px_32px_rgba(0,0,0,0.3)]">
            <div className="w-full h-full bg-dark-green relative overflow-hidden">
                <div className='h-[100rem] w-6 bg-darker-green absolute -left-[3%] origin-top-left -rotate-[50deg] z-0'></div>
                <div className="z-10 flex flex-row w-full h-full items-center justify-center">
                    <div className="w-1/2 h-full pl-16 inline-flex flex-col justify-center items-center z-10">
                        <div className="inline-flex flex-col justify-center items-start text-white gap-14 z-10">
                            <div>
                                <div className="font-roboto-slab-bold text-xl">WELCOME TO</div>
                                <div className="font-roboto-slab-bold text-4xl">Our Featured Organizations</div>
                            </div>
                            <div className="inline-flex flex-row justify-start items-center max-w-full gap-8">
                                <FontAwesomeIcon icon={faChartLine} style={{color: "white", width: "60px", height: "60px" }} />
                                <div className="max-w-96">
                                    <div className="text-2xl font-roboto-slab-bold mb-2">Increased Visibility</div>
                                    <div className="text-wrap text-lg font-roboto">Your business gains a spot in the spotlight, ensuring that it&apos;s seen by both residents and tourists visiting Lincoln.</div>
                                </div>
                            </div>
                            <div className="inline-flex flex-row justify-start items-center max-w-full gap-8">
                                <FontAwesomeIcon icon={faBullseye} style={{color: "white", width: "60px", height: "60px" }} />
                                <div className="max-w-96">
                                    <div className="text-2xl font-roboto-slab-bold mb-2">Targeted Audience</div>
                                    <div className="text-wrap text-lg font-roboto">Connect with potential customers who are actively looking for local attractions, events, and services.</div>
                                </div>
                            </div>
                            <div className="inline-flex flex-row justify-start items-center max-w-full gap-8">
                                <FontAwesomeIcon icon={faCommentsDollar} style={{color: "white", width: "60px", height: "60px" }} />
                                <div className="max-w-96">
                                    <div className="text-2xl font-roboto-slab-bold mb-2">Cost-Effective Promotion</div>
                                    <div className="text-wrap text-lg font-roboto">Enjoy a cost-effective way to advertise your business and increase brand awareness.</div>
                                </div>
                            </div>
                            <div className="inline-flex flex-row justify-start items-center max-w-full gap-8">
                                <FontAwesomeIcon icon={faUsersLine} style={{color: "white", width: "60px", height: "60px" }} />
                                <div className="max-w-96">
                                    <div className="text-2xl font-roboto-slab-bold mb-2">Marketing Platform</div>
                                    <div className="text-wrap text-lg font-roboto">Utilize the platform to promote special offers, events, and updates to a captive audience.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full inline-flex flex-col justify-center justify-self-center pr-16">
                        <div className="overflow-y-auto overflow-x-hidden">
                            <div className="min-w-ful h-full flex flex-col justify-start gap-6">
                                {orgs.map(org => 
                                    <OrgCard
                                        key={org.id}
                                        id={org.id}
                                        name={org.attributes.name}
                                        street={org.attributes.street}
                                        city={org.attributes.city}
                                        state={org.attributes.state}
                                        rating={Math.round(org.attributes.reviews.data.reduce((acc, rev) => acc + rev.attributes.rating, 0) / Math.max(org.attributes.reviews.data.length, 1))}
                                        dollarRating={org.attributes.dollarRating ? org.attributes.dollarRating : 3}
                                        description={org.attributes.description}
                                        imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + org.attributes.featureImage.data.attributes.url}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}