import "./App.css"
import AudioComponent from "./components/AudioComponent";
import Login from "./components/Login";
import { SongContext } from "./songContext/SongContext";
import {LoggedInContext} from "./loggedInContext/LoggedInContext";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import  Navbar from "./components/Navbar"
import Register from "./components/Register";

function App() {
    const [audio, setAudioSong] = useState("http://localhost:4000/song/song.mp3")
    const [loggedIn, setLoggedIn] = useState(false)
  return (
      <LoggedInContext.Provider value={{loggedIn, setLoggedIn}}>
        <Navbar />
    <SongContext.Provider value={{audio, setAudioSong}}>
    <Routes>
      <Route path ="/Login" element={<Login />}></Route>
      <Route exact path="/" element={ <AudioComponent />}></Route>
      <Route exact path="/register" element={<Register/>}></Route>
    </Routes>
    </SongContext.Provider>
    </LoggedInContext.Provider>
  );
}

export default App;
