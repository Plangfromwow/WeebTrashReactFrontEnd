import eventData from "../eventsData";
import EventCard from "./EventCard";

function EventList(){


    return <>
    {eventData.map((event)=>{
        return <div key={event.id}>
        
        <EventCard {...event} key={event.id}/>
        
        </div>
    })}
    
    </>
}


export default EventList