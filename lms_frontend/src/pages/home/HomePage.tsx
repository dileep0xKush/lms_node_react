import Hero from '../../components/Hero';
import TrustedBy from '../../components/TrustedBy';
import PopularCourses from '../../components/PopularCourses';
import Reviews from '../../components/Reviews';
import Mentors from '../../components/Mentors';
import Contact from '../../components/Contact';
import Newsletter from '../../components/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <PopularCourses />
      <Reviews />
      <Mentors />
      <Contact />
      <Newsletter />
    </>
  );
}
