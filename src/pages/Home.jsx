import HeroSection from "../components/home/HeroSection";
import IntroStrip from "../components/home/IntroStrip";
import AboutSection from "../components/home/AboutSection";
import EventsSection from "../components/home/EventsSection";
import VolunteerSection from "../components/home/VolunteerSection";
import ActionPlanSection from "../components/home/ActionPlanSection";
import GallerySection from "../components/home/GallerySection";
import NewsletterSection from "../components/home/NewsletterSection";
import SupportSection from "../components/home/SupportSection";
import PartnersSection from "../components/home/PartnersSection";
import UsefulInfoSection from "../components/home/UsefulInfoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroStrip />
      <AboutSection />
      <PartnersSection />
      <EventsSection />
      <VolunteerSection />
      <ActionPlanSection />
      <GallerySection />
      <UsefulInfoSection/>
      <SupportSection />
      <NewsletterSection />
    </>
  );
}
