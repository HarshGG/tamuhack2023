import "./App.css";
import io from "socket.io-client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import logo_image from "./images/logo_wbg.png";
import logo_anim from './images/animated_logo_trans.gif';
import logo_trans from './images/logo_trans.png';
import user_icon from './images/user-icon.png';
import logout from './images/logout.svg';

import Header from "./components/Header"
import Menu from "./components/Menu"
import Chat from "./pages/Chat";
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import CheckIn from "./pages/Check-in"
import FlightInfo from "./pages/Flight-info"
import Forum from "./pages/forum/Forum"

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [flightNum, setFlightNum] = useState("");
  const [pageState, setPageState] = useState("exit");
  const menuOptions = ["exit", "home", "flight info", "forum", "chat"];
  
  /* Code for LANDING/CHECKIN */
  //---------------------------------------------------
  const onEnterUsername = (event) => {
    setUsername(event.target.value);
  }
  const onEnterFlightNum = (event) => {
    setFlightNum(event.target.value);
  }
  function onClickGo () {
    if(username === "") {
      alert("Please enter a username!");
    }
    if(flightNum === "") {
      alert("Please enter a flight number!");
    }
    else if(username !== "" && flightNum !== "") {
      setPageState(2);
    }
  }
  //---------------------------------------------------

  /* Code for CHAT */
  // ----------------------------------------------------
  function onGoToChat() {
    setPageState(4);
    joinRoom();
  }
  const socket = io.connect("http://localhost:3001");
  const [roomState, setRoomState] = useState("defaultRoom");
  const joinRoom = () => {
    let room = flightNum;
    if (username !== "" && room !== "") {
      console.log(username, '-', room)
      socket.emit("join_room", room);
    }
    setRoomState(room);
  }

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: flightNum,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      console.log(messageData)
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      if(!messageList.includes(data) && data.author !== username) {
        console.log(username, 'received', data)
        setMessageList((list) => [...list, data]);
      }
    });
  }, [socket]);

    //---------------------------------------------------

    /*Code for FLIGHT INFO*/
    //---------------------------------------------------
    var flightInfoDict = {
      ICAO: 'AAL',
      flightNum: 1872,
      IATA:'AA',
      dep_airport: 'IAH',
      dep_city: 'Houston',
      dep_state: 'Texas',
      dep_country: 'United States',
      t_now: new Date(),
      dep_time: (new Date()).getTime(),
      gate: 22,
      terminal: 'A',
      dest_airport: 'CMH',
      dest_city: 'Columbus',
      dest_state: 'Ohio',
      dest_country: 'United States',
      dest_time: (new Date()).getTime(),
      status: 'On-time',
    }
    //---------------------------------------------------

    /* Code for FORUM/RECS*/
    //---------------------------------------------------
    //---------------------------------------------------

  return (
    <div class="App">
      {!(pageState == "exit") && <Menu window={pageState} setWindow={setPageState} menuItems={menuOptions}/>}
      {/* Landing page */}
      { pageState === "exit" ? 
        (
          <div class="basic-background">
            <h1 class="home-heading">Project Name</h1> 
            <div>
              <img src={logo_anim} class="center"/>
            </div>
            <div>Please enter a good name for you :)</div>
              <input class="username-input" type="text" placeholder="Your name..." onChange={onEnterUsername}></input>
            <div>Please enter your flight number</div>
              <input class="username-input" type="text" placeholder="For example AA1234..." onChange={onEnterFlightNum}></input>
              <button class="button-main" onClick={onClickGo}>
                  <div class="go-button">
                      <div>Go</div>
                      <div><img src={logo_trans} class="go-image" style={{display: "inline-block"}}/></div>
                  </div>
              </button>
          </div>
        // Home page
        ) : pageState === "home" ? (
          <div class="Home">
            <div class="app-nav-header">
                <img class="navbar-image" src={logo_trans}></img>
                <img class="navbar-image" src={user_icon}></img>
                <img class="navbar-image" src={logout}></img>
            </div>
            <div class="title-text">
                <h1>Welcome, {username}</h1>
                <h2>{flightNum}</h2>
            </div>
            <div style={{flex: 1, height: '1px', backgroundColor: 'black', margin: '15px'}} />
            <div class="tabs">
                <div class="navtab-row">
                    <div class="navtab">
                        <div>FLIGHT INFO</div>
                    </div>
                    <div class="navtab">
                        <div>RECOMMENDATIONS</div>
                    </div>
                </div>
                <div class="navtab-row">
                    <div class="navtab">
                        <div>FORUMS</div>
                    </div>
                    <div class="navtab">
                        <div>LOL</div>
                    </div>
                </div>
                <div class="chat-window" onClick={onGoToChat}>
                    CHAT
                </div>
            </div>
          </div>
          // Flight information
        )  : pageState === "flight info" ? (
          <div>
            <FlightInfo username={username} flightNum={flightNum}/>
          </div>

        // forum
        ) : pageState === "forum" ? (
          <div>
            <Forum/>
          </div>
        // Chat
      ) : pageState === "chat" ? (
        <div class="chat-background">
          <div class="chat-header">
            <div class="room-title">{flightNum}</div>
          </div>
          <div class="chat-body" id="scrollableChatBox">
              {messageList.map((messageContent) => {
                return (
                  <div
                    class="message"
                    id={username === messageContent.author ? "you" : "other"}
                  >
                    <div>
                      <div class="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      <div class="message-meta">
                        <p id="time">{messageContent.time}</p>
                        <p id="author">{messageContent.author}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div class="chat-footer">
            <input
              type="text"
              value={currentMessage}
              placeholder="Hey..."
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      ) : pageState === 5 || pageState === 6 ? (
            <>
              {/* <Menu window={window} setWindow={setWindow} menuItems={menuOptions}/>
              <div class="mainBody">
                  <div>{
                      (pageState === 5) 
                          ? <Recs params={params}></Recs>
                          : <Discussion></Discussion>
                  }</div>
              </div> */}
            </>
      ) : (<></>) }
    </div>
  );
}

export default App;
