import { motion } from "framer-motion";
import EventBanner from "../assets/eventBanner.png"; // fallback image

/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/**
 * EventCard that holds all information on events.
 * @param {eventData}props
 * @returns jsx
 */

function EventCard(props) {
  // Build a descriptive, concise alt text. Allow override via props.alt if ever needed.
  const altText =
    props.alt ||
    `${props.name} promotional image for event at ${props.place} (${props.date})`;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.25,
          delay: props.id / 5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="card lg:card-side bg-secondary shadow-xl lg:ml-20 lg:mr-20 m-10 grayscale hover:grayscale-0">
          <figure
            className="aspect-square lg:max-w-72 w-full overflow-hidden"
            aria-label={`${props.name} event image`}
          >
            <img
              src={props.pic || EventBanner}
              alt={altText}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                if (e.currentTarget.src !== EventBanner) {
                  e.currentTarget.src = EventBanner;
                }
              }}
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title">
              {props.name}! {props.date}
            </h1>
            <h2>{props.description}</h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${props.address.replace(
                / /g,
                ""
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="font-medium">{props.place}</h3>
              <h3>Location: {props.address}</h3>
            </a>
            <div className="card-actions justify-end">
              <a href={props.linkToTickets} target="_blank" rel="noreferrer">
                <button className="btn btn-primary">Get Tickets!</button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default EventCard;
