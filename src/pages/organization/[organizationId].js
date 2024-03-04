import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import OrganizationHero from '@/components/individual-organization/OrganizationHero';
import Footer from '@/components/Footer';
import OrganizationNavigationTabs from '@/components/individual-organization/OrganizationNavigationTabs';
import OrganizationEventsTab from '@/components/individual-organization/OrganizationEventsTab';
import OrganizationContactTab from '@/components/individual-organization/OrganizationContactTab';
import OrganizationReviewsTab from '@/components/individual-organization/OrganizationReviewsTab';
import {  useSearchParams } from 'next/navigation';

export default function IndividualOrganization({ organization, reviews }) {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  console.log(tab)

  const [activeTab, setActiveTab] = useState(tab || 'OrganizationEventsTab');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "OrganizationEventsTab":
        return <OrganizationEventsTab id={organization.data.id} />;
      case "OrganizationReviewsTab":
        return <OrganizationReviewsTab reviews={reviews} />;
      case "OrganizationContactTab":
        return <OrganizationContactTab organization={organization} id={organization.data.id} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <OrganizationHero organizationData={organization} />
      <OrganizationNavigationTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      {renderActiveTab()}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { organizationId } = context.params;

  try {
    // Fetch organization data
    const orgRes = await fetch(
      `https://strapi.discoverlincoln-c9.civiconnect.net/api/organizations/${organizationId}?populate=*`
    );
    const organizationData = await orgRes.json();

    // Fetch reviews data
    const reviewsRes = await fetch(
      `https://strapi.discoverlincoln-c9.civiconnect.net/api/reviews?populate=organization&filters[organization][id][$eq]=${organizationId}`
    );
    const reviewsData = await reviewsRes.json();

    if (!organizationData || !reviewsData) {
      return { notFound: true };
    }

    return { props: { organization: organizationData, reviews: reviewsData } };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { notFound: true };
  }
}
