import './WitchHousePage.css';
import '../../common/styles/photos.css';
import React, { useState, useEffect } from 'react'
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import { Link } from "react-router-dom";
import { Thissadnesswilllastforever } from "../components/thissadnesswilllastforever";
import { BloodText } from "../components/BloodText";
import WebampMusic from "../components/webamp/WebampMusic"
import { Helmet } from "react-helmet";
import {
    WITCH_BACKGROUND,
    NOISE_BACKGROUND,
    WITCH_MAIN_CURSOR,
    WITCH_POINTER_CURSOR,
} from '../../global-const';

export function WitchHousePage() {
    document.documentElement.style.setProperty('--main-cursor', `url(${WITCH_MAIN_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${WITCH_POINTER_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#4d0000');
    document.documentElement.style.setProperty('--box-header-text-color', 'black');
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${WITCH_BACKGROUND})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight / 3) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${WITCH_BACKGROUND})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${NOISE_BACKGROUND})`);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="witch-house-page">
            <div className='crt'/>
            <Helmet>
                <meta
                    name="viewport"
                    content='width=865px, initial-scale=1'
                />
            </Helmet>

            <WebampMusic />
            <section className="info-section" id='section1'>
                <div className="container">
                    <div className="head-container">
                        <hr />
                        <Thissadnesswilllastforever />
                        <hr />
                        <BloodText />
                    </div>
                    <br />
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                        <img src={require('../../common/my-button/floralunit-button.gif')}
                            style={{ width: '88px', height: '31px', margin: '0 auto' }} />

                        <GlitchText onHover={false}>
                            <a href='https://floralunit.vercel.app/' target="_blank" rel="noreferrer"><div className='witch-link-small'>floralunit world <br /><pupa style={{ fontFamily: 'arial' }}> 𓆩♡𓆪</pupa></div></a>
                        </GlitchText>
                    </div>
                    <br />
                    <div className="info-container">
                        <div className="info-text">
                            Витч-хаус - жанр электронной и экспериментальной музыки и цифрового искусства, впоследствии породивший целую отдельную интернет-субкультуру; возник на рубеже 2000—2010-х годов. По одной из версий, название впервые в 2009 году шуточно применил Трэвис Эгеди (сценическое имя Pictureplane) для описания музыки, создаваемой им и его соратниками.
                            <br /><br />Во всей совокупности витч-хаус несёт в себе нигилистические, деструктивные и «мрачные» настроения, неотъемлемой частью которых являются дух упадка, депрессии и меланхолии, «размышления о смерти и бессмысленности бытия». Также витч-хаусу присущи эксплуатация тематики колдовства, шаманизма и чёрной магии, преступного, аморального и развратного поведений, романтизация наркотиков и психических расстройств, эстетизация собирательного жанра ужасов (фильмы, фотографии, аниме и манга) и явления так называемого шок-контента, — звуки и/или видео с демонстрацией страданий, пыток, убийств или смерти животных и/или людей, плачей, криков и/или стонов боли, отталкивающим и тошнотворным изображением насекомых, религиозных, в частности оккультных ритуальных практик, разного рода травм и прочего.
                            <br /><br />Витч-хаус, вопреки частым заблуждениям, не имеет прямого отношения к религии в общем и к сатанизму в частности, в отличие, например, от некоторых ответвлений жанра блэк-метал; и оккультные элементы витч-хауса используются скорее как эстетическая эксплуатация: для провокации и подчёркивания общей «мрачности» музыкального жанра.
                            <br /><br />В визуальном плане витч-хаус перенял эстетику музыки 1980-х в виде аналоговых фотографий, глитч и VHS эффектов, а также в визуальном сопровождении обычно задействованы фильмы ужасов. Как правило, названия музыкальных проектов и композиций в жанре витч-хаус, помимо стандартных букв, содержат символы треугольников (△, ▲, ▽, ▼ и др.), крестов <pupa style={{ fontFamily: 'arial' }}>(⸸, †, ‡,</pupa> и др.) и прочие элементы Юникода, использование которых позволило бы подчеркнуть индивидуальность как отдельного проекта, так и всего жанра в целом, и возможность приобщиться к жанровому движению, а также затруднив нахождение музыки посредством их ввода в поисковых запросах.

                        </div>
                        <hr />
                        <div className="vv17ch-container">
                            <GlitchText>
                                <div className="vv17ch">
                                    <img src={require('./resources/angel-right.png')} loading="lazy"
                                        className="vv17chImg" />
                                </div>
                                <div className="vv17ch">
                                    <Link>
                                        <GlitchClip onHover={true} style={{ margin: '0', padding: '0' }}>
                                        <GlitchSquiggly onHover={false}>
                                            <img src={require('./resources/artist-icons/vedmindom.png')} loading="lazy"
                                                className="vv17chImg" />
                                                </GlitchSquiggly>
                                        </GlitchClip>
                                        <a><div className='witch-link-small'> Ведьмин дом</div></a>
                                    </Link>
                                </div>
                                <div className="vv17ch">
                                    <Link>
                                        <GlitchClip onHover={true}>
                                        <GlitchSquiggly onHover={false}>
                                            <img src={require('./resources/artist-icons/vv17chou7.jpg')} loading="lazy"
                                                className="vv17chImg" />
                                                </GlitchSquiggly>
                                        </GlitchClip>
                                        <a><div className='witch-link-small'>VV17CH<pupa style={{ fontFamily: 'arial' }}>Ø</pupa>U7</div></a>
                                    </Link>
                                </div>
                                <div className="vv17ch">
                                    <Link>
                                        <GlitchClip onHover={true}>
                                            <GlitchSquiggly>
                                            <img src={require('./resources/artist-icons/gate.jpg')} loading="lazy"
                                                className="vv17chImg" />
                                                </GlitchSquiggly>
                                        </GlitchClip>
                                        <a><div className='witch-link-small'>Gáte</div></a>
                                    </Link>
                                </div>
                                <div className="vv17ch">
                                    <Link>
                                        <GlitchClip onHover={true}>
                                        <GlitchSquiggly>
                                            <img src={require('./resources/artist-icons/nedo.jpg')} loading="lazy"
                                                className="vv17chImg" />
                                                </GlitchSquiggly>
                                        </GlitchClip>
                                        <a><div className='witch-link-small'>NEDOSTUPNOSTЬ</div></a>
                                    </Link>
                                </div>
                                <div className="vv17ch">
                                    <img src={require('./resources/angel-left.png')} loading="lazy"
                                        className="vv17chImg" />
                                </div>
                            </GlitchText>
                        </div>

                    </div>
                </div>
            </section>
            <div className='container'>
                <div className='info-text' style={{ color: 'red', textAlign: 'center' }}>Здесь будут мои любимые и культовые исполнители. Добавлять их и оформлять странички буду по мере возможностей. 
                <br />Last upd:</div>
            </div>

            <section className="music-section" id='section2'>
                <div className="container">
                    <GlitchText>
                        <div className="music-container">
                            <div className='row'>
                                <div className="row">
                                    <div className="column">
                                        <Link to="radost-moja">
                                            <GlitchClip onHover={true} className="s">
                                                <GlitchSquiggly onHover={false}>
                                                    <img src={require('./resources/artist-icons/radostmoja.png')} loading="lazy" className="s" />
                                                </GlitchSquiggly>
                                            </GlitchClip>
                                            <div className='witch-link'>Радость Моя</div>
                                        </Link>
                                    </div>
                                    <div className="column">
                                        <Link >
                                            <GlitchClip onHover={true} className="l">
                                                <GlitchSquiggly onHover={false}>
                                                    <img src={require('./resources/artist-icons/cain.png')} loading="lazy" className="l" />
                                                </GlitchSquiggly>
                                            </GlitchClip>
                                            <div className='witch-link' style={{ fontFamily: 'arial' }}>† CΛIN †</div>
                                        </Link>
                                    </div>
                                    <div className="column">
                                        <Link >
                                            <GlitchClip onHover={true} className="l">
                                                <GlitchSquiggly onHover={false}>
                                                    <br /><br /><br />
                                                    <img src={require('./resources/artist-icons/suicidewave.png')} loading="lazy" className="l" />
                                                </GlitchSquiggly>
                                            </GlitchClip>
                                            <br />
                                            <div className='witch-link' style={{ fontFamily: 'arial' }}>SUICIDEWΛVЕ</div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="column">
                                        <Link >
                                            <GlitchClip onHover={true} className="s">
                                                <GlitchSquiggly onHover={false}>
                                                    <img src={require('./resources/artist-icons/sco.png')} loading="lazy" className="s" />
                                                </GlitchSquiggly>
                                            </GlitchClip>
                                            <div className='witch-link' style={{ fontFamily: 'arial' }}>△Sco△</div>
                                        </Link>
                                    </div>
                                    <div className="column">
                                        <Link >
                                            <GlitchClip onHover={true} className="s">
                                                <GlitchSquiggly onHover={false}>
                                                    <img src={require('./resources/artist-icons/summer.png')} loading="lazy" className="s" />
                                                </GlitchSquiggly>
                                            </GlitchClip>
                                            <div className='witch-link'>Summer of Haze</div>
                                        </Link>
                                    </div>
                                    <div className="column">
                                        <Link >
                                            <GlitchClip onHover={true} className="s">
                                                <GlitchSquiggly onHover={false}>
                                                    <img src={require('./resources/artist-icons/mugl.png')} loading="lazy" className="s" style={{ maxHeight: '250px' }} />
                                                </GlitchSquiggly>
                                            </GlitchClip>
                                            <div className='witch-link'>Mugl</div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="column">
                                        <Link >
                                            <GlitchClip onHover={true} className="s">
                                                <GlitchSquiggly onHover={false}>
                                                    <img src={require('./resources/artist-icons/ic3peak.png')} loading="lazy" className="s" style={{ maxHeight: '300px' }} />
                                                </GlitchSquiggly>
                                            </GlitchClip>
                                            <div className='witch-link'>IC3PEAK</div>
                                        </Link>
                                    </div>
                                    <div className="column">
                                        <Link >
                                            <GlitchClip onHover={true} className="l">
                                                <GlitchSquiggly onHover={false}>
                                                    <img src={require('./resources/artist-icons/crim3s.png')} loading="lazy" className="l" />
                                                </GlitchSquiggly>
                                            </GlitchClip>
                                            <div className='witch-link'>Crim3s</div>
                                        </Link>
                                    </div>
                                    <div className="column">
                                        <Link >
                                            <GlitchClip onHover={true} className="l">
                                                <GlitchSquiggly onHover={false}>
                                                    <img src={require('./resources/artist-icons/fd.png')} loading="lazy" className="l" />
                                                </GlitchSquiggly>
                                            </GlitchClip>
                                            <div className='witch-link'>Fraunhofer Diffraction</div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="column">
                                        <Link >
                                            <GlitchClip onHover={true} className="s">
                                                <GlitchSquiggly onHover={false}>
                                                    <img src={require('./resources/artist-icons/tenebrae.png')} loading="lazy" className="s" />
                                                </GlitchSquiggly>
                                            </GlitchClip>
                                            <div className='witch-link' style={{ fontFamily: 'arial' }}>†ENEBRÆ</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlitchText>
                </div>
            </section>
            <br />
            <section className="info-section" id='section3'>
                <div className="container">
                    <div className='info-container'>
                        <div className='info-text'>
                            <GlitchSquiggly><h1>История витч-хауса</h1></GlitchSquiggly>
                            <br />
                            <h2>Зарождение, 2005-2008 гг.</h2>
                            15 августа 2005 года концептуальный художник Антонио Урдиалес (Antonio Urdiales) впервые начинает делиться своей музыкой, стилизованными изображениями и анимациями в своём блоге на «Живом Журнале» под никнеймами Ponyboy и GODBLESS. В будущем его работы станут опорой и вдохновением для возникновения «эстетики» визуальной составляющей жанра витч-хаус.
                            <br /> <br />
                            <h2>Разрастание, 2009-2010 гг.</h2>
                            Начальные этапы становления витч-хауса совпали с периодом популяризации такого явления, как даркнет и появления первых криптовалют. Некоторые аспекты культуры даркнета повлияли на формирование визуального стиля витч-хауса, что особенно заметно в раннем творчестве проекта Blvck Ceiling.
                            <br /><br />Выпуск крупных альбомов Dark Rift (2009) от Pictureplane и King Night (2010) группы Salem и появление таких музыкальных проектов, как White Ring и Ritualz за короткое время дают стимул мощному развитию витч-хаус.
                            <br /><br />С этого периода самобытное звучание и эксцентричная эстетика жанра стали стремительно распространяться в популярных на тот момент социальных сетях Myspace и Tumblr, где уже активно обсуждали, воспроизводили и делились витч-хаусом множество DIY-музыкантов. Появляются десятки новых музыкальных проектов, таких как Crim3s, Purity Ring, Gvcci Hvcci, oOoOO, Crystal Castles и Holy Other.
                            <br /><br />Происходит стремительное развитие жанра, который уже на тот момент представлял собой противопоставление новой «волне» западной поп-музыки. Предельно мрачное и нестандартное, нарочито грубое и необработанное звучание, обильное использование хоррор и арт-хаус эстетики и символов Юникода закрепляются в витч-хаусе как его неотъемлемая часть, порождая «атмосферу магии хаоса, волшебной свободы и анархии». Среди тех, кто внёс наибольший вклад в развитие жанра в данный период можно выделить такие проекты, как Blvck Ceiling и Sidewalks and Skeletons.
                            <br /> <br />
                            <h2>Перерождение, 2011-2012 гг.</h2>
                            Появляется российский лейбл ODDOT, c которого начинается развитие жанра в России, и на котором начинают издаваться такие исполнители, как (((O))), Summer of Haze, Mugl и Crossparty. Также в это время появляется англоязычный форум witch-house.com, ставший отправной точкой в формировании сообщества на западе и к настоящему времени также являющийся лейблом, выпускающим музыкальные альбомы, синглы и сборники, ориентированные на ценителей «старой школы» витч-хауса. Возникают музыкальные коллективы Crim3s, Chainless.
                            <br /><br />Происходит перерождение жанра. В это время на западе популярность витч-хауса спадает, новые релизы уже практически не выходят, а исполнители участвуют в живых выступлениях всё реже и реже. Однако в это же время в России витч-хаус становится значительно популярнее и начинает развиваться стремительными темпами. На сцене появляются исполнители, которые вскоре станут «культовыми» для жанра и определят его дальнейшее развитие на годы вперёд как в России, так и в США и Европе.
                            <br /><br />В этот период в России начинает зарождаться своё комьюнити, никак не пересекающееся с западным, что в дальнейшем сильно отразится на самом жанре. Начинают встречаться первые упоминания витч-хауса в интернет-изданиях. Также появляются первые крупные промоутеры — Untitled Burial и Nightmares and 808s, внёсшие большой вклад в формирование комьюнити, сохранение и развитие жанра по обе стороны океана.
                            <br /> <br />
                            <h2>Золотой век, 2013-2015 гг.</h2>
                            Этот период принято считать «золотым веком» витч-хауса. Множество исполнителей как в России, так и в США и Европе выпускают релиз за релизом, немалая часть из которых станет эталоном витч-хауса. В России проходит множество живых выступлений и крупных вечеринок, таких как VV17CHØU7 и ВЕДЬМИН ДОМ. В США витч-хаус переживает второе рождение, при этом в Европе с ним происходят определённые метаморфозы, которые приводят к активному развитию недавно появившийся жанра электронной музыки — wave (не путать с жанром, появившемся в 1980-х годах). Возникают новые исполнители, впоследствии приобретшие большую известность: Fraunhofer Diffraction, † CΛIN † и Craspore.
                            <br /> <br />
                            <h2>Упадок, 2016-2021 гг.</h2>
                            В этот период истории жанра происходит постепенный спад его популярности; также бо́льшая часть известных исполнителей со временем перестаёт активно создавать музыку, творчески стагнируя и не привнося ничего нового в сам жанр, в то время как новых исполнителей практически не появляется. В 2016 году закрываются наиболее значимые и популярные нет-лейблы: Aural Sects (США), Pale Noir (США), Equilateral Records (Чили) и MUTANT FUNK (Россия).
                            <br /><br />В 2021 году впервые за несколько лет в России проходит полноформатный витч-хаус фестиваль CRIMEWAVE, на который собралось порядка 1 500 человек. В том же году возникают новые жанры, такие как дримкор (dreamcore), или вирдкор (weirdcore), которые практически полностью затмевают собой витч-хаус.
                            <br /><br />В январе 2022 состоялась пятая часть крупного фестиваля NEDOSTUPNOSTЬ в Москве.

                        </div>
                    </div>
                </div>
            </section>
            <br /> <br />
        </div>
    );
}
