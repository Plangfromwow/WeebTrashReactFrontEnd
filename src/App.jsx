import "./App.css";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Reviews></Reviews>
      </section>
      <section>
        <Contact></Contact>
      </section>
    </>
  );
}

export default App;
