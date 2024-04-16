/* eslint-disable react/prop-types */
/**
 * EventCard that holds all information on events. 
 * @param {eventData}props
 * @returns jsx
 */

function EventCard(props) {

    return <>
    <div className="card lg:card-side bg-base-100 shadow-xl m-10">
  <figure><img src={props.pic} alt="Album"/></figure>
  <div className="card-body">
    <h1 className="card-title">{props.name}! {props.date}</h1>
    <h2>{props.description}</h2>
    <h3>Location: <a href={`https://www.google.com/maps/search/?api=1&query=${props.address.replace(/ /g,'')}`} target="_blank" rel="noreferrer">{props.address}</a></h3>
    <div className="card-actions justify-end">
      <a href={props.linkToTickets} target="_blank" rel="noreferrer"><button className="btn btn-primary">Get Tickets!</button></a>
    </div>
  </div>
</div>
    </>
}

export default EventCard;