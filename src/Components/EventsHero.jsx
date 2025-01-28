import eventBanner from "../assets/eventBanner.png";
/* eslint-disable react/no-unescaped-entities */
export default function EventHero() {
  return (
    <>
      <div
        className="hero min-h-96 grayscale"
        id="EventsHero"
        style={{
          // eslint-disable-next-line no-undef
          backgroundImage: `url(${eventBanner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold mb-5 text-base-100">
            Check out our Weeb Store!
            </h1>
            <a href="/events">
              <button className="btn btn-primary">shop our figures!</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
