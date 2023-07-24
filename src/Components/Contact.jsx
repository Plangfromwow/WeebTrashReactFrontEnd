/* eslint-disable react/no-unescaped-entities */
import TrashCan from "../assets/TrashCanNoBackground.png";

export default function Contact() {
  return (
    <>
      <div className="hero bg-secondary" id="contact-us">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={TrashCan}
            className=" lg:md:max-w-sm rounded-full shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-5">Let us know what's up</h1>
            <a href="mailto:weebtrashorg@gmail.com ">
              <button className="btn btn-primary">Email Us</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
