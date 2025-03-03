import "../MainWebsite.css"
import "../../common/styles/photos.css"
import "../../common/styles/lace-frame.css"

import React, { useEffect, useState, useRef } from 'react'

import Masonry from 'masonry-layout';
import { WATER1_BACKGROUND, WATER2_BACKGROUND } from "../../global-const";

export function PoetryPage() {
    document.documentElement.style.removeProperty('--box-text-color');
    document.documentElement.style.removeProperty('--main-cursor');
    document.documentElement.style.removeProperty('--pointer-cursor');
    document.documentElement.style.setProperty('--box-header-color', `#6096ba`);
    document.documentElement.style.setProperty('--main-background', `url(${WATER1_BACKGROUND})`);
    document.documentElement.style.setProperty('--box-background', `#e7ecef`);

    const galleryRef = useRef(null);

    useEffect(() => {
        if (galleryRef.current) {
            new Masonry(galleryRef.current, {
                itemSelector: '.poetry-block',
                columnWidth: 400,
                gutter: 16,
                fitWidth: true,
                justifyContent: 'center'
            });
        }
    }, []);

    return (
        <div className='main'  style={{display:'flex', justifyContent: 'center', flexWrap:'wrap', maxWidth:'900px'}}>
            <div className="box" >
                <div className="inner"  >
                    Какие-то из моих старых стихов. Ловлю максимальный уровень кринжа от них, но и оставить их тоже где-то хочется
                </div>

            </div>
            <div className="gallery" ref={galleryRef} >

            <div className="poetry-block"  >
                    <div className="box08" >
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner" style={{ textAlign: "justify" }}>
                                <p style={{ textAlign: "right" }}>1 2  марта   2 0 2 2</p>
                                <p style={{ fontWeight: 'bold' }}>Мечтать не вредно</p>
                                <br />
                                Со сладким вкусом выпей яд,<br />
                                Глаза тараща от блаженства.<br />
                                Мечта - губительная тварь, <br />
                                Додумай мир до совершенства.
                                <br /><br />
                                Трави себя и пей до пьянства,<br />
                                Реальность больше не страшна.<br />
                                Пусть небо с грозами ужасно,<br />
                                В моих мечтах лишь облака.
                                <br /><br />
                                Уйди в себя, закрой глаза,<br />
                                Там свой мир с правильным укладом,<br />
                                Где царствует любовь всегда,<br />
                                Ведут старания куда-то.
                                <br /><br />
                                Потом в грязи из лжи проснись, <br />
                                Болит действительности рана,<br />
                                Но ты встряхнись и улыбнись, <br />
                                Утешь себя самообманом.
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                </div>

                <div className="poetry-block"  >
                    <div className="box08" >
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner" style={{ textAlign: "justify" }}>
                                <p style={{ textAlign: "right" }}>4  ноября   2 0 2 1</p>
                                <p style={{ fontWeight: 'bold' }}>К свободе</p>
                                <br />
                                Качается по ветру грустное тело,<br />
                                В поблекших глазах отражается мир.<br />
                                Забытое солнцем, оно очерствело,<br />
                                Иссякла в нем жизнь и потребность любить.
                                <br /><br />
                                Белое платье подвержено ветру, <br />
                                Средь тусклых деревьев сияет она. <br />
                                Закроются веки под тяжестью мира, <br />
                                Покоем ей станет вечная мгла.
                                <br /><br />
                                Душа наконец-то получит свободу<br />
                                От тела, погибшего в вечной тоске.<br />
                                С рассветом она станет частью природы, <br />
                                И дом обретет в белом диком цветке.
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                </div>

                <div className="poetry-block">
                    <div className="box08" >
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner" style={{ textAlign: "justify" }}>
                                <p style={{ textAlign: "right" }}>2 2 ноября   2 0 2 1</p>
                                <p style={{ fontWeight: 'bold' }}>Разбуди меня, когда наступит весна</p>
                                <br />
                                Мир меня встретил угрюмым морозом,<br />
                                Рожденным в декабрь не осталось тепла.<br />
                                В снег превращаются горькие слезы,<br />
                                Сугробов соленых не видно конца.
                                <br /><br />
                                Сквозь них пробираясь, я силы теряю,<br />
                                И падаю я в ожидании весны.<br />
                                Она не наступит, с надеждой прощаясь,<br />
                                Смогу ли покинуть темницу мечты?
                                <br /><br />
                                Неся сквозь года этот холод проклятый,<br />
                                Я жить научилась, греясь во льду.<br />
                                Пусть длиться всегда будет вечный декабрь,<br />
                                Внутри я не дам погаснуть огню.
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                </div>

                <div className="poetry-block">
                    <div className="box08" >
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner" style={{ textAlign: "justify", letterSpacing: '0px' }}>
                                <p style={{ textAlign: "right" }}>1 4  сентября   2 0 2 1</p>
                                <br />
                                Here's a song for you that you will never listen to<br />
                                About all my feelings<br />
                                And if you want to read my mind you just need to press play button<br />
                                But you will never do<br />
                                You never were interested in me and my live and feelings and the fact that you dont know about this song is just confirmation of my words<br />
                                I'm tired of attempts of getting any attention of you<br />
                                Love shouldn't be so paintful<br />
                                And I should stop suffering but i can't<br />
                                I can't just throw you off my head easily like you do<br />
                                I can't do anything to get things better<br />
                                Because I don't have you<br />
                                The one that gave me interest in life<br />
                                And the one that take it away
                                <br /><br />
                                Oh sorry I forget that loving me is just invent
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                </div>

                <div className="poetry-block">
                    <div className="box08">
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner" style={{ textAlign: "justify" }}>
                                <p style={{ textAlign: "right" }}>1 5  ноября   2 0 2 2</p>
                                <p style={{ fontWeight: 'bold' }}> Мне давно стоило покончить с собой, чтобы не чувствовать все это (песня)</p>
                                <br />
                                Неужели так плохо только мне одной,<br />
                                Каждый день рождения наедине с собой,<br />
                                Не могу найти связи ни с миром, ни с людьми,<br />
                                Но они ведь говорили, что счастье впереди.
                                <br /><br />
                                Каждый день я притворяюсь будто все хорошо,<br />
                                Я старалась, я стараюсь, но мне опять не повезло,<br />
                                Будто бы я не достойна ни счастья, ни любви,<br />
                                Потому что мой характер сказал им уйти.
                                <br /><br />
                                Не могу я в компании и слова связать,<br />
                                Потому что это сложно, я ищу куда сбежать,<br />
                                И нет таких людей, с кем мне было б хорошо,<br />
                                А кто был тот ушел, тот от меня ушел.
                                <br /><br />
                                Я не знаю взаимности, я не знаю где мой дом,<br />
                                Я не помню, что же значит чувствовать себя живой,<br />
                                Что значит веселиться, жить в гармонии собой,<br />
                                А не вечно апатичной и не знающей покой.
                                <br /><br />
                                Мне так страшно и мне страшно, что я привыкла так жить,<br />
                                Я по-другому не умею, я не знаю, как мне быть,<br />
                                Я все стараюсь стать лучшей версией себя,<br />
                                У меня есть работа, увлечения, но я
                                <br /><br />
                                Всегда везде одна и пора<br />
                                Мне смириться, что это навсегда моя судьба.
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                </div>

                <div className="poetry-block">
                    <div className="box08">
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner" style={{ textAlign: "justify" }}>
                                <p style={{ textAlign: "right" }}>9  марта   2 0 2 2</p>
                                <p style={{ fontWeight: 'bold' }}>Что со мной не так</p>
                                <br />
                                Под звуки сирены в моей голове<br />
                                Я прячусь от жизни в своей темноте<br />
                                Борьба забирает всю радость мою<br />
                                Пока отдаёшься ты каждому дню
                                <br /><br />
                                Ты будешь смеяться, дружить и любить,<br />
                                Пока я буду заставлять себя жить<br />
                                В поверхностном счастье довольствия нет<br />
                                Когда ты все время ищешь ответ.
                                <br /><br />
                                Вопрос без ответа - мозоль в голове<br />
                                Я задам его снова и снова тебе<br />
                                Но ты не услышишь, ведь я вечно в тени <br />
                                Твоей безответной, жестокой любви
                                <br /><br />
                                Моя личность ничто, я лишь тело с мечтами<br />
                                Смотря сквозь меня, ты не видишь печали <br />
                                Мой крик - это шепот лишь в шумном метро<br />
                                Меня разрывающего его не слышит никто
                                <br /><br />
                                Верни мою радость, разорви нашу связь<br />
                                У тебя мое счастье, ты смеёшься опять<br />
                                У тебя моя я, но ты помнишь хоть имя?<br />
                                А я помню все, и бессильно здесь время.
                                <br /><br />
                                Но я думаю, все может быть<br />
                                Получится у меня все позабыть<br />
                                Пройдет ещё год, и вся боль станет снами<br />
                                Себя начну видеть своими глазами
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                </div>

                <div className="poetry-block">
                    <div className="box08">
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner" style={{ textAlign: "justify" }}>
                                <p style={{ textAlign: "right" }}>2 5  декабря   2 0 2 1</p>
                                <p style={{ fontWeight: 'bold' }}>Снежинки на твоих руках таят, в слезы превращаясь</p>
                                <br />
                                Слезами снежинки стекают<br />
                                Из как хвоя зелёных глаз -<br />
                                Должно быть там вечное лето, <br />
                                Почему затянулась зима?
                                <br /><br />
                                Последняя жизнь потерялась<br />
                                Под глубоким сугробом тоски.<br />
                                Листва лишь жива на деревьях<br />
                                Губительно льда царство и тьмы.
                                <br /><br />
                                Как дерево тускло без листьев<br />
                                Так и лист одинок на земле<br />
                                Всему нужно что-то для жизни<br />
                                Одиночество губит нас всех
                                <br /><br />
                                Скажи мне, ты лист или древо?<br />
                                Лишившись, распустишься вновь?<br />
                                Иль покинув ты свое древо, <br />
                                Погибнешь под чьей-то ногой?
                                <br /><br />
                                Под снегом весны ожидая<br />
                                Листочек зелёный лежит.<br />
                                Он помнит о своем древе,<br />
                                И память жизнь ему хранит.
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                </div>

                <div className="poetry-block">
                    <div className="box08" >
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner" style={{ textAlign: "justify" }}>
                                <p style={{ textAlign: "right" }}>1 1  декабря   2 0 2 1</p>
                                <p style={{ fontWeight: 'bold' }}>(песня)</p>
                                <br />
                                Верни мне моё погибшее сердце,<br />
                                Взгляд полный надежд, устремлённый к мечте.<br />
                                Как ты позволил моей жизни разбиться, <br />
                                Отвергнуть того, кто был предан тебе?
                                <br /><br />
                                Осколки вытащу я новой мечтой,<br />
                                Остатком надежды зашью раны в груди.<br />
                                Заполненный шприц с самообманом<br />
                                Запустит мне в кровь желание жить.
                                <br /><br />
                                Но все бесполезно, скажи мне, не так ли?<br />
                                Тебе не доступен вкус вечной борьбы.<br />
                                В твоём равнодушии звуки пропали,<br />
                                Лишь шепот реальности до боли звучит:
                                <br /><br />
                                "Не друг я тебе, не терзай себя ложью,<br />
                                Вдвоем нам гармонии никак не найти.<br />
                                Пусти наконец себе воздух под кожу,<br />
                                В чемодан сложи чувства и уходи.
                                <br /><br />
                                Таким как ты здесь места нет,<br />
                                Тебя поверхность отрицает.<br />
                                Покинь же тело и лети <br />
                                К планете, созданной печалью.<br />
                                Построй свой сад разбитых грез,<br />
                                Мечты распустятся цветками,<br />
                                Останься и воздвинь там стены,<br />
                                Теперь твой дом не связан с кем-то."
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                </div>

                
                <div className="poetry-block">
                    <div className="box08">
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner" style={{ textAlign: "justify" }}>
                                <p style={{ textAlign: "right" }}>3 0  октября   2 0 2 1</p>
                                <p style={{ fontWeight: 'bold' }}> О прошлом</p>
                                <br />
                                Ещё один вечер, наполненный ядом,<br />
                                Уже ты не помнишь жизни другой.<br />
                                Трезвая жизнь тебе кажется адом,<br />
                                Лишь в пьяном рассудке находишь покой.
                                <br /><br />
                                Недели, года - ты себя убиваешь,<br />
                                А слезы мои тебе просто вода.<br />
                                Так выпей же их до самого края, <br />
                                Уничтожь мне глаза, чтоб не видеть тебя.
                                <br /><br />
                                Веревка закончила твои страдания,<br />
                                Так долго ты вил ее вокруг себя.<br />
                                Давно ты покоен, я не забываю, <br />
                                Тоскую убитой найдут и меня.
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
