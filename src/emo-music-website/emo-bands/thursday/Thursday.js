import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import AlbumListPage from "../../components/AlbumListPage";

export function Thursday() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '333333');
    document.documentElement.style.setProperty('--box-header-text-color', 'c0c0c0');

    useEffect(() => {
        document.title = `Thursday | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/3.webp'),
            thumbnail: require('./images/3.webp'),
        },
        {
            original: require('./images/5.webp'),
            thumbnail: require('./images/5.webp'),
        },
        {
            original: require('./images/1.webp'),
            thumbnail: require('./images/1.webp'),
        },
        {
            original: require('./images/2.webp'),
            thumbnail: require('./images/2.webp'),
        },
        {
            original: require('./images/4.webp'),
            thumbnail: require('./images/4.webp'),
        },
        {
            original: require('./images/6.webp'),
            thumbnail: require('./images/6.webp'),
        },
        {
            original: require('./images/7.webp'),
            thumbnail: require('./images/7.webp'),
        },
        {
            original: require('./images/8.webp'),
            thumbnail: require('./images/8.webp'),
        },
        {
            original: require('./images/9.webp'),
            thumbnail: require('./images/9.webp'),
        }
    ];

    return (
        <div className="bands thursday">
            <div className='bands-container'>
                <br />
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    <Link className='link-back' to="/emo">
                        <img src={require("../../../main-website/resources/pixels/zJZuQV8.gif")} style={{ height: '15px' }} alt='' />
                        <span >&nbsp;back to emo page&nbsp;</span>
                        <img src={require("../../../main-website/resources/pixels/zJZuQV8.gif")} style={{ width: '15px' }} alt='' />
                    </Link>
                </div>
                <div className="header">
                    <h id="head">Thursday</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, screamo, post-hardcore, melodic hardcore <br />
                    <b> Годы активности: </b> 1997–2012, 2016–2019, 2020–present <br />
                    <b> Место основания: </b> New Brunswick, New Jersey, U. S. <br />
                    <b> Лейблы: </b> United Nations, No Devotion, L.S. Dunes <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://thursday.bandcamp.com//" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://www.thursday.net/" target="_blank" rel="noreferrer">thursday.net</a></b>
                    </div>

                </div>
                <div className="data">
                    <br />
                    <div className="tab-bar radius">
                        <button className={toggleState === 1 ? "tab selected" : "tab"} onClick={() => toggleTab(1)}
                            data-text="О группе">
                            <span className="icon">О группе</span>
                        </button>
                        <button className={toggleState === 2 ? "tab selected" : "tab"} onClick={() => toggleTab(2)}
                            data-text="Дискография">
                            <span className="icon">Дискография / Тексты песен</span>
                        </button>
                        <button className={toggleState === 3 ? "tab selected" : "tab"} onClick={() => toggleTab(3)}
                            data-text="Видосы">
                            <span className="icon">Видосы</span>
                        </button>
                    </div>
                    <br />
                    <div className={"bands-data"}>
                        <div className="content-tabs">
                            <div
                                className={toggleState === 1 ? "content  active-content" : "content"}
                            >
                                <div className={"Parent"}>
                                    <div style={{ width: '40%' }}>
                                        <div>
                                            <h3> Состав </h3>
                                            <ol className="rectangle">
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Geoff Rickly, Tom Keeley</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Tom Keeley</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Steve Pedulla</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Tim Payne</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Tucker Rule</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div style={{ width: '60%', margin: '0 auto' }}>
                                        <div className="image-gallery-bands">
                                            <ImageGallery items={images} thumbnailPosition='right' originalWidth={50} slideInterval={1500} />
                                        </div>
                                    </div>
                                </div>
                                <h3> Биография </h3>
                                <br />
                                <img src={require('./images/symbol.webp')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                Thursday - американская пост-хардкор-группа, основанная в Нью-Брансуике, штат Нью-Джерси. Коллектив состоит из Джеффа Рикли (вокал), Тома Кили (соло-гитара, бэк-вокал), Стива Педуллы (ритм-гитара, бэк-вокал), Тима Пейна (бас-гитара) и Такера Рулa (ударные).
                                <br /><br />
                                Их дебютный альбом «Waiting» вышел с оригинальным гитаристом Биллом Хендерсоном, который покинул группу и был заменен Педуллой. Настоящая популярность пришла к Thursday после второго альбома «Full Collapse». Дебютный релиз группы на мейджор-лейбле, «War All the Time», дебютировал на седьмой строчке американского хит-парада Billboard 200. Вслед за ним группа выпустила «A City by the Light Divided», «Common Existence» и «No Devolución», после чего объявила о неопределенном перерыве по завершении австралийского тура. Позже Рикли подтвердил, что это был полный роспуск группы.
                                <br /><br />
                                Thursday воссоединились, давали концерты в течение нескольких лет и вновь распались. Однако группа объявила о новом воссоединении в рамках фестиваля Riot Fest в Чикаго. В том же году группа выпустила «Application for Release From the Dream» - свою первую новую песню за долгие годы.
                                <br /><br />
                                Thursday считаются одной из самых влиятельных групп на сцене пост-хардкора двухтысячных; их признают ключевым коллективом, популяризировавшим более мрачное звучание в эмо и использование скриминга, которые стали визитной карточкой того времени.
                                <br /><br />
                                <h4>Логотип</h4><br />
                                Thursday использовали логотип в виде голубя, который фигурирует на многих работах и мерчендайзе группы. Считается, что голубь был придуман гитаристом Томом Кили в тур-автобусе до записи «Full Collapse». Строчки из песни «Cross Out the Eyes» с того альбома дважды отсылают к голубю. Логотип впервые появился на обложке «War All the Time» и присутствовал на artwork всех последующих альбомов и синглов группы вплоть до две тысячи одиннадцатого года, когда он заметно отсутствовал на обложке их шестого альбома «No Devolución».
                                <br /><br />
                                Группа также использовала второй логотип - красную мишень с небольшим шевроном под ней. Он впервые появился на обложке «A City by the Light Divided» и использовался на мерче, связанном с этим альбомом.
                                <br /><br />
                                Кроме того, Шепард Фейри (создатель Obey) создал artwork для группы с новым логотипом голубя, который затем использовался в других его работах.
                                <br /><br />
                                <h4>История группы</h4><br />
                                <h4>Основание и альбом «Waiting»</h4><br />
                                Группа Thursday была основана вокалистом Джеффом Рикли, гитаристом Томом Кили, гитаристом Биллом Хендерсоном, басистом Тимом Пейном и барабанщиком Такером Рулом. Коллектив начинал с выступлений в подвалах Нью-Брансуика, где они были студентами Университета Рутгерса, и их первое официальное шоу состоялось в подвале самого Рикли.
                                <br /><br />
                                Летом группа записала свой первый официальный релиз, мини-альбом «Summer Tour EP», который включал демо-версии песен, впоследствии вошедших в их дебютный альбом «Waiting». Альбом был выпущен на лейбле Eyeball Records без какой-либо поддержки синглами, телевидением или радио.
                                <br /><br />
                                <h4>«Full Collapse»</h4><br />
                                В две тысячи первом году Thursday подписали контракт с независимым лейблом Victory Records. Вскоре после этого они выпустили свой второй альбом «Full Collapse», который впоследствии достиг позиции в чарте Billboard 200. Отношения группы с лейблом были напряженными; по словам участников, лейбл не советовался с ними по поводу мерчендайза и промоушена. Разочарование в лейбле и внутренние проблемы едва не привели к распаду группы. Чтобы выполнить контрактные обязательства, Thursday выпустили концертный мини-альбом «Five Stories Falling», на котором была всего одна новая студийная запись - песня «Jet Black New Year». Группа на концертах просила поклонников не покупать этот религ, а вместо этого скачать новую песню.
                                <br /><br />
                                В течение этого периода группу начали преследовать мейджор-лейблы. Люди с Island Records посещали их шоу и в конечном итоге выразили заинтересованность в подписании контракта.
                                <br /><br />
                                <h4>«War All the Time»</h4><br />
                                В конце мая две тысячи второго года группа объявила о подписании контракта с Island Records после торговой войны между несколькими мейджор-лейблами. На тот момент «Full Collapse» был продан тиражом в сто одиннадцать тысяч копий. Официальный переход на Island Records состоялся после переговоров о выходе из контракта с Victory Records. Соглашение требовало, чтобы материнская компания Island/Def Jam выкупила контрактные обязательства группы за следующие два альбома. По словам Рикли, в результате сделки Victory Records получила сумму, которую группе предстояло «отрабатывать» на новом лейбле. Кроме того, на их следующих двух альбомах должен был присутствовать логотип Victory.
                                <br /><br />
                                После интенсивного шестимесячного процесса написания и записи группа выпустила свой третий альбом и дебют на мейджор-лейбле, «War All the Time». Несмотря на то, что название альбома и время его выхода (примерно через два года после террористических актов) наводили на мысли о политическом содержании, Рикли отрицал это, заявляя, что песни повествуют о любви как о войне. Альбом породил два сингла: «Signals Over the Air» и заглавный «War All the the Time», причем последний получил значительно меньше внимания из-за запрета клипа на песню на MTV за спорный материал.
                                <br /><br />
                                Группа активно гастролировала в поддержку альбома, выступая с такими группами, как AFI, Thrice и Coheed and Cambria. Затем группа взяла неопределенный перерыв, ссылаясь на давление лейбла, интенсивные гастроли и проблемы со здоровьем.
                                <br /><br />
                                <h4>«A City by the Light Divided» и сплит с Envy</h4><br />
                                Осенью пять демо-песен Thursday были похищены с iPod тур-менеджера другой группы. Коллектив выразил разочарование утечкой неготового материала, но подтвердил, что одна из песен, «At This Velocity», войдет в их следующий альбом.
                                <br /><br />
                                Thursday выпустили свой четвертый альбом «A City by the Light Divided». Это был первый полноформатный альбом группы, спродюсированный Дэйвом Фридманом, а не Сэлом Вильянуэвой. Название альбома было придумано Джеффом Рикли путем объединения двух строк из поэмы Октавио Паса «Солнечный камень». Альбом породил два сингла: «Counting 5-4-3-2-1» и «At This Velocity». Группа покинула Island Records в начале две тысячи седьмого года.
                                <br /><br />
                                На своем новогоднем шоу группа анонсировала, что будет писать и записывать новый материал. Они отменили все туры до осеннего тура в поддержку сборника DVD/CD «Kill the House Lights», который включал демо, неизданные песни, записи живых выступлений и документальный фильм о группе. Альбом был выпущен их бывшим лейблом Victory Records.
                                <br /><br />
                                Группа анонсировала сплит-альбом с японской пост-хардкор-группой Envy, который был выпущен на лейбле Temporary Residence Limited.
                                <br /><br />
                                <h4>«Common Existence»</h4><br />
                                Группа объявила о подписании контракта с Epitaph Records, заявив, что испытывает «великолепное чувство от того, что лейбл поощряет тебя быть более социально сознательным и политически активным». Thursday выпустили свой пятый студийный альбом «Common Existence». Рикли объяснил, что название альбома отсылает к общему опыту человечества, а многие песни были вдохновлены творчеством его любимых поэтов и писателей.
                                <br /><br />
                                Thursday хедлайнили тур Taste of Chaos, однако он оказался неудачным опытом для группы, так как большая часть аудитории приходила на выступления хедлайнеров, а сама группа испытывала идеологические разногласия с некоторыми участниками тура.
                                <br /><br />
                                <h4>«No Devolución» и роспуск</h4><br />
                                Thursday начали запись своего следующего альбома в июле две тысячи десятого года на студии Tarbox Road Studios с Дэйвом Фридманом. Их шестой альбом «No Devolución» был выпущен в апреле две тысячи одиннадцатого года. Рикли охарактеризовал стиль альбома как радикальный отход от ранних работ, но возврат к уязвимости в содержании, отметив, что основная лирическая тема - преданность.
                                <br /><br />
                                В конце ноября группа опубликовала на своем официальном сайте и в Twitter заявление под названием «Thanks & Love», в котором выразила намерение прекратить совместное творчество. В заявлении не уточнялось, распадается группа или уходит в бессрочный перерыв, но отмечалось, что из-за личных обстоятельств «невозможно продолжать Thursday в том духе, который делал его особенным». Их последний концерт состоялся на фестивале Soundwave в Перте, Австралия.
                                <br /><br />
                                В январе две тысячи тринадцатого года Джефф Рикли в интервью заявил, что Thursday фактически распались, а термин «перерыв» использовался на случай, если группа когда-либо решит сыграть снова, но нового материала больше не будет.
                                <br /><br />
                                После роспуска Рикли основал группу No Devotion с бывшими участниками Lostprophets и продолжил работу с сайд-проектом United Nations. Такер Рул стал концертным барабанщиком для групп The Wanted и Yellowcard.
                                <br /><br />
                                <h4>Воссоединение и второй распад</h4><br />
                                В январе две тысячи шестнадцатого года бывшие участники Thursday опубликовали совместное фото, что породило слухи о воссоединении, но Рикли их быстро опроверг. Однако два месяца спустя группа объявила о воссоединении на фестивале Wrecking Ball в Атланте. Рикли заявил, что им удалось примирить все разногласия, и они будут выступать в том же составе, что и во времена «Full Collapse».
                                <br /><br />
                                Группа объявила о серии концертов, включая выступления на фестивалях Riot Fest и «возвращенческое» шоу в Starland Ballroom. В две тысячи семнадцатом году они отправились в свой первый полноценный тур с момента роспуска.
                                <br /><br />
                                В октябре две тысячи восемнадцатого года группа объявила, что их воссоединение завершится в две тысячи девятнадцатом году, чтобы на этот раз закончить гастроли «на самой высокой ноте». Запланированный финальный концерт должен был состояться в клубе Saint Vitus в Бруклине.
                                <br /><br />
                                Однако из-за давления со стороны международных поклонников группа объявила о дополнительных концертах в Германии, Нидерландах и Великобритании, где они отыграли альбомы «Full Collapse» и «War All the Time» целиком. Группа также выступила на разогреве у воссоединившихся My Chemical Romance.
                                <br /><br />
                                <h4>Второе возвращение</h4><br />
                                В июне две тысячи двадцатого года Thursday объявили, что их первое шоу почти за два года состоится на фестивале Riot Fest в сентябре две тысячи двадцать первого года. Группа воссоединилась без Эвердинга, вернувшись к составу эпохи «Full Collapse» и «War All the Time». В период с августа две тысячи двадцатого по апрель две тысячи двадцать первого года группа представила три виртуальных выступления под названием «Signals».
                                <br /><br />
                                В июне две тысячи двадцать первого года группа представила кавер на песню Брюса Спрингстина «Dancing in the Dark» и сыграла серию живых концертов на восточном побережье и среднем западе США вместе с Taking Back Sunday и Piebald.
                                <br /><br />
                                Группа была упомянута в книге Дэна Оззи «Sellout: The Major Label Feeding Frenzy That Swept Punk, Emo, And Hardcore», где одна из глав была посвящена альбому «War All the Time», а фото группы стало обложкой книги.
                                <br /><br />
                                Летом группа хедлайнировала фестиваль This is Hardcore в Филадельфии, исполнив «Full Collapse» целиком. Осенью того же года Thursday присоединились к My Chemical Romance в качестве гостей в их североамериканском туре. На последнем совместном выступлении Thursday исполнили «Jet Black New Year» при участии Джерарда Уэя, а Рикли затем исполнил песню «This Is the Best Day Ever» вместе с My Chemical Romance.
                                <br /><br />
                                В апреле две тысячи двадцать четвертого года группа выпустила свою первую новую песню за тринадцать лет - «Application for Release From the Dream» - и раскрыла планы на запись и выпуск новой музыки в будущем. В декабре того же года вышел еще один новый трек, «White Bikes». По словам Рикли, текст песни посвящен потере близкого друга.
                                <br /><br />
                                <h4>Музыкальный стиль и влияния</h4><br />

                                Музыкальный стиль Thursday характеризуют как пост-хардкор, эмо и скримо. Сами участники в прошлом отвергали эти ярлыки; гитарист Педулла заявлял, что они «всегда описывали себя как мелодичный хардкор».
                                <br /><br />
                                На заре творчества на Thursday повлияли такие группы, как The Smiths, The Cure, Joy Division, Fugazi, Drive Like Jehu, New Order, Quicksand, <NavLink to="/emo/saetia">Saetia</NavLink>, Refused, Lungfish, Circus Lupus, Rites of Spring и Embrace. По словам Рикли, звучание Thursday сформировалось под влиянием местной сцены Нью-Брансуика, где на одних и тех же концертах выступали артисты с совершенно разным звучанием. Со временем группа впитала элементы творчества таких разнообразных коллективов, как Sigur Rós, My Bloody Valentine, Mogwai, Godspeed You! Black Emperor, <NavLink to="/emo/sunny-day-real-estate">Sunny Day Real Estate</NavLink>, The Appleseed Cast, At the Drive-In и Jawbox.
                            </div>
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <><AlbumListPage albums={songsData} /></>
                        </div>
                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <h4>Thursday: Kill The House Lights (Documentary)</h4><br />
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/AhM0FXZo5Qs?si=1RtoEbux7JgYdd_F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>THURSDAY [FULL REUNION SET] LIVE @ Wrecking Ball ATL (Aftershow)</h4><br />
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/yvMc30hOQzE?si=ky_3JIXI1lpp3KDC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <br /><br />
                                <h4>[hate5six] Thursday - November 21, 2001</h4><br />
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/WI39YZ15DdQ?si=Tpnh3gJWCVbBkSRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Thursday - Understanding In a Car Crash (Official HD Video)</h4><br />
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/8-cepZ6K7mY?si=KvR9kKENuWn4B43n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>Thursday - War All The Time</h4><br />
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/aAD6lJiHBdA?si=frnILy36tuenmURg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

