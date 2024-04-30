/* eslint-disable react/no-unescaped-entities */
export default function EventHero() {
  return (
    <>
      <div className="bg-neutral h-4"></div>
      <div className="hero min-h-96" id="EventsHero"
      style={{
        // eslint-disable-next-line no-undef
        backgroundImage: `url("../pics/WeebTrashEventPic.jpeg")`,
      }}
      >
              <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold mb-5 text-base-100">
              Come see us LIVE at events!            
            </h1>
            <a href="/events">
              <button className="btn btn-primary">Meet Us!</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
