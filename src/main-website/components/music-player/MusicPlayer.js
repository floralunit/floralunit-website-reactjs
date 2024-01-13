import React, {useEffect, useState} from "react";
import useSound from "use-sound";
import "./MusicPlayer.css"
import {songs} from "./songs/songs"
import {
    AiFillPlayCircle,
    AiFillPauseCircle,
    AiOutlinePlaySquare,
    AiOutlinePlayCircle,
    AiOutlinePauseCircle
} from "react-icons/ai";
import {BiSkipNext, BiSkipPrevious} from "react-icons/bi";
import {BsSkipStart, BsSkipEnd} from "react-icons/bs";
import {IconContext} from "react-icons";
import {Link} from "react-router-dom";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState({
        min: "",
        sec: ""
    });
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: ""
    });

    const [seconds, setSeconds] = useState();

    const [currentSong, setCurrentSong] = useState(songs[Math.floor(Math.random() * songs.length)]);

    const [play, {pause, duration, sound}] = useSound(currentSong.url);

    useEffect(() => {
        if (duration) {
            const sec = duration / 1000;
            const min = Math.floor(sec / 60);
            const secRemain = Math.floor(sec % 60);
            setTime({
                min: min,
                sec: secRemain
            });
        }
    }, [isPlaying]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([]));
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };
    const playRandom = () => {
        pause();
        setIsPlaying(false);
        setCurrentSong(songs[Math.floor(Math.random() * songs.length)]);
    };

    return (
        <div className="component">
            {currentSong && (
                <>
                    <div >
                        <p className="subTitle"><pipa style={{fontWeight: "bold"}}>Artist:</pipa> {currentSong?.artist}</p>
                        <p className="subTitle"><pipa style={{fontWeight: "bold"}}>Name:</pipa> {currentSong?.name}</p>
                    </div>
                    <div >
                        <div className="time">
                            <p>
                                {currTime.min}:{currTime.sec}
                            </p>
                            <p>
                                {time.min}:{time.sec}
                            </p>
                        </div>
                        <div className="music-component">
                            <input
                                type="range"
                                min="0"
                                max={duration / 1000}
                                default="0"
                                value={seconds}
                                className="timeline"
                                onChange={(e) => {
                                    sound.seek([e.target.value]);
                                }}
                            />
                        </div>
                    </div>
                    <div className="music-component">
                        <button className="playButton" onClick={playRandom}>
                            <IconContext.Provider value={{size: "2.5em", color: "var(--box-header-color)"}}>
                                <BiSkipPrevious/>
                            </IconContext.Provider>
                        </button>
                        {!isPlaying ? (
                            <button className="playButton" onClick={playingButton}>
                                <IconContext.Provider value={{size: "2.5em", color: "var(--box-header-color)"}}>
                                    <AiOutlinePlayCircle/>
                                </IconContext.Provider>
                            </button>
                        ) : (
                            <button className="playButton" onClick={playingButton}>
                                <IconContext.Provider value={{size: "2.5em", color: "var(--box-header-color)"}}>
                                    <AiOutlinePauseCircle/>
                                </IconContext.Provider>
                            </button>
                        )}
                        <button className="playButton" onClick={playRandom}>
                            <IconContext.Provider value={{size: "2.5em", color: "var(--box-header-color)"}}>
                                <BiSkipNext/>
                            </IconContext.Provider>
                        </button>
                    </div>
                    {currentSong?.genre === "witch" && <div>More on <Link to="witch-house" target="_blank" rel="noreferrer">Witch-House</Link> page</div>}
                    {currentSong?.genre === "emo" && <div>More on <Link to="emo" target="_blank" rel="noreferrer">Emo</Link> page</div>}
                </>
            )}
        </div>
    );
}
