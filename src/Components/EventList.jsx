import eventData from "../eventsData";
import EventCard from "./EventCard";

function EventList() {
  if (eventData.length == 0) {
    return (
      <>
        <div className="h-[80svh] flex items-center justify-center">
          <h1> There is nothing here.</h1>
        </div>
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
