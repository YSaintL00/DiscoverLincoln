import FeaturedEventsCarousel from "@/components/landing/FeaturedEventsCarousel";
import LandingHero from "@/components/landing/LandingPageHero";
import LandingFeaturedOrgs from "@/components/landing/LandingFeaturedOrgs";
import LandingAbout from "@/components/landing/LandingAbout";

export default function index({ featuredEvents: events }) {
  return (
    <div>
      <LandingHero />
      <FeaturedEventsCarousel events={events} />
      <LandingFeaturedOrgs />
      <LandingAbout />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://strapi.discoverlincoln-c9.civiconnect.net/api/events?populate=*`
  );
  const featuredEvents = await res.json();

  if (!featuredEvents) {
    return { notFound: true };
  }

  return { props: { featuredEvents } };
}
