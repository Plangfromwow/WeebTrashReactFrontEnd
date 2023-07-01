import "./App.css";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <>
      <section className="m-1">
        <Hero />
      </section>
      <section className="m-1">
        <Reviews></Reviews>
      </section>
      <section className="m-1">
        <Contact></Contact>
      </section>
    </>
  );
}

export default App;
