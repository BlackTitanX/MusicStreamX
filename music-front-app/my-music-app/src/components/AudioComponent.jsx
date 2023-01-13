import React, {useRef, useContext, useEffect} from "react"
import { SongContext } from "../songContext/SongContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import '../styles/app.css'

const AudioComponent = ()=>{
      const audioPlay = useRef();
      const rangeElement = useRef();
      const song = useContext(SongContext)
      const redirect = useNavigate()
      const [duration, setDuration] = useState(0)
      const [currentTime, setCurrentime ] = useState(0)
      const [avaialbleSongs, setAvailableSongs] = useState([])
      const [isPlaying, setIsPlaying] = useState(false)
      let isFetched = false;

      
      const LoggedStatus = useSelector((state)=>state.loggedIn.value);
      
      useEffect(()=>{
        console.log(LoggedStatus)
         if(LoggedStatus === false){
             
             redirect('/login')
         }
          
         if(!isFetched){
          const getSongs = async ()=>{
           await axios.get('http://localhost:4000/home')
           .then(res=>{
            setAvailableSongs(res.data)
               }).catch((e)=>{
                console.log(e)
               })
              } 
               getSongs();
               isFetched = true;
            }
           
          
      },[]);
        
       // pause and play features
      const playSong = async ()=>{
        
        if(isPlaying){
          await audioPlay.current.pause()
          setIsPlaying(false)
         
        } else {
          await audioPlay.current.play()
          setIsPlaying(true)
          
          console.log(avaialbleSongs)
          
        }
        
      }
       

        

         //Updates range value to indicate progresion
        const setRangeValue = (e)=>{
            setDuration(e.currentTarget.duration)
            setCurrentime(e.currentTarget.currentTime)
            
        }

        //Sets the song duration 
         const setDurationText = (secs) =>{ 
             let minutes = Math.floor(secs/60);
             let seconds = Math.floor(secs % 60);

             if(minutes < 10){
              minutes = "0"+ minutes;
             }
             
             if(seconds < 10){
              seconds = "0"+ seconds;
             }

             return `${minutes}:${seconds}`;
         }

        const setNewTime = (e)=>{
             
        }
     const changeMusic = (e,audio) =>{
        e.currentTarget.classList.toggle('border-primary');
        
        song.setAudioSong(`http://localhost:4000/song/${audio}`);
        
        if(isPlaying){
        setIsPlaying(false)
        }
        
        
        playSong();

        setTimeout(()=>{

          playSong()
          
        },
        2000)
        
        
        

     }
        
    return(
      
             
               <div className="container">
                <ul className="list-group">
                  {

                    avaialbleSongs.map((song)=>{
     
                    return <li className="list-group-item m-3 border " key={song.name} onClick={(e)=>{   e.currentTarget.classList.add('border-primary')    }}>
                      <div className=" audioSelection" onClick={(e)=>changeMusic(e,song.name)}>
                          Title: <br/>
                        {
                            song.name

                        }
                      </div>
                      
                      </li>

                    })
                  }
 
                </ul>
           <audio src={song.audio} ref={audioPlay} onTimeUpdate={setRangeValue} preload="metadata"></audio>
           <input className="rangeSongTrack" type="range" id=" level" onChange={setNewTime} ref={rangeElement} value={currentTime} max={duration}/>
           <div className="songInfo">
             <p>{`${setDurationText(currentTime)}`}</p>   <p>{`${setDurationText(duration)}`}</p>
             </div>
             <button onClick={playSong}>Play Song</button>
        </div>
    )
    
}

export default AudioComponent;