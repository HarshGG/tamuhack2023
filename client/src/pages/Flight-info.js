import "./Flight-info.css"

const FlightInfo = () => {
    var ICAO = 'AAL';
    var flightNum = 1872;
    var IATA = 'AA';
    var dep_airport = 'IAH';
    var dep_city = 'Houston';
    var dep_state = 'Texas';
    var dep_country = 'United States';
    const now = new Date();
    var dep_time = now.getTime();
    var gate = 22;
    var terminal = 'A';
    var dest_airport = 'CMH';
    var dest_city = 'Columbus';
    var dest_state = 'Ohio';
    var dest_country = 'United States';
    var dest_time = now.getTime();
    var status = 'On-time';
    
    
    return (
        <div class='background'>
            <h1 class='center'>Flight Information</h1>
            <a href={"https://flightaware.com/live/flight/" + ICAO + flightNum} target='_blank'>
                <button className="button-main">View Location</button>
            </a>
            <div>Flight Number: {IATA + flightNum}</div>
            <div>Gate: {terminal + gate}</div>
            <div>{dep_airport} -> {dest_airport}</div>
            <div>{dep_city}, {dep_state}  to  {dest_city}, {dest_state}</div>

            
            
            
        </div>
    )
}

export default FlightInfo;