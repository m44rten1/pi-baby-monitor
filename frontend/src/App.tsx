/* tslint:disable */

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Peer from "peerjs";

const peer = new Peer(); // random id

// Connect to pi
peer.on("open", () => {
  const conn = peer.connect("test_test_test1234567890");
  console.log("Connection: ", conn);
  conn.send("hi!");
  // on open will be launch when you successfully connect to PeerServer
  conn.on("open", () => {
    // here you have conn.id
    console.log("Connected and sending...");
    conn.send("hi! from iphone network!");
  });

  conn.on("data", (data) => {
    console.log("I received:", data);
  });

  peer.on("call", function (call) {
    // Answer the call, providing our mediaStream
    call.answer(undefined);

    call.on("stream", function (stream) {
      console.log("Raspberry stream: ", stream);

      const video = document.getElementById("video") as HTMLVideoElement;

      if (video) {
        video.srcObject = stream;
        video.play();
        console.log("Video binded...");
      }
    });
  });
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video id="video"></video>
        <div>Test</div>
      </header>
    </div>
  );
}

export default App;
