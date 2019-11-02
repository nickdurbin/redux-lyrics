import React from "react";
import { useSelector } from 'react-redux';

export default function Title() {
  const songs = useSelector(state =>
    state.songs
  )
  console.log(songs)
return (
    <div>
    <h2>{songs.lyrics}</h2>
  </div>
    )    
}  
