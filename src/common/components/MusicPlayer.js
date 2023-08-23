import {useEffect, useState} from "react";
import useSound from "use-sound";
import "./MusicPlayer.css"
import song1 from './_△Sco△ - don † cry.mp3';
import song2 from './₩RØ₦G CHØᛅCΣ - Erase everything inside.mp3';
import song3 from './△Sco△ - ПРОКЛЯТЫЙ ВЕДЬМИН ДОМ.mp3';
import {AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai";
import {BiSkipNext, BiSkipPrevious} from "react-icons/bi";
import {IconContext} from "react-icons";

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

    const songs = [
        {id: 1, name: "Song 1", url: song1},
        {id: 2, name: "Song 2", url: song2},
        {id: 3, name: "Song 3", url: song3},
        // добавьте другие песни в список
    ];

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

    return (
        <div className="component">
            {currentSong && (
                <>
                    <div>
                        <p className="subTitle">Artist: {currentSong?.name}</p>
                        <p className="subTitle">Name: {currentSong?.name}</p>
                        <p className="subTitle">{currentSong?.note}</p>
                    </div>
                    <div>
                        <div className="time">
                            <p>
                                {currTime.min}:{currTime.sec}
                            </p>
                            <p>
                                {time.min}:{time.sec}
                            </p>
                        </div>
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
                    <div>
                        <button className="playButton">
                            <IconContext.Provider value={{size: "3em", color: "#27AE60"}}>
                                <BiSkipPrevious/>
                            </IconContext.Provider>
                        </button>
                        {!isPlaying ? (
                            <button className="playButton" onClick={playingButton}>
                                <IconContext.Provider value={{size: "3em", color: "#27AE60"}}>
                                    <AiFillPlayCircle/>
                                </IconContext.Provider>
                            </button>
                        ) : (
                            <button className="playButton" onClick={playingButton}>
                                <IconContext.Provider value={{size: "3em", color: "#27AE60"}}>
                                    <AiFillPauseCircle/>
                                </IconContext.Provider>
                            </button>
                        )}
                        <button className="playButton">
                            <IconContext.Provider value={{size: "3em", color: "#27AE60"}}>
                                <BiSkipNext/>
                            </IconContext.Provider>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
