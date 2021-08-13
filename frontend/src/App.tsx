/* tslint:disable */

import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "./App.css";

import Peer, { util } from "peerjs";

declare global {
  interface Window {
    peerjs: { util: util };
  }
}

type SignInInfo = {
  id: string;
  password: string;
  rememberMe: boolean;
};

let defaultSignInInfo: SignInInfo = {
  id: "",
  password: "",
  rememberMe: false,
};
const SIGN_IN_INFO_KEY = "SIGN_IN_INFO";
const storedSignInInfo = localStorage.getItem(SIGN_IN_INFO_KEY);

if (storedSignInInfo) {
  defaultSignInInfo = JSON.parse(storedSignInInfo);
}

const App = () => {
  const [connected, setConnected] = useState(false);
  const [signInInfo, setSignInInfo] = useState(defaultSignInInfo);
  const [isLoading, setIsLoading] = useState(false);

  const onSignInInfoChange = <P extends keyof SignInInfo>(
    prop: P,
    value: SignInInfo[P]
  ) => {
    setSignInInfo({ ...signInInfo, [prop]: value });
  };

  const connect = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const peer = new Peer();
    peer.on("open", () => {
      const conn = peer.connect(signInInfo.id);
      conn.on("open", () => {
        conn.send(signInInfo.password);
      });

      conn.on("data", (data) => {
        if (data === "wrong") {
          setIsLoading(false); // TODO: show wrong password message..., add timeout also?
        }

        if (data === "permission-failure") {
          setIsLoading(false); // TODO: handle no permissions error...
        }
      });
    });

    peer.on("call", (call) => {
      call.answer(undefined);

      call.on("stream", (stream) => {
        setIsLoading(false); // TODO: switch to video view here, unhide video...
        setConnected(true);
        if (signInInfo.rememberMe)
          localStorage.setItem(SIGN_IN_INFO_KEY, JSON.stringify(signInInfo));
        const video = document.getElementById("video") as HTMLVideoElement;

        if (video) {
          video.srcObject = stream;
          video.play();
        }
      });
    });
  };

  return (
    <>
      {connected ? (
        <></>
      ) : (
        <section className="hero is-primary is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                  <form action="" className="box">
                    <div className="field">
                      <label className="label">Identifier</label>
                      <div className="control has-icons-left">
                        <input
                          placeholder="my-unique-id-12345!"
                          className="input"
                          autoComplete="on"
                          required
                          value={signInInfo.id}
                          onChange={(e) =>
                            onSignInInfoChange("id", e.target.value)
                          }
                          disabled={isLoading}
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-id-card"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control has-icons-left">
                        <input
                          type="password"
                          placeholder="*******"
                          className="input"
                          autoComplete="on"
                          required
                          value={signInInfo.password}
                          onChange={(e) =>
                            onSignInInfoChange("password", e.target.value)
                          }
                          disabled={isLoading}
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          checked={signInInfo.rememberMe}
                          onChange={() =>
                            onSignInInfoChange(
                              "rememberMe",
                              !signInInfo.rememberMe
                            )
                          }
                        />
                        <span className="ml-1">Remember me</span>
                      </label>
                    </div>
                    <div className="field">
                      <button
                        className={`button is-success ${
                          isLoading ? "is-loading" : ""
                        }`}
                        onClick={connect}
                      >
                        Connect
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <video
        id="video"
        hidden={!connected || isLoading}
        style={{ objectFit: "cover", width: "100vw", height: "100vh" }}
        controls
      ></video>
    </>
  );
};

export default App;
