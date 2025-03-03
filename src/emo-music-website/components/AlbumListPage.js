import React, { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { SongLyrics } from './SongLyrics';
import albumImages from './AlbumImages';

export const AlbumListPage = ({ albums }) => {
    const [selectedSong, setSelectedSong] = useState(null);
    const [selectedAlbum, setselectedAlbum] = useState(null);
    const [openAlbumIndex, setOpenAlbumIndex] = useState(null);
    const [isShownSongs, setIsShownSongs] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickShowSongs = (index) => {
        setOpenAlbumIndex(openAlbumIndex === index ? null : index);
    };

    return (
        <div className={"Parent"}>
            <div className={"child1"}>
                <h3 style={{ textAlign: 'center' }}>Альбомы</h3>
                <ul type="none">
                    {albums.map((album, index) => (
                        <li key={album.key}>
                            <div onClick={() => { handleClickShowSongs(index); setselectedAlbum(album); }} className={'albumList'}>
                                <img
                                    src={albumImages[album.artist]?.[album.album]}
                                    style={{ width: "50px", margin: '5px' }}
                                    alt={album.name}
                                />
                                {album.album} {openAlbumIndex === index ? <FiChevronUp size={20} color='white' /> : <FiChevronDown size={20} color='white' />}
                            </div>
                            {openAlbumIndex === index && (
                                <ol className="rectangle">
                                    {album.songs.map(song => (
                                        <li key={song.key} onClick={() => setSelectedSong(song)}>
                                            {song.name}
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={"child2"} style={{ borderLeft: '1px solid gray' }}>
                {selectedSong ? <SongLyrics song={selectedSong} album={selectedAlbum} /> : <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Нажми по альбому, чтобы открыть список песен. Нажми по песне, чтобы появился сам трек, текст песни (если он есть) и мой перевод (если он есть).
                    <br />
                    <img src={require('../resources/heart-boy-smoking.gif')} style={{ height: "auto", width: '200px', margin: '0 auto', textAlign: 'center' }} alt={''} />
                </div>}
            </div>
        </div>
    );
};

export default AlbumListPage;
