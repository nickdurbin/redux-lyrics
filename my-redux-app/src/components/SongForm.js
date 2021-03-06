import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { song } from '../action/songs';

const SongForm = () => {
    const [newArtist, setNewArtist] = useState({artist: ''});
    const [newSong, setNewSong] = useState({song:''});
    const dispatch = useDispatch()
    
    const handleArtist = e => {
        setNewArtist({
            ...newArtist,
            [e.target.name]: e.target.value
        })
    };

    const handleSong = e => {
        setNewSong({
            ...newSong,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(song(`${newArtist.artist}`, `${newSong.song}`));
        setNewArtist({ artist: ''});
        setNewSong({ song: ''});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Song Lyrics</h1>
                <input
                    type="text"
                    name="artist"
                    placeholder="Artist"
                    value={newArtist.artist}
                    onChange={handleArtist} />

                <input
                    type="text"
                    name="song"
                    placeholder="Song Title"
                    value={newSong.song}
                    onChange={handleSong} />

                <button type="submit">Submit</button>

            </form>          
        </div>
        );
};

export default SongForm;