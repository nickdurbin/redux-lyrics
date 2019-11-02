import React from "react";
import { useSelector } from 'react-redux';

export default function Lyrics() {
  const songs = useSelector(state =>
    state.songs
  )
  console.log(songs)
return (
    <div className='lyricContainer'>
      <h2>{songs.lyrics}</h2>
    </div>
    )    
}  
