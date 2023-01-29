import "./Flight-info.css"
import logo_trans from '../images/logo_trans.png';
import { useEffect, useState } from "react";
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

const FlightInfo = ({username, flightNum}) => {
    var username = username;
    const [ICAO, setICAO] = useState(null);
    var flightNumber = flightNum;
    var lastNumbers = flightNumber.slice(2,);
    const [IATA, setIATA] = useState(null);
    // var airline = null;
    const [airline, setAirline] = useState(null);
    const [dep_airport, setDepAirport] = useState(null);
    
    const now = new Date();
    const [dep_time, setDepTime] = useState(null);  // change to dep time
    const [dep_gate, setDepGate] = useState(null);
    const [dep_terminal, setDepTerminal] = useState(null);
    const [dest_gate, setDestGate] = useState(null);
    const [dest_terminal, setDestTerminal] = useState(null);
    const [dest_airport, setDestAirport] = useState(null);
    const [dest_time, setDestTime] = useState(null);  // change to dest time
    const [status, setStatus] = useState(null);
    const { parse } = require('path');
    const Http1 = new XMLHttpRequest();
    const Http2 = new XMLHttpRequest();
    const Http3 = new XMLHttpRequest();

    const url1 = 'https://aviation-edge.com/v2/public/airlineDatabase?key=39d767-2c05a8&codeIataAirline='+flightNumber.slice(0,2);
    const url2 = 'https://aviation-edge.com/v2/public/flights?key=39d767-2c05a8';
    const url3 = 'https://aviation-edge.com/v2/public/timetable?key=39d767-2c05a8';
    
    Http1.open("GET", url2+'&airlineIata='+flightNumber.slice(0, 2)+'&limit=1', true);
    Http1.send();
    Http1.onreadystatechange=(e)=>{
        if (Http1.response !== ''){
            var data1 = JSON.parse(Http1.response);
            if (data1 !== null) {
                console.log(data1);
                var icaoAirline = data1[0]['airline']['icaoCode'];
                var fN = lastNumbers;
                getData2(icaoAirline, fN);
            }
        }
    }
    function getData2(icao, flightNum) {
        const param2 = '&airlineIcao=' + icao + '&flightNum='+flightNum;
        Http2.open("GET", url2+param2, true);
        Http2.send();
    }
    Http2.onreadystatechange=(e)=>{
        if (Http2.response !== ''){
            var data2 = JSON.parse(Http2.response);
            if (data2 !== null) {
                var iata_dep = data2[0]['departure']['iataCode'];
                getData3('&type=departure&iataCode='+iata_dep+'&flight_num='+lastNumbers);
            } 
        }        
    }
    function getData3(p3) {
        Http3.open("GET", url3+p3, true);
        console.log(url3+p3);
        Http3.send();
    }
    Http3.onreadystatechange=(e)=>{
        if (Http3.response !== '') {
            var data3 = JSON.parse(Http3.response);
            if (data3 !== '') {
                var obj = data3[0];
                console.log(obj);
                setAirline(obj['airline']['name']);
                setICAO(obj['airline']['icaoCode']);
                setStatus(obj['status']);
                flightNum = lastNumbers;
                setIATA(obj['airline']['iataCode']);
                setDepAirport(obj['departure']['iataCode']);
                setDestTime(obj['departure']['scheduledTime'].split('T')[0] + ' ' + obj['departure']['scheduledTime'].split('T')[1]);
                setDepGate(obj['departure']['gate']);
                setDepTerminal(obj['departure']['terminal']);
                
                setDestGate(obj['arrival']['gate']);
                setDestTerminal(obj['arrival']['terminal']);
                setDestTime(obj['arrival']['scheduledTime'].split('T')[0] + ' ' + obj['arrival']['scheduledTime'].split('T')[1]);
                setDestAirport(obj['arrival']['iataCode']);
            } 
        }

    }

    
    return (
        <div class='basic-background'>
            <h1 class='h1'>Flight Details</h1>

            <div class="left">Hello, {username}</div>
            
            <div class="bigBox">
                <div>Flight Number: {IATA + lastNumbers}</div>
                <div>Airline: {airline}</div>
                <div>Status: {status}</div>
                <div>Departue Time: {dep_time}</div>
                <div>Arrival Time: {dest_time}</div>
            </div>

            <div class="sideBySide">
                <div class="box">
                    <div class="center">{dep_airport}</div>
                    <div>{((dep_terminal == null) ? 'NA' : dep_terminal) + " " + dep_gate}</div>
                    
                </div>

                <img src={logo_trans} class="logo" style={{display: "inline-block"}}/>

                <div class="box">
                    <div class="center">{dest_airport}</div>
                    <div>{((dest_terminal == null) ? 'NA' : dest_terminal) + " " + dest_gate}</div>
                </div>
            </div>

            <div class="grid">
                <a href={"https://flightaware.com/live/flight/" + ICAO + flightNum} target='_blank'>
                    <button className="button-main">View Location</button>
                </a>

                <div>
                    <button onClick={() => click1('https://flightaware.com/live/flight/' + ICAO + flightNum)} className="button-main">Send Location</button>
                </div>
            </div>
            
        </div>
    )
}

export default FlightInfo;