import React, { useState, useEffect } from "react";
import socketClient from 'socket.io-client';
import "./calculator.css";

const SERVER = "http://localhost:3000";

export function Calculator() {

    var socket = socketClient (SERVER);
    socket.on('connection', () => {
        console.log('connected to backend');
    });

    const emitValue = val => {
        //console.log("Value received: " + val);
        socket.emit("Value received", val);
    }

    return (
        <div className="App">
            <ul id="messages"></ul>
            <form id="form" action="">
              <input id="input" autoComplete="off" />
              <button onClick={() => emitValue("&")}>Send</button>
            </form>
        </div>
    );
}
