import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Reviews from "../Components/Reviews";
import EventHero from "../Components/EventsHero";

function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <EventHero />
      </section>
      <section>
        <Contact></Contact>
      </section>
      <section>
        <Reviews></Reviews>
      </section>
    </>
  );
}

export default Home;
