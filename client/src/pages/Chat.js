import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import "./Chat.css"

function Chat({ username, socket, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(username, 'received', data)
      if(!messageList.includes(data)) {
        setMessageList((list) => [...list, data]);
      }
    });
  }, [socket]);

  return (
    <div class="chat-background">
        <div class="chat-header">
          <div class="room-title">{room}</div>
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
  );
}

export default Chat;
