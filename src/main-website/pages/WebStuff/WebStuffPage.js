import React from "react";
import ScrollListener from "../../../common/components/ScrollListener";
import Background from '../../../common/images/backgrounds/main-background.png';
import Background1 from '../../resources/Frog_Croaking.gif';
import Background2 from '../../resources/ppl-roses.png';
import {CLOUD_BACKGROUND, SUN_BACKGROUND} from "../../../global-images";
import {Helmet} from "react-helmet";

export function WebStuffPage() {
/*    document.documentElement.style.removeProperty('--box-header-color');
    document.documentElement.style.removeProperty('--main-background');
    document.documentElement.style.removeProperty('--box-background');*/

    document.documentElement.style.setProperty('--box-header-color', '#272829');
    document.documentElement.style.setProperty('--main-background',  `url(https://dl.glitter-graphics.com/pub/3650/3650018mbys5bgddk.gif)`);
    // document.documentElement.style.setProperty('--main-background',  `url(https://dl.glitter-graphics.com/pub/3650/3650018mbys5bgddk.gif)`);
    document.documentElement.style.setProperty('--box-background',  `url(https://sadhost.neocities.org/images/tiles/num.gif)`);
    return (
        <div className='main' style={{maxWidth: '660px'}}>
            <Helmet>
                <meta
                    name="viewport"
                    content='width=650px, initial-scale=1'
                />
            </Helmet>
            <div className='box'>
                {/*<>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={4}
                        scrolldelay={10}
                        height={579}
                        style={{
                            position: "absolute",
                            left: "57%",
                            top: 87,
                            width: 45,
                            height: 579
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={6}
                        scrolldelay={21}
                        height={539}
                        style={{
                            position: "absolute",
                            left: "13%",
                            top: 106,
                            width: 45,
                            height: 539
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={1}
                        scrolldelay={16}
                        height={582}
                        style={{
                            position: "absolute",
                            left: "59%",
                            top: 162,
                            width: 45,
                            height: 582
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={6}
                        scrolldelay={9}
                        height={644}
                        style={{
                            position: "absolute",
                            left: "89%",
                            top: 196,
                            width: 45,
                            height: 644
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={2}
                        scrolldelay={11}
                        height={657}
                        style={{
                            position: "absolute",
                            left: "74%",
                            top: 56,
                            width: 45,
                            height: 657
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={4}
                        scrolldelay={27}
                        height={667}
                        style={{
                            position: "absolute",
                            left: "37%",
                            top: 95,
                            width: 45,
                            height: 667
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={4}
                        scrolldelay={50}
                        height={625}
                        style={{
                            position: "absolute",
                            left: "11%",
                            top: 151,
                            width: 45,
                            height: 625
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={6}
                        scrolldelay={13}
                        height={628}
                        style={{
                            position: "absolute",
                            left: "60%",
                            top: 87,
                            width: 45,
                            height: 628
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={1}
                        scrolldelay={47}
                        height={601}
                        style={{
                            position: "absolute",
                            left: "80%",
                            top: 21,
                            width: 45,
                            height: 601
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={4}
                        scrolldelay={37}
                        height={657}
                        style={{
                            position: "absolute",
                            left: "15%",
                            top: 66,
                            width: 45,
                            height: 657
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={1}
                        scrolldelay={26}
                        height={597}
                        style={{
                            position: "absolute",
                            left: "24%",
                            top: 152,
                            width: 45,
                            height: 597
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={1}
                        scrolldelay={36}
                        height={578}
                        style={{
                            position: "absolute",
                            left: "19%",
                            top: 71,
                            width: 45,
                            height: 578
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={5}
                        scrolldelay={21}
                        height={573}
                        style={{
                            position: "absolute",
                            left: "30%",
                            top: 118,
                            width: 45,
                            height: 573
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={2}
                        scrolldelay={41}
                        height={650}
                        style={{
                            position: "absolute",
                            left: "22%",
                            top: 17,
                            width: 45,
                            height: 650
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={5}
                        scrolldelay={45}
                        height={644}
                        style={{
                            position: "absolute",
                            left: "79%",
                            top: 129,
                            width: 45,
                            height: 644
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={5}
                        scrolldelay={23}
                        height={587}
                        style={{
                            position: "absolute",
                            left: "95%",
                            top: 114,
                            width: 45,
                            height: 587
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={3}
                        scrolldelay={32}
                        height={525}
                        style={{
                            position: "absolute",
                            left: "21%",
                            top: 175,
                            width: 45,
                            height: 525
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={5}
                        scrolldelay={39}
                        height={603}
                        style={{
                            position: "absolute",
                            left: "31%",
                            top: 81,
                            width: 45,
                            height: 603
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={5}
                        scrolldelay={30}
                        height={501}
                        style={{
                            position: "absolute",
                            left: "16%",
                            top: 112,
                            width: 45,
                            height: 501
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                    <marquee
                        behavior="scroll"
                        direction="down"
                        scrollamount={5}
                        scrolldelay={45}
                        height={567}
                        style={{
                            position: "absolute",
                            left: "95%",
                            top: 70,
                            width: 45,
                            height: 567
                        }}
                    >
                        <img
                            src="http://dl3.glitter-graphics.net/pub/23/23663g1rf0y4u43.gif"
                            border={0}
                        />
                    </marquee>
                </>*/}

                <div style={{display: 'flex'}}>
                    <div style={{order: 1}}>
                        <iframe style={{width: '314px', height: '321px'}} scrolling="no"
                                src="https://gifypet.neocities.org/pet/pet.html?name=Radost'&dob=1693851633&gender=f&element=Air&pet=https%3A%2F%2Fartwork.neocities.org%2Fpixels%2Fkaoanis%2Fwillothewisp01.gif&map=night.gif&background=https%3A%2F%2Fsadhost.neocities.org%2Fimages%2Ftiles%2Fbrilloazul1.gif&tablecolor=white&textcolor=white"
                                frameBorder="0"></iframe>
                    </div>
                    <div style={{display: 'flex', height: '321px', alignItems: 'center', order: 2, width: '100%'}}>
                        <div>
                            <div className="buttons">
                                <a href="https://neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://anlucas.neocities.org/neocities_button.gif"
                                    alt='This website is hosted by NeoCities'/></a>
                                <a href="https://neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://milfgod.net/neocities.gif" alt=''/></a>
                                <a href="https://www.imood.com/users/floralunit"><img
                                    src="https://moods.imood.com/display/uname-floralunit/imood.gif"
                                    alt="The current mood of floralunit at www.imood.com" border="0"/></a>
                                <a href="https://www.aseprite.org/" target="_blank" rel="noreferrer"><img
                                    src="https://spiritcellar.neocities.org/images/badges/aseprite.png" alt=""/></a>
                                <img src="https://dimden.dev/images/buttons/win95.gif" alt=''/>
                            </div>
                            <div
                                style={{fontSize: "xx-small", margin: '0', padding: '0', textAlign: 'center'}}>
                                <img src="https://text.glitter-graphics.net/heart/m.gif" border={0}
                                     style={{width: '20px'}}/>
                                <img src="https://text.glitter-graphics.net/heart/y.gif" border={0}
                                     style={{width: '20px'}}/>
                                <img src="https://dl3.glitter-graphics.net/empty.gif" width={20} border={0}
                                     style={{width: '20px'}}/>
                                <img src="https://text.glitter-graphics.net/heart/b.gif" border={0}
                                     style={{width: '20px'}}/>
                                <img src="https://text.glitter-graphics.net/heart/u.gif" border={0}
                                     style={{width: '20px'}}/>
                                <img src="https://text.glitter-graphics.net/heart/t.gif" border={0}
                                     style={{width: '20px'}}/>
                                <img src="https://text.glitter-graphics.net/heart/t.gif" border={0}
                                     style={{width: '20px'}}/>
                                <img src="https://text.glitter-graphics.net/heart/o.gif" border={0}
                                     style={{width: '20px'}}/>
                                <img src="https://text.glitter-graphics.net/heart/n.gif" border={0}
                                     style={{width: '20px'}}/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <figure>
                                    <img src={require('../../../common/my-button/floralunit-button.gif')}
                                         style={{width: '88px', height: '31px'}}/>
                                    <textarea
                                        className="copy-button">&lt;a href="https://sadgrl.online/" target="_blank"&gt;&lt;img src="https://sadgrl.online/assets/images/buttons/sadgrlonline.gif"&gt;&lt;/a&gt;</textarea>
                                </figure>
                            </div>
                            The Internet currently feels <a href="https://www.imood.com/imood"><img
                            src="https://moods.imood.com/internet/current.gif"
                            alt="The current mood of the Internet at www.imood.com" border="0" style={{width: '48px', height: '15px'}}/></a>
                        </div>
                    </div>

                </div>
                <div className="box08">
                    <div className="box-top">
                        <div className="u01"></div>
                    </div>
                    <div className="box-center">
                        <div className="box-inner">
                            <a href="https://transform.tools/html-to-jsx">html-to-jsx</a>
                            <p>Backgronds, icons etc</p>
                            <div className="buttons">
                                <a href="https://sadgrl.online/" target="_blank" rel="noreferrer"><img
                                    src="https://sadgrl.online/assets/images/buttons/sadgrlonline.gif" alt=''/></a>
                                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img
                                    src="https://foollovers.com/link/image/foollovers8826.gif" alt=''/></a>
                                <a href="https://cinni.net/" target="_blank" rel="noreferrer"><img
                                    src="https://cinni.net/images/button/cinni_angelbutton3.gif" alt=''/></a>
                                <a href="https://blinkies.cafe/" target="_blank" rel="noreferrer"><img
                                    src="https://64.media.tumblr.com/a465a8b97e43cd473688643cdd84de8b/03a651d7d52798ff-b4/s100x200/4dbb0ca1391d65f20327ddcf31ca1f1011139608.gif"
                                    alt=''/></a>
                                <a href="https://notmerlin.com/other/horrorgifs/index.html" target="_blank"
                                   rel="noreferrer"><img src="https://notmerlin.com/other/horrorgifs/hgs1.gif" alt=''/></a>
                                <a href="https://gifypet.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://gifypet.neocities.org/images/badge.gif" alt=''/></a>
                                <a href="https://murderscene.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://i.imgur.com/XqHNuji.png" alt=''/></a>
                                <a href="https://shishka.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://shishka.neocities.org/shishka/img/shishka-decarabia.gif" alt=''/></a>
                                <a href="https://artwork.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://artwork.neocities.org/000/artworkbuttontotoro.gif" alt=''/></a>
                                <a href="http://www.mazeguy.net" target="_blank" rel="noreferrer"><img
                                    src="http://www.mazeguy.net/links/mazeguy88x31.gif" alt=''/></a>

                                <a href='http://www.glitter-graphics.com' title='Myspace Graphics' target="_blank"
                                   rel="noreferrer">
                                    <img src='http://dl2.glitter-graphics.net/pub/170/170412vrl6tuq51f.gif'
                                         alt='myspace layouts, myspace codes, glitter graphics'
                                         style={{width: '176px', height: 'auto', padding: '10px 0'}}/></a>

                            </div>
                            <p>And just sites I like :)</p>
                            <div className="buttons">
                                <a href="https://exephile.neocities.org" target="_blank" rel="noreferrer"><img
                                    src="https://exephile.neocities.org/exe.gif" alt=''/></a>
                                <a href="https://planetsarah.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://planetsarah.neocities.org/psbutton8.gif" alt=''/></a>
                                <a href="https://fauux.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://hotlinecafe.com/buttons/wiredsound_linkbar.gif"
                                    alt=''/></a>{/*https://fauux.neocities.org/fauux-btn-01.gif*/}
                                <a href="https://cloverbell.neocities.org" target="_blank" rel="noreferrer"><img
                                    src="https://cloverbell.neocities.org/n_n/cloverbell.gif" alt=''/></a>
                                <a href="https://dimden.dev/" target="_blank" rel="noreferrer"><img
                                    src="https://dimden.dev/services/images/88x31.gif" alt=''/></a>
                                <a href="https://xhyperhysteriax.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://i.imgur.com/HOj8450.png" alt=''/></a>
                                <a href="https://dannarchy.com/" target="_blank" rel="noreferrer"><img
                                    src="https://dannarchy.com/images/d_now.gif" alt=''/></a>
                                <a href="https://pocl.vip/" target="_blank" rel="noreferrer"><img
                                    src="https://pocl.vip/img/buttons/poclbutton.gif" alt=''/></a>
                                <a href="https://hotlinecafe.com/" target="_blank" rel="noreferrer"><img
                                    src="https://hotlinecafe.com/buttons/hotlinecafebutton3.gif" alt=''/></a>
                                <a href="https://kakashi.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://hotlinecafe.com/buttons/kakashi.gif" alt=''/></a>
                                <a href="https://odditycommoddity.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://odditycommoddity.neocities.org/Images/Buttons/sites/mebuttonaiden.gif"
                                    alt=''/></a>
                                <a href="https://milfgod.net/" target="_blank" rel="noreferrer"><img
                                    src="https://milfgod.net/MILF%20God%20Badge%20animated).gif" alt=''/></a>
                                <a href="https://lazybones.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://lazybones.neocities.org/EXTRAS/buttons/lazybgif.gif" alt=''/></a>
                                <a href="https://humanfly.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://humanfly.neocities.org/Images/button.gif" alt=''/></a>
                                <a href="https://melonking.net" target="_blank" rel="noreferrer"><img
                                    alt="Visit Melonking.Net!"
                                    src="https://melonking.net/images/badges/MELON-BADGE-2.GIF"
                                    style={{imageRendering: 'pixelated'}}/></a>
                                <a href="https://daximus.site" target="_blank" rel="noreferrer"><img
                                    src="https://daximus.neocities.org/images/dax_alien.gif" alt="Daximus"/></a>
                                <a href="https://mesoscale.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://mesoscale.neocities.org/images/badges/meso_badge.gif" alt=""/></a>
                                <a href="https://spiritcellar.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://spiritcellar.neocities.org/images/badges/spiritcellar_badge.gif"
                                    alt=""/></a>
                                <a href="https://zanarkand.neocities.org/" target="_blank" rel="noreferrer"><img
                                    src="https://zanarkand.neocities.org/mybuttons/BANNER9.gif" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div className="box-bottom">
                        <div className="s01"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
