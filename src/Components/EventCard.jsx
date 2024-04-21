/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/**
 * EventCard that holds all information on events. 
 * @param {eventData}props
 * @returns jsx
 */

function EventCard(props) {

    return <>
    <div className="card lg:card-side bg-base-100 shadow-xl m-10">
  <figure className="aspect-square max-w-72"><img src={props.pic} alt="MonroePopFestSplash"/></figure>
  <div className="card-body">
    <h1 className="card-title">{props.name}! {props.date}</h1>
    <h2>{props.description}</h2>
    <a href={`https://www.google.com/maps/search/?api=1&query=${props.address.replace(/ /g,'')}`} target="_blank" rel="noreferrer">
    <h3 className="font-medium">{props.place}</h3>
    <h3>Location: {props.address}</h3>
    </a>
    <div className="card-actions justify-end">
      <a href={props.linkToTickets} target="_blank" rel="noreferrer"><button className="btn btn-primary">Get Tickets!</button></a>
    </div>
  </div>
</div>
    </>
}

export default EventCard;