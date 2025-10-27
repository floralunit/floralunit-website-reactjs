import "../../styles/tabs.scss"
import "../../styles/list.css"
import "../../styles/bands-page.css"
import "react-image-gallery/styles/css/image-gallery.css"
import { FACE1_CURSOR, FACE2_CURSOR } from '../../../global-const';
import songsData from './songs-lyrics.json';

import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import AlbumListPage from "../../components/AlbumListPage";

export function LaDispute() {
    document.documentElement.style.setProperty('--main-cursor', `url(${FACE1_CURSOR})`);
    document.documentElement.style.setProperty('--pointer-cursor', `url(${FACE2_CURSOR})`);
    document.documentElement.style.setProperty('--box-header-color', '#333333');
    document.documentElement.style.setProperty('--box-header-text-color', '#c0c0c0');

    useEffect(() => {
        document.title = `La Dispute | floralunit world ❤`;
    });

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const images = [
        {
            original: require('./images/1.webp'),
            thumbnail: require('./images/1.webp'),
        },
        {
            original: require('./images/2.webp'),
            thumbnail: require('./images/2.webp'),
        },
        {
            original: require('./images/3.webp'),
            thumbnail: require('./images/3.webp'),
        },
        {
            original: require('./images/4.webp'),
            thumbnail: require('./images/4.webp'),
        },
        {
            original: require('./images/5.webp'),
            thumbnail: require('./images/5.webp'),
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
        <div className="bands la-dispute">
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
                    <h id="head">La Dispute</h>
                    <br />
                    <hr />
                    <b> Жанры: </b> emo, post-hardcore, progressive rock, screamo, spoken word <br />
                    <b> Годы активности: </b> 2004–present <br />
                    <b> Место основания: </b> Grand Rapids, Michigan, U. S. <br />
                    <b> Лейблы: </b> No Sleep, Forest Life, Friction, Better Living, Big Scary Monsters, Epitaph <br />
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="https://ladispute.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a></b>
                        <b><a style={{ textDecoration: 'underline', marginRight: '10px' }} href="http://ladispute.org/" target="_blank" rel="noreferrer">ladispute.org</a></b>
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
                                                <li> <img src={require('../../resources/instruments-images/singer.png')} className={'instrument-image'} alt={''} /> Jordan Dreyer</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Chad Sterenberg</li>
                                                <li> <img src={require('../../resources/instruments-images/guitar.png')} className={'instrument-image'} alt={''} /> Corey Stroffolino</li>
                                                <li> <img src={require('../../resources/instruments-images/bass-guitar.png')} className={'instrument-image'} alt={''} /> Adam Vass</li>
                                                <li> <img src={require('../../resources/instruments-images/drums.png')} className={'instrument-image'} alt={''} /> Brad Vander Lugt</li>
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
                                <img src={require('./images/ladispute.gif')} style={{ float: 'left', width: '150px', margin: '0 20px' }} alt={''} />
                                La Dispute - американская пост-хардкор группа из Гранд-Рапидс, штат Мичиган, основанная в 2004 году. В её нынешний состав входят вокалист Джордан Дрейер, барабанщик Брэд Вандер Лугт, гитаристы Чад Морган-Стеренберг и Кори Строффолино, а также бас-гитарист Адам Васс.
                                <br /><br />
                                Свой творческий путь группа начала с дебютного мини-альбома «Vancouver» (2006) на лейбле Friction Records. Затем, сотрудничая с Forest Life Records, в мае 2008 года La Dispute выпустили релизы «Here, Hear.» и «Untitled 7"». Дебютный студийный альбом «Somewhere at the Bottom of the River Between Vega and Altair» увидел свет в ноябре 2008 года на No Sleep Records - одновременно с ним вышел и «Here, Hear II». Вслед за ними последовали релизы «Here, Hear III», «The Worth of the World», «Never Come Undone», а затем и вторая полноформатная работа «Wildlife». Третий студийный альбом «Rooms of the House» был выпущен в марте 2014 года, а четвёртый, «Panorama», - ровно пять лет спустя, в марте 2019 года. Пятый альбом, «No One Was Driving the Car», группа представила в сентябре 2025 года.
                                <br /><br />
                                <b>Основание, ранние годы и Vancouver (2004–2007)</b>
                                <br /><br />
                                La Dispute образовалась в Гранд-Рапидс, Мичиган, в конце 2004 года благодаря усилиям кузенов Джордана Дрейера и Брэда Вандер Лугта, а также Кевина Уиттемора, Дерека Стеренберга и Адама Кула. Любопытно, что до основания группы Дрейер не имел опыта в качестве вокалиста и автора песен, занимаясь преимущественно литературным творчеством - поэзией и короткими рассказами. В то время коллектив выступал в основном на квартирниках или в Division Avenue Arts Collective - волонтёрском DIY-пространстве, совмещавшем концертную площадку, общественный центр и художественную галерею. Чад Стеренберг пришёл на смену своему старшему брату Дереку в 2006 году, на следующий день после выхода дебютного EP «Vancouver», который стал единственным релизом группы на Friction Records. Позже, в 2007 году, к коллективу присоединился друг группы из Индианы, Адам Васс. Уход Дерека Стеренберга и Адама Кула побудил участников отнестись к проекту с большей серьёзностью.
                                <br /><br />
                                <b>Here, Hear. I, II & III и Somewhere at the Bottom of the River Between Vega and Altair (2008–2009)</b>
                                <br /><br />
                                В начале 2008 года La Dispute заключили контракт с калифорнийским лейблом No Sleep Records. Джордан Дрейер охарактеризовал этот шаг как объединение с единомышленниками, чьи взгляды на музыку совпадали с видением основателя лейбла. Чтобы заполнить паузу между дебютным релизом и предстоящим альбомом, группа выпустила эксклюзивный виниловый сингл «Untitled 7"», состоявший из двух песен, оставшихся от сессий записи дебютного альбома. Тогда же, в мае, вышел EP «Here, Hear.», положивший начало одноимённой серии. По словам Дрейера, этот проект стал для коллектива творческим вызовом, способом расширить горизонты и дать слушателям более глубокий контекст для понимания их творчества.
                                <br /><br />
                                В ноябре 2008 года La Dispute выпустили дебютный альбом «Somewhere at the Bottom of the River Between Vega and Altair» на No Sleep Records. Запись проходила в студии StudiOtte в Гранд-Рапидс. Лирической основой альбома послужила азиатская народная сказка о тяготах принца и принцессы, разделённых после свадьбы рекой, которую им запрещено пересекать. Однако альбом не следует сказке буквально, а использует её как отправную точку для исследования схожих жизненных трудностей. Пластинка была тепло встречена критиками. В поддержку релиза группа отыграла три концерта в родном Мичигане. Дебютный альбом вышел одновременно со вторым мини-альбомом их экспериментальной серии - «Here, Hear II», который также прилагался к первым трём сотням копий альбома.
                                <br /><br />
                                В декабре 2009 года La Dispute представили «Here, Hear III». Мини-альбом был самостоятельно опубликован для цифровой загрузки на их странице Bandcamp. Тогда же на Bandcamp стали доступны «Hear, Hear.», «Hear, Hear II.», «Untitled 7"» и рождественский мини-альбом «Winter Tour Holiday CD-R», включавший две праздничные песни: кавер на «'Twas The Night Before Christmas» и оригинальную композицию «First Snow in Silent Grand Rapids». Загрузка была бесплатной, но слушатели могли сделать пожертвование; все собранные средства были направлены в благотворительную организацию Well House Community Living of Grand Rapids, которая предоставляет временное и постоянное жильё для бездомных семей. В итоге было собрано 1715 долларов.
                                <br /><br />
                                <b>The Worth of the World, Never Come Undone и Wildlife (2010–2012)</b>
                                <br /><br />
                                В апреле-мае 2010 года La Dispute отправились в тур по США в качестве группы поддержки Alexisonfire. В сентябре La Dispute и Touché Amoré выпустили совместный сплит-сингл под названием «Searching for a Pulse/The Worth of the World». Работа над вторым студийным альбомом началась уже в ноябре 2010 года и велась урывками, в перерывах между интенсивными гастролями.
                                <br /><br />
                                В мае 2011 года La Dispute выпустили сплит-EP с американским акустическим исполнителем Эндрю Коджи Шираки (Koji) под названием «Never Come Undone». В июле группа отправилась в канадский тур с Make Do and Mend и Balance and Composure в поддержку этого релиза. Затем La Dispute, Touché Amoré и норвежская хардкор-панк группа Death Is Not Glamorous отыграли совместный европейский тур.
                                <br /><br />
                                В августе La Dispute объявили название своего второго альбома, раскрыли трек-лист и обложку. Пластинка «Wildlife» вышла в октябре 2011 года. Джордан Дрейер охарактеризовал её как «сборник историй и стихов, аннотированных автором и разделённых на тематические части четырьмя монологами». Он также отметил, что альбом представляет собой лирический эксперимент с элементами, изначально предназначавшимися для первого альбома. Анонс сопровождался полным редизайном сайта группы в стилистике «Wildlife». До выхода альбома были представлены два цифровых сингла: «The Most Beautiful Bitter Fruit» и «Harder Harmonies». В конце сентября группа присоединилась к Thrice, Moving Mountains и O'Brother в туре по Соединённым Штатам.
                                <br /><br />
                                На протяжении 2012 года La Dispute провели серию хедлайнерских туров в поддержку «Wildlife», посетив Европу, Австралию и Северную Америку, а также выступив на нескольких летних фестивалях. После этого группа взяла своеобразный творческий отпуск, записав две живые сессии для Audiotree и Violitionist Sessions и завершив год европейским туром с Title Fight и Make Do And Mend.
                                <br /><br />
                                <b>Rooms of the House и уход с No Sleep Records (2013–2017)</b>
                                <br /><br />
                                В 2013 году группа впервые за долгое время отправилась в тур, поддерживая Hot Water Music по США. Перед его началом La Dispute отыграли хедлайнер-шоу с участием множества коллективов. В июне группа в четвёртый раз гастролировала по Австралии в компании Pianos Become the Teeth - идея этого тура родилась из близкой дружбы между участниками групп.
                                <br /><br />
                                В декабре 2013 года на сайте группы появился таймер, намекавший на анонс нового альбома. Вскоре La Dispute объявили, что их новый альбом «Rooms of the House» выйдет в марте 2014 года и будет спродюсирован Уиллом Ипом. Одновременно коллектив сообщил об уходе с No Sleep Records и создании собственного лейбла Better Living. В Великобритании и Европе альбом был выпущен на лейбле Big Scary Monsters.
                                <br /><br />
                                В апреле 2014 года основатель группы и гитарист Кевин Уиттемор покинул её состав, отыграв последний концерт в Кливленде, Огайо.
                                <br /><br />
                                На протяжении 2014 года группа отыграла более 70 концертов в 16 странах мира. «Rooms of the House» был отмечен в нескольких итоговых списках года, а саму группу назвали одним из лучших концертирующих коллективов.
                                <br /><br />
                                В 2016 году группа гастролировала по США и Канаде с Thrice и Gates, а затем снова с Thrice и Nothing, Nowhere. На вопрос о том, является ли их документальный фильм «Tiny Dots» завершением главы или всей книги, группа ответила, что не знает, каков будет следующий шаг, но считает фильм подходящим способом закрыть эту главу.
                                <br /><br />
                                Спустя десять лет после выхода альбома, в мае 2024 года, был выпущен ранее не издававшийся би-сайд «Elster Stares the Desert Down».
                                <br /><br />
                                <b>Переиздание Somewhere at the Bottom of the River и Panorama (2018–2021)</b>
                                <br /><br />
                                В августе 2018 года группа объявила о переиздании альбома «Somewhere at the Bottom of the River Between Vega and Altair» к его 10-летнему юбилею. Релиз включал новые версии оригинальных записей гитар и баса, а также новое сведение и мастеринг. Одновременно с этим группа представила обновлённую версию песни «The Castle Builders» и анонсировала тур по США с Circa Survive.
                                <br /><br />
                                В сентябре стало известно, что группа подписала контракт с Epitaph Records для записи своего четвёртого студийного альбома «Panorama».
                                <br /><br />
                                Первые две песни с альбома, «Rose Quartz» и «Fulton Street I», были представлены в декабре через NPR's All Songs Considered вместе с анимированным клипом. В январе был показан трек «Footshots at the Pond» с очередным анимированным видео.
                                <br /><br />
                                Альбом «Panorama» был выпущен в марте 2019 года. В декабре того же года вышел альбом ремиксов.
                                <br /><br />
                                <b>Постпандемийный период, юбилейные туры и No One Was Driving The Car (2021 – настоящее время)</b>
                                <br /><br />
                                В июне 2022 года La Dispute объявили о запоздалом юбилейном туре в честь 10-летия «Wildlife» по Северной Америке. Группа подтвердила, что в ближайшем будущем тур дойдёт до Великобритании, ЕС и Австралии, что и произошло в 2023 году. В марте 2024 года группа анонсировала пять шоу в честь 10-летия «Rooms of the House» в Лондоне, Амстердаме, Берлине, Сиднее и своём родном Гранд-Рапидсе.
                                <br /><br />
                                В июне 2024 года La Dispute в интервью раскрыли, что их следующий альбом, «No One Was Driving the Car», выйдет в 2025 году. Официальный анонс состоялся в мае 2025 года, а релиз был назначен на сентябрь. Перед анонсом фанаты получили загадочные письма, ведущие на секретный сайт с ARG и пасхальными яйцами, которые были разгаданы сообществом в Discord. Позже фанатам показали раннюю премьеру клипа на песню «I SHAVED MY HEAD» и первую главу документального фильма о создании альбома.
                                <br /><br />
                                <h4>Особенности творчества</h4>
                                <br />
                                <b>Логотип и название группы</b><br /><br />
                                Группа всегда использовала логотип, схожий с нынешним. Его компьютерная версия была представлена в октябре 2010 года. Название коллектива происходит из одноимённой пьесы Пьера де Мариво 1744 года, которую Дрейер смотрел в старшей школе и почувствовал параллели между произведением и музыкой, которую он писал в то время.
                                <br /><br />
                                <b>Музыкальный стиль</b><br /><br />
                                Джордан Дрейер скептически высказывался о ярлыках для описания стиля группы, отмечая, что категоризация искусства часто лишь ограничивает восприятие его вариаций. Тем не менее, La Dispute характеризуют как группу, играющую пост-хардкор с влиянием джаза, блюза и спокен-ворда, вплетая в свою музыку элементы скримо, прогрессив-рока, пост-рока и хардкор-панка. Узнаваемыми чертами их звучания являются вкрапления спокен-ворда в интенсивные композиции, сложные, многослойные тексты и гибкий вокал Джордана Дрейера, переключающийся между пением и скримом, чтобы точнее передать эмоциональный настрой музыки и лирики. Инструментовку группы часто описывают как «near-shoegaze guitar drones», а их творчество в целом сравнивают с исповедальными дневниковыми записями.
                                <br /><br />
                                Музыка их первого альбома рассматривается как сплав элементов панка, прогрессив-рока, эмо и металкора.
                                <br /><br />
                                Второй альбом, «Wildlife», продемонстрировал более сдержанный подход, сочетая элементы их сплитов с Touché Amoré и Koji. Его структура была иной: тексты и концепция были созданы до музыки. Лирика альбома представляет собой тематический сборник «коротких историй», исследующих жизненные трудности, которые формируют и определяют личность. Группа черпала вдохновение в реальных проблемах и историях, с которыми они столкнулись или о которых слышали в своём родном городе.
                                <br /><br />
                                <h4>Влияния</h4><br />
                                На группу повлиял широкий спектр музыки, и у каждого участника есть свои предпочтения. Среди общих влияний называют пост-хардкор-группы, такие как Thursday, Refused, At the Drive-In и Glassjaw. Джордан Дрейер писал, что La Dispute, возможно, никогда бы не состоялась как группа без mewithoutYou, и что на него особенно повлияла сценическое присутствие вокалиста Аарона Вайсса. Барабанщик Брэд Вандер Лугт отмечал влияние блюза и джаза. Дрейер упоминал, что его лирические пристрастия сформировались под влиянием писателей-фантастов, а не поэзии, особенно выделяя Курта Воннегута и Владимира Набокова. Группа также отмечает местные мичиганские коллективы Ivan и Coal Black Horse как оказавшие на них значительное влияние.
                                <br /><br />
                                La Dispute считают частью само провозглашённой группы пост-хардкор команд под названием «The New Wave of Post-hardcore» или «The Wave», в которую входят Defeater, Make Do and Mend, Pianos Become the Teeth и Touché Amoré. Изначально термин был внутренней шуткой между группами, но был воспринят публикой серьёзно. «The Wave» описывали как движение с сильным лирическим акцентом, напоминающее эмо-сцену 90-х. La Dispute также отмечают как часть возрождения скримо.
                                <br /><br />
                                <b>«Эксперимент» Here, Hear</b><br /><br />
                                У La Dispute есть продолжающаяся серия мини-альбомов под названием «Here, Hear», которую они называют «экспериментом». Музыка на этих EP описывается как преимущественно спокен-ворд и экспериментальная. Джордан Дрейер сказал, что группа будет продолжать выпускать материал «Here, Hear» до тех пор, пока будет создавать музыку. Первые два мини-альбома добавляли инструментальное сопровождение к произведениям поэтов и писателей, таких как Том Роббинс, Эдгар Аллан По и Кеннет Грэм. Однако для третьей части группа использовала собственную поэзию Дрейера. Выпуск «Here, Hear IV» изначально был отложен, чтобы сосредоточиться на «Rooms of the House». Первый сингл «Thirteen» был выпущен в мае 2016 года, а весь EP увидел свет в марте 2024 года.
                                <br /><br />
                                <h4>Благотворительность</h4><br />
                                Группа активно сотрудничает с благотворительными организациями по всему миру, включая Wellhouse и 826 National в Мичигане, Teenage Cancer Trust в Великобритании и Headspace в Австралии. Каждый год в рождественский период La Dispute делают весь свой каталог доступным для бесплатной загрузки, предлагая слушателям сделать пожертвование в пользу выбранной ими организации.
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
                                <h4>La Dispute on growing up in a band and their new album | DIFFUS</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/kBTyhJ0mbm4?si=5MtdMmRh6HNDnTik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <h4>La Dispute on Audiotree Live (Full Session)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/5NtUbkp8ZCc?si=t61MzDln4tCGDnYV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>[hate5six] La Dispute: Live in Philadelphia, a hate5six concert film (September 25, 2022)</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/3ycLCYurmZg?si=8iEB5SmNu2spA3RU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                                <h4>La Dispute "Such Small Hands" music video.</h4>
                                <br />
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/4n3lJNHCmr4?si=pkjOIKiFDPM1InFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}

