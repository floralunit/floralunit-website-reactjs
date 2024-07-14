import React, { useState } from 'react'

function NewlineText(props) {
    const text = props.text;
    return <div>{text}</div>;
}

export const SongLyrics = ({ song }) => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    if (!song) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {song && (
                <>
                    <div>
                        <h2 className={'albumList'}>
                            <img src={'https://dannarchy.com/misc/anim/1366.gif'} style={{ height: "auto", width: '20px' }} alt={''} />
                            &nbsp;{song.name}
                        </h2>
                        <span style={{ marginLeft: '33px' }}>{song.artist}</span>
                        {song.soundcloudId && (
                            <>
                                <br /> <br />
                                <iframe width="100%" height="80" title='soundcloud' frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.soundcloudId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe>
                            </>
                        )}
                        <br /><br />
                        <a style={{ textDecoration:'underline' }} href={song.albumVKLink} target="_blank" rel="noreferrer">Ссылка на альбом в VK</a>
                    </div>
                    <br />
                    {/* <audio src={require(`../emo-bands/${song.path}`)} controls="autoplay" className={"audio"}
                           autoPlay={false} title={song.name}/> */}
                    <br />
                    <div className="tab-bar radius" style={{ fontSize: '5px' }}>
                        <button className={toggleState === 1 ? "tab selected" : "tab"} onClick={() => toggleTab(1)}
                            data-text="Текст">
                            <span className="icon">Текст</span>
                        </button>
                        <button className={toggleState === 2 ? "tab selected" : "tab"} onClick={() => toggleTab(2)}
                            data-text="Перевод">
                            <span className="icon">Перевод</span>
                        </button>
                    </div>
                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            {song.lyrics ?
                                <div style={{ whiteSpace: 'pre-wrap' }}>
                                    <NewlineText text={song.lyrics} />
                                </div>
                                : <div>Пусто...</div>}
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            {song.translation ?
                                <div style={{ whiteSpace: 'pre-wrap' }}>
                                    <NewlineText text={song.translation} />
                                </div>
                                : <div>Пусто...</div>}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};