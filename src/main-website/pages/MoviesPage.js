import "../MainWebsite.css"
import "../../common/styles/gallery.css"
import "../../common/styles/cute-white-frame.css"
import "../../common/styles/simple-tabs.scss"

import React, { useEffect, useState } from 'react'
import {
    WATER_BACKGROUND,
    BUBBLES3_BACKGROUND,
} from '../../global-const';



export function MoviesPage() {
    document.documentElement.style.removeProperty('--box-text-color');
    document.documentElement.style.removeProperty('--main-cursor');
    document.documentElement.style.removeProperty('--pointer-cursor');
    document.documentElement.style.setProperty('--box-header-color', `url(${WATER_BACKGROUND})`);
    document.documentElement.style.setProperty('--main-background', `url(${BUBBLES3_BACKGROUND})`);
    document.documentElement.style.setProperty('--box-background', `#ede1ed`);
    const [toggleState, setToggleState] = useState(1);
    const [toggleStateMov, setToggleStateMov] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    const toggleTabMov = (index) => {
        setToggleStateMov(index);
    };
    return (
        <div className='main' style={{ maxWidth: "1000px" }}>
            <div style={{ display: 'flex', direction: 'row' }}>
                <div >
                    <div
                        style={{
                            width: 187,
                            height: 213,
                            backgroundImage: 'url("https://i.imgur.com/orgFYXj.gif")',
                            border: "none",
                            margin: '10px 40px'
                        }}
                    >
                        <center>
                            <div style={{ width: 140, height: 10, border: "none" }} />
                            <div style={{ width: 162, height: 155, overflow: "auto", border: "none" }}>
                                <div className="simple-tab-list">
                                    <ul style={{ listStyleType: 'none', color: '#4e4e4e', lineHeight: '30px', verticalAlign: 'center' }}>
                                        <li className={toggleState === 1 ? "simple-tab-list selected" : "simple-tab-list"} onClick={() => toggleTab(1)}>
                                            <span className="icon"><img src={require("../resources/pixels/4pAzup9.gif")} style={{ width: '13px' }} /> </span>
                                            Фильмы
                                        </li>
                                        <hr />
                                        <li className={toggleState === 2 ? "simple-tab-list selected" : "simple-tab-list"} onClick={() => toggleTab(2)} >
                                            <span className="icon"><img src={require("../resources/pixels/4pAzup9.gif")} style={{ width: '13px' }} /> </span>
                                            Сериалы
                                        </li>
                                        <hr />
                                        <li className={toggleState === 3 ? "simple-tab-list selected" : "simple-tab-list"} onClick={() => toggleTab(3)} >
                                            <span className="icon"><img src={require("../resources/pixels/4pAzup9.gif")} style={{ width: '13px' }} /> </span>
                                            Мультики/аниме
                                        </li>
                                        <hr />
                                    </ul>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
                    {toggleState === 3 ?
                        <div class="s_box32" style={{
                            textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.4em', fontWeight: 'bold',
                            width: 'auto', height: '70px'
                        }}>
                            <div style={{}}>

                                <img src={require('../resources/pixels/yum-soot.gif')}
                                    style={{ maxHeight: '130px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                    title='https://artwork.neocities.org/' />
                                &nbsp;Мультики/аниме&nbsp;
                                <img src={require('../resources/pixels/yum-soot.gif')}
                                    style={{ maxHeight: '130px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                    title='https://artwork.neocities.org/' />
                            </div>
                            <img src={require('../resources/pixels/totoroblink.gif')}
                                style={{ maxHeight: '130px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                title='https://artwork.neocities.org/' />
                            <img src={require('../resources/pixels/yum-soot.gif')}
                                style={{ maxHeight: '130px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                title='https://artwork.neocities.org/' />
                            <img src={require('../resources/pixels/artworkteatotoro.gif')}
                                style={{ maxHeight: '130px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                title='https://artwork.neocities.org/' />
                        </div>
                        : toggleState === 2 ?
                            <div style={{ width: '100%' }}>
                                <div class="s_box32" style={{
                                    textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.4em', fontWeight: 'bold',
                                    width: 'auto'
                                }}>
                                    <div>
                                        <img src={require('../resources/pixels/wXsrEGT.gif')}
                                            style={{ maxHeight: '25px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                                        &nbsp;Сериалы&nbsp;
                                        <img src={require('../resources/pixels/wXsrEGT.gif')}
                                            style={{ maxHeight: '25px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                                    </div>
                                </div>
                                <marquee >
                                    <img src={require('../resources/pixels/dragon.gif')}
                                        style={{ height: '120px', width: 'auto', alignSelf: 'center', margin: '-15px' }} />
                                </marquee>
                            </div>

                            :
                            <div >
                                <div class="s_box32" style={{
                                    textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.4em', fontWeight: 'bold',
                                    width: 'auto'
                                }}>
                                    <div>
                                        <img src={require('../resources/pixels/wXsrEGT.gif')}
                                            style={{ maxHeight: '25px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                                        &nbsp;Фильмы&nbsp;
                                        <img src={require('../resources/pixels/wXsrEGT.gif')}
                                            style={{ maxHeight: '25px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                                    </div>

                                </div>
                                <div style={{ backgroundColor: '#fff', letterSpacing: '-3px' }}><pupa style={{ fontWeight: 'bold' }}>Любимые режиссеры:</pupa> Роман Полански, Дэвид Линч, Стэнли Кубрик, Люк Бессон, Алексей Балабанов, Никита Михалков</div>
                                <br />
                                <div className="simple-tab-bar-line">
                                    <span className={toggleStateMov === 1 ? "simple-tab-line selected" : "simple-tab-line"} onClick={() => toggleTabMov(1)}>
                                        Разные
                                    </span>
                                    <span className={toggleStateMov === 2 ? "simple-tab-line selected" : "simple-tab-line"} onClick={() => toggleTabMov(2)}>
                                        Советские
                                    </span>
                                    <span className={toggleStateMov === 3 ? "simple-tab-line selected" : "simple-tab-line"} onClick={() => toggleTabMov(3)}>
                                        Психологические
                                    </span>
                                    <span style={{ borderRight: 'solid 1px gray', letterSpacing: '0' }} className={toggleStateMov === 4 ? "simple-tab-line selected" : "simple-tab-line"} onClick={() => toggleTabMov(4)}>
                                        Fairy vibe
                                    </span>
                                </div>
                            </div>
                    }

                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../resources/tabs_dividers_pixels/bubbles.gif')}
                    style={{ height: '40px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center', margin: '10px' }} />
            </div>
            <div className="simple-content-tabs" >
                <div
                    className={toggleState === 1 ? "simple-content  simple-active-content" : "simple-content"}
                >
                    <div
                        className={toggleStateMov === 1 ? "simple-content  simple-active-content" : "simple-content"}
                    >
                        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>

                            <div class="movie-card">
                                <img src={require("../resources/movies/покажимнелюбовь.webp")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Покажи мне любовь (1998)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/трудностиперевода.webp")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Трудности перевода (2003)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/мечтатели.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Мечтатели (2003)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/тринадцать.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Тринадцать (2003)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/сумерки.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Сумерки (2008-2012)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/англия.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Это Англия (2006-2011)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/гарри.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Гарри Поттер (2001-2011)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/странаглухих.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Страна глухих (1998)</div>
                            </div>
                            <div class="movie-card">
                                <img src={require("../resources/movies/брат.jpg")} alt="Movie Image" className="movie-image " />
                                <div className=" movie-title "> Брат (1997/2000) </ div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/сестры.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Сестры (2001)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/сияние.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Сияние (1980)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/заводнойапельсин.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Заводной апельсин (1971)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies//будда.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Маленький Будда (1993)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/изгой.webp")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Изгой (2000)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/леон.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Леон (1994)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/мемуары.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Мемуары гейши (2005)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/звонок.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Звонок (2002/2005)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/краш.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Краш (2013)</div>
                            </div>
                            <div class="movie-card">
                                <img src={require("../resources/movies/перед рассветом.webp")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Перед рассветом (1995)</div>
                            </div>
                            <div class="movie-card">
                                <img src={require("../resources/movies/перед закатом.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Перед закатом (2004)</div>
                            </div>
                            <div class="movie-card">
                                <img src={require("../resources/movies/перед полуночью.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Перед полуночью (2013)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/3метра.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">3 метра над уровнем неба (2010)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/королевапроклятых.jpg")} alt="Movie Image" className="movie-image" />
                                <div class="movie-title">Королева проклятых (2002)</div>
                            </div>
                            <div class="movie-card">
                                <img src={require("../resources/movies/короли.webp")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Короли Догтауна (2005)</div>
                            </div>
                            <div class="movie-card">
                                <img src={require("../resources/movies/уженедети.webp")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Уже не дети (2012)</div>
                            </div>
                            <div class="movie-card">
                                <img src={require("../resources/movies/500днейлета.jpeg")} alt="Movie Image" className="movie-image" />
                                <div className=" movie-title "> 500 дней лета (2009) </ div>
                            </div>

                            <div className="movie-card">
                                <img src={require("../resources/movies/10причин.avif")} alt="Изображение фильма" className="movie-image" />
                                <div className="movie-title"> 10 причин моей ненависти (1999) </ div>
                            </div>
                            <div class="movie-card">
                                <img src={require("../resources/movies/чумоваяпятница.webp")} alt="Movie Image" className="movie-image " />
                                <div className=" movie-title "> Чумовая пятница (2003) </ div>
                            </div>
                            <div class="movie-card">
                                <img src={require("../resources/movies/дряные девчонки.jpg")} alt="Movie Image" className="movie-image " />
                                <div className=" movie-title "> Дрянные девчонки (2004) </ div>
                            </div>

                        </div>
                    </div>
                    <div
                        className={toggleStateMov === 2 ? "simple-content  simple-active-content" : "simple-content"}
                    >
                        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div className="movie-card">
                                <img src={require("../resources/movies/москваслезам.jpg")} alt="Изображение фильма" className="movie-image" />
                                <div className="movie-title">Москва слезам не верит (1979)</div>
                            </div>

                            <div className="movie-card">
                                <img src={require("../resources/movies/курьер.jpg")} alt="Изображение фильма" className="movie-image" />
                                <div className="movie-title">Курьер (1986)</div>
                            </div>

                            <div className="movie-card">
                                <img src={require("../resources/movies/прошувинить.webp")} alt="Изображение фильма" className="movie-image" />
                                <div className="movie-title">В моей смерти прошу винить Клаву К. (1979)</div>
                            </div>

                            <div className="movie-card">
                                <img src={require("../resources/movies/родн.webp")} alt="Изображение фильма" className="movie-image" />
                                <div className="movie-title">Родня (1981)</div>
                            </div>
                            <div className="movie-card">
                                <img src={require("../resources/movies/куколка.jpg")} alt="Изображение фильма" className="movie-image" />
                                <div className="movie-title">Куколка (1988)</div>
                            </div>
                            <div className="movie-card">
                                <img src={require("../resources/movies/интердевочка.jpg")} alt="Изображение фильма" className="movie-image" />
                                <div className="movie-title">Интердевочка (1989)</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleStateMov === 3 ? "simple-content  simple-active-content" : "simple-content"}
                    >
                        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div class="movie-card">
                                <img src={require("../resources/movies/человекспит.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Человек, который спит (1974)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/лиля.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Лиля навсегда (2002)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/одна.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Ты у меня одна (1993)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/отвращение.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Отвращение (1965)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/жилец.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Жилец (1976)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/достучаться.png")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Достучаться до небес (1997)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/смертьидевушка.png")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Смерть и девушка (1994)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies//класс.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Класс (2007-2010)</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleStateMov === 4 ? "simple-content  simple-active-content" : "simple-content"}
                    >
                        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div class="movie-card">
                                <img src={require("../resources/movies/королевствополной.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Королевство полной луны (2012)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/русалочка.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Русалочка (1976)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/энн.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Энн с двумя Н (2017-2019)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/избавинас.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Не избави нас от лукавого (1971)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/маргаритки.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Маргаритки (1966)</div>
                            </div>

                            <div class="movie-card">
                                <img src={require("../resources/movies/девственницы.jpg")} alt="Movie Image" className="movie-image" />
                                <div className="movie-title">Девственницы самоубийцы (1999)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={toggleState === 2 ? "simple-content  simple-active-content" : "simple-content"}
                >
                    <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div className="movie-card">
                            <img src={require("../resources/movies/великолепныйвек.jpeg")} alt="Изображение фильма" className="movie-image" />
                            <div className="movie-title">Великолепный век (2011-2014)</div>
                        </div>

                        <div className="movie-card">
                            <img src={require("../resources/movies/игравкальмара.webp")} alt="Изображение фильма" className="movie-image" />
                            <div className="movie-title">Игра в кальмара (2021)</div>
                        </div>

                        <div className="movie-card">
                            <img src={require("../resources/movies/играпрестолов.jpg")} alt="Изображение фильма" className="movie-image" />
                            <div className="movie-title">Игра престолов (2011-2019)</div>
                        </div>

                        <div className="movie-card">
                            <img src={require("../resources/movies/твинпикс.jpg")} alt="Изображение фильма" className="movie-image" />
                            <div className="movie-title">Твин Пикс (1990-1991)</div>
                        </div>

                        <div className="movie-card">
                            <img src={require("../resources/movies/школа.jpg")} alt="Изображение фильма" className="movie-image" />
                            <div className="movie-title">Школа (2010)</div>
                        </div>
                        <div className="movie-card">
                            <img src={require("../resources/movies/мертвецы.jpeg")} alt="Изображение фильма" className="movie-image" />
                            <div className="movie-title">Ходячие мертвецы (2010-2022)</div>
                        </div>
                        <div className="movie-card">
                            <img src={require("../resources/movies/остатьсявживых.webp")} alt="Изображение фильма" className="movie-image" />
                            <div className="movie-title">Остаться в живых (2004-2010)</div>
                        </div>
                        <div className="movie-card">
                            <img src={require("../resources/movies/the last of us.webp")} alt="Изображение фильма" className="movie-image" />
                            <div className="movie-title">The Last Of Us (2023-?)</div>
                        </div>
                    </div>
                </div>
                <div
                    className={toggleState === 3 ? "simple-content  simple-active-content" : "simple-content"}
                >
                    <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div class="movie-card">
                            <img src={require("../resources/movies/унесенныепризраками.jpeg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Унесённые призраками (2001)</div>
                        </div>
                        <div class="movie-card">
                            <img src={require("../resources/movies/тоторо.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Мой сосед Тоторо (1988)</div>
                        </div>
                        <div class="movie-card">
                            <img src={require("../resources/movies/perfectblue.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Perfect Blue (1998)</div>
                        </div>
                        <div class="movie-card">
                            <img src={require("../resources/movies/марни.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Воспоминания о Марни (2014)</div>
                        </div>
                        <div class="movie-card">
                            <img src={require("../resources/movies/sailormoon.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Сейлор Мун (1992-1997)</div>
                        </div>
                        <div class="movie-card">
                            <img src={require("../resources/movies/daria.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Дарья (1997-2002)</div>
                        </div>
                        <div class="movie-card" >
                            <img src={require("../resources/movies/амалька.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Сказки о фее Амальке (1975)</div>
                        </div>
                        <div class="movie-card">
                            <img src={require("../resources/movies/кеша.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Возвращение блудного попугая (1984)</div>
                        </div>
                        <div class="movie-card">
                            <img src={require("../resources/movies/русалочкамульт.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Русалочка (1968)</div>
                        </div>
                        <div class="movie-card">
                            <img src={require("../resources/movies/колобки.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Следствие ведут Колобки (1986)</div>
                        </div>
                        <div class="movie-card" >
                            <img src={require("../resources/movies/нупогоди.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Ну, погоди! (1969)</div>
                        </div>
                        <div class="movie-card" >
                            <img src={require("../resources/movies/деревоикошка.jpg")} alt="Movie Image" className="movie-image" />
                            <div className="movie-title">Дерево и кошка (1983)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
