/* eslint-disable react/no-unescaped-entities */
export default function EventHero() {
  return (
    <>
      <div className="hero bg-secondary" id="contact-us">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold mb-5">
                We love events! Come see us!
            </h1>
            <a href="/events">
              <button className="btn btn-primary">JOIN US</button>
            </a>
          </div>
          <img
            src="..\\pics\\WeebTrashEventPic.jpeg"
            className=" lg:md:max-w-md rounded-full shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}
