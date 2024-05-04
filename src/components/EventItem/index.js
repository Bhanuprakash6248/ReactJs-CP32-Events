// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, toggleList} = props
  const {id, imageUrl, name, location} = eventDetails

  const listClicked = () => {
    toggleList(id)
  }

  return (
    <li className="li-eventItem">
      <button className="li-btn" type="button" onClick={listClicked}>
        <img src={imageUrl} alt="event" className="li-img" />
      </button>
      <p className="li-name">{name}</p>
      <p className="li-location">{location}</p>
    </li>
  )
}

export default EventItem
