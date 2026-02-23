import eventData from "../eventsData";
import EventCard from "./EventCard";
import WnLogo from "../assets/beachweeb.svg?react";


function EventList() {
  if (eventData.length == 0) {
    return (
      <>
        <div className="h-[85vh] flex items-center justify-center">
          <WnLogo></WnLogo>
          <br/>
        </div>
        <h2 className="text-3xl text-center flex items-center justify-center pb-10">We&apos;re kicking our feet up, more events coming soon.</h2>
      </>
    );
  }

  return (
    <>
      {eventData.map((event) => {
        return (
          <div key={event.id}>
            <EventCard {...event} key={event.id} />
          </div>
        );
      })}
    </>
  );
}

export default EventList;
