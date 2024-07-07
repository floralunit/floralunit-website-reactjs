import React from 'react'
import '../styles/emo-page.css';
import { BandsTable } from "../components/BandsTable";
import { Helmet } from 'react-helmet';
import { UseScriptText } from '../../common/components/UseScript';
import { FACE1_CURSOR, FACE2_CURSOR } from '../../global-const';

export function EmoPage() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');
    UseScriptText("VK.Widgets.Playlist('vk_playlist_283385573_50', 283385573, 50,'4d1ec601201a7cf1e3')");
    return (

        <div className="mainPage">
            <Helmet>
                <meta
                    name="viewport"
                    content='width=865px, initial-scale=1'
                />
            </Helmet>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '520px' }}>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../resources/168.gif')} alt={''} style={{ height: '20px', width: '150px', margin: '7px' }} />
                        <img src={require('../resources/1487294y2xy3722r9.gif')} alt={''} style={{ height: '20px', width: '150px', margin: '7px' }} />
                        <img src={require('../resources/0190-hittingfloor.gif')} alt={''} style={{ height: '20px', width: '150px', margin: '7px' }} />
                    </div>
                    <div class="window" style={{ width: '520px', height: '500px', overflowY: 'scroll', textAlign: 'justify' }}>
                        <div class="title-bar">
                            <div class="title-bar-text">О жанре</div>
                        </div>
                        <div class="window-body">
                            <img src={require('../resources/871295sy962x4lxg.gif')} alt={''} style={{ height: '50px', width: '50px', margin: '7px', float: 'left' }} />
                            <b> Эмо </b>(англ. emo, сокращение от «эмоциональный») — стиль рок-музыки,
                            характеризуемый мелодичной
                            музыкальностью и экспрессивной лирикой.
                            <br /><br />
                            Появился в середине 1980-х в Вашингтоне, где был известен как «эмоциональный
                            хардкор-панк» или
                            «эмокор», разработанный такими группами, как Rites of Spring и Embrace.
                            Стиль был переработан американскими панк-рокерами в начале 1990-х, его звучание
                            изменилось, смешалось с
                            поп-панком и инди-роком, подобно звучанию групп Jawbreaker и Sunny Day Real Estate.
                            <br /><br />
                            На базе поклонников эмо и родственных жанров возникла одноимённая субкультура.
                            <br /><br />
                            <h3>Поджанры</h3>
                            <div>
                                <b>Emocore</b><br />
                                Emocore - пост-хардкор, но более эмоциональный и несколько мелодичный. Также известен как «Лето революции» или «Первая волна».
                                Известные группы включают Rites Of Spring, Embrace (США), Moss Icon, Gray Matter и Dag Nasty.
                                Этот термин был сильно отвергнут группами, но теперь он используется для различения их и эмо-групп других волн.
                                <br /><br />
                                <b>Midwest Emo</b><br />
                                Мидвест-эмо или инди-эмо — поджанр эмо-музыки, который так же называют "эмо второй
                                волны" отличающийся меланхоличным звучанием, а также контрастными переходами от
                                мягкого к громкому звучанию. Мидвест получился путём смешения инди, пост-гранжа и
                                постхардкора.
                                <br /><br />
                                Midwest Emo, который часто считается более беззаботным вариантом эмо с элементами математического рока, имеет тенденцию больше ориентироваться на инди-гиков, чем на более мрачный и тревожный оригинальный рецепт эмо.
                                Материал 90-х обычно известен как «вторая волна», а 10-е или 20-е - «четвертая волна» или «возрождение эмо (Среднего Запада)».
                                <br /><br />
                                <img src={require('./images/mem.png')} alt={''} style={{ width: '170px', float: 'right', margin: '7px' }} />
                                <b>Emo Pop</b><br />
                                Emo Pop - это жанр, сочетающий в себе эмо и поп-панк. Эмо-поп - это музыкальный стиль с более лаконичными песнями и припевами, наполненными припевами.
                                Хорошо известными эмо-поп-группами являются Fall Out Boy, Paramore, My Chemical Romance и Panic! At The Disco. Этот музыкальный жанр отличается от эмокора. Также известна как «третья волна».
                                <br /><br />
                                <b>Screamo</b><br />
                                Screamo (также известный как skramz) - это агрессивный поджанр emocore, который возник в начале 1990-х годов и подчеркивает «умышленно экспериментальный диссонанс и динамику».
                                Screamo находится под сильным влиянием хардкор-панка и характеризуется использованием кричащего вокала. Лирические темы обычно включают эмоциональную боль, смерть, романтику и права человека.
                                <br></br><br/>
                                <p style={{ color: '#8a0303' }}>
                                    (\____/) This is my emo bunny!<br />
                                    (=//_'=) Fuck the normal bunny (eh,he's still cool), use this one!<br />
                                    (")___(")And put it along with your...<br />
                                    ╔═╦══╦═╗ Put this on your<br />
                                    ║╩╣║║║║║ page if you<br />
                                    ╚═╩╩╩╩═╝ support emo.<br />
                                </p>
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                                    <div style={{ width: '400px', margin: '0 auto', textAlign: 'center' }}>
                                    <div id="vk_playlist_283385573_50" ></div>
                                    </div>
                                    <img src={require('../resources/674953ulnnugdq1c.gif')} alt={''} style={{ width: '170px', margin: '0 auto', textAlign: 'center' }} />
                                </div>
                                <br></br>

                            </div>
                        </div>
                    </div>
                    <div style={{ width: '520px' }} className='stickers-block'>
                        <img src={require('../resources/2075836pqomwcksir.gif')} alt={''} />
                        <img src={require('../resources/2072504tzks9eomsf.gif')} alt={''} />
                        <img src={require('../resources/2104234tol69je6jm.gif')} alt={''} />
                        <img src={require('../resources/2078576cl30uqqjco.gif')} alt={''} />
                        <img src={require('../resources/1975419as90bbe4yn.jpg')} alt={''} />
                        <img src={require('../resources/2111447ix70lq6ay2.gif')} alt={''} />
                        <img src={require('../resources/1865747g7b5z6tx5q.jpg')} alt={''} />
                        <img src={require('../resources/754393plspktrxw8.gif')} alt={''} />
                        <img src={require('../resources/113418vso2gurzg0.gif')} alt={''} />
                        <img src={require('../resources/448448uslw9ao63s.gif')} alt={''} />
                        <img src={require('../resources/2607023pd48pdt8iy.gif')} alt={''} />
                        <img src={require('../resources/2706085n1v2xdphye.gif')} alt={''} />
                    </div>
                </div>

                <BandsTable />
            </div>
        </div>
    );
}
