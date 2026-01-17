import marker from "../assets/marker.png"
/* import data from "../data" */

export default function Entry(props) {  
  return(
    
    <main className="container">
      <article className="journal-entry">
        <div className="main-img-container">
          <img className="main-img" src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="info-container">
          <img className="marker" src={marker} alt="Map Marker Icon" />
          <span className="country">{props.country}</span>
          <a href={props.googleMapsLink} target="blank">View on Google Maps</a>
          <h2 className="entry-title">{props.title}</h2>
          <p className="trip-dates">{props.dates}</p>
          <p className="entry-text">{props.text}</p>
        </div>

      </article>
    </main>
  )
}