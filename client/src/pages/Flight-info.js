import "./Flight-info.css"
import logo_trans from '../images/logo_trans.png';

function click1(link) {
     // Copy the text inside the text field
    navigator.clipboard.writeText(link);
  
    // Alert the copied text
    alert("Copied link to clipboard");
  }

function flightType(dep_country, dest_country) {
    var domestic = true;
    
    if (dep_country !== dest_country) {
        domestic = false;
        return domestic;
    }

    return domestic;
}

const FlightInfo = ({username}, {flightNum}) => {
    var username = username;
    var ICAO = 'AAL';
    var flightNum = flightNum;
    var IATA = 'AA';
    var airline = 'American Airlines'
    var dep_airport = 'IAH';
    var dep_city = 'Houston';
    var dep_state = 'TX';
    var dep_country = 'United States';
    const now = new Date();
    var dep_time = now.getTime();  // change to dep time
    var dep_gate = 22;
    var dep_terminal = 'A';
    var dest_gate = 11;
    var dest_terminal = 'C';
    var dest_airport = 'CMH';
    var dest_city = 'Columbus';
    var dest_state = 'OH';
    var dest_country = 'United States';
    var dest_time = now.getTime();  // change to dest time
    var status = 'On-time';
    
    
    return (
        <div class='background'>
            <h1 class='h1'>Flight Details</h1>

            <div class="left">Hello, {username}</div>
            
            <div class="bigBox">
                <div>Flight Number: {IATA + flightNum}</div>
                <div>Airline: {airline}</div>
                <div>Status: {status}</div>
            </div>

            <div class="sideBySide">
                <div class="box">
                    <div>{dep_airport}</div>
                    <div>{dep_terminal + dep_gate}</div>
                    <div>{dep_city + ', ' + dep_state}</div>
                    <div>{!flightType() ? dep_country : ''}</div>
                </div>

                <img src={logo_trans} class="logo" style={{display: "inline-block"}}/>

                <div class="box">
                    <div>{dest_airport}</div>
                    <div>{dest_terminal + dep_gate}</div>
                    <div>{dest_city + ', ' + dep_state}</div>
                    <div>{!flightType() ? dest_country : ''}</div>
                </div>
            </div>

            {/* ({now} < {dep_time}) ? () */}

            <a href={"https://flightaware.com/live/flight/" + ICAO + flightNum} target='_blank'>
                <button className="button-main">View Location</button>
            </a>

            <div>
                <button onClick={() => click1('https://flightaware.com/live/flight/' + ICAO + flightNum)} className="button-main">Send Location</button>
            </div>
            
        </div>
    )
}

export default FlightInfo;