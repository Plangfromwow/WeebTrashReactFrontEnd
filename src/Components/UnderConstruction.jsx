import CityViewTemp from "../assets/CONSTRCANLOGO_BLACK.svg";

export default function UnderConstruction() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${CityViewTemp})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md lg:max-w-3xl"></div>
        <h1 className="mb-5 text-5xl font-bold text-base-100">
          We are working on something special for you...{" "}
          <span
            className="bg-gradient-to-r bg-clip-text  text-transparent 
            from-accent to-base-100
            animate-text"
          >
            coming soon!
          </span>
        </h1>
      </div>
    </div>
  );
}
