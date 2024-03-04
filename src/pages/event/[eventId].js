import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import EventHero from "@/components/individual-event/EventHero";
import EventNavigationTabs from "@/components/individual-event/EventNavigationTabs";
import EventDetailsTab from "@/components/individual-event/EventDetailsTab";
import EventMapTab from "@/components/individual-event/EventMapTab";
import EventPhotosTab from "@/components/individual-event/EventPhotosTab";
import EventContactTab from "@/components/individual-event/EventContactTab";
import Footer from "@/components/Footer";

export default function IndividualEventsDetails({ event }) {
  const [activeTab, setActiveTab] = useState('EventDetailsTab');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'EventDetailsTab':
        return <EventDetailsTab />;
      case 'EventMapTab':
        return <EventMapTab />;
      case 'EventPhotosTab':
        return <EventPhotosTab />;
      case 'EventContactTab':
        return <EventContactTab />;
      default:
        return null;
    }
  };

  return (
    <div>
      <EventHero eventData={event}/>
      <EventNavigationTabs activeTab={activeTab} onTabChange={handleTabChange} />
      {renderActiveTab()}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { eventId } = context.params;

  try {
    const res = await fetch(`https://strapi.discoverlincoln-c9.civiconnect.net/api/events/${eventId}?populate=coverImage`);
    const eventData = await res.json();

    if (!eventData) {
      return { notFound: true };
    }

    return { props: { event: eventData } };
  } catch (error) {
    console.error('Failed to fetch event data:', error);
    return { notFound: true };
  }
}