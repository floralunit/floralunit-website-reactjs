import React from "react";
import { ABSTRACT8_BACKGROUND, SHINE_BACKGROUND, ABSTRACT7_BACKGROUND, MEME_CURSOR } from "../../../global-const";
import { Link } from "react-router-dom";

export function WebStuffPage() {
    /*    document.documentElement.style.removeProperty('--box-header-color');
        document.documentElement.style.removeProperty('--main-background');
        document.documentElement.style.removeProperty('--box-background');*/

    document.documentElement.style.setProperty('--box-header-color', `url(${ABSTRACT7_BACKGROUND})`);
    document.documentElement.style.setProperty('--main-background', `url(${SHINE_BACKGROUND})`);
    document.documentElement.style.setProperty('--main-cursor', `url(${MEME_CURSOR})`);
    document.documentElement.style.removeProperty('--pointer-cursor');
    // document.documentElement.style.setProperty('--main-background',  `url(https://dl.glitter-graphics.com/pub/3650/3650018mbys5bgddk.gif)`);
    document.documentElement.style.setProperty('--box-background', `url(${ABSTRACT8_BACKGROUND})`);
    document.documentElement.style.setProperty('--box-text-color', '#fff2b2');
    return (
        <div className='main' style={{ maxWidth: '610px' }}>
            <marquee className="buttons">
                <a href="https://neocities.org/" target="_blank" rel="noreferrer"><img
                    src="https://milfgod.net/neocities.gif" alt='' /></a>
                <a href="https://neocities.org/" target="_blank" rel="noreferrer"><img
                    src="https://anlucas.neocities.org/neocities_button.gif"
                    alt='This website is hosted by NeoCities' /></a>
                <a href="https://www.aseprite.org/" target="_blank" rel="noreferrer"><img
                    src="https://spiritcellar.neocities.org/images/badges/aseprite.png" alt="" /></a>
                <img src="https://dimden.dev/images/buttons/win95.gif" alt='' />
                <img src="https://zanarkand.neocities.org/foryou/fubutton27.gif" alt='' />
                <img src="https://zanarkand.neocities.org/foryou/fubutton39.gif" alt='' />
            </marquee>
            <div
                style={{ fontSize: "xx-small", margin: '0', padding: '0', textAlign: 'center' }}>
                <img src="https://text.glitter-graphics.net/heart/m.gif" border={0}
                    style={{ width: '20px' }} />
                <img src="https://text.glitter-graphics.net/heart/y.gif" border={0}
                    style={{ width: '20px' }} />
                <img src="https://dl3.glitter-graphics.net/empty.gif" width={20} border={0}
                    style={{ width: '20px' }} />
                <img src="https://text.glitter-graphics.net/heart/b.gif" border={0}
                    style={{ width: '20px' }} />
                <img src="https://text.glitter-graphics.net/heart/u.gif" border={0}
                    style={{ width: '20px' }} />
                <img src="https://text.glitter-graphics.net/heart/t.gif" border={0}
                    style={{ width: '20px' }} />
                <img src="https://text.glitter-graphics.net/heart/t.gif" border={0}
                    style={{ width: '20px' }} />
                <img src="https://text.glitter-graphics.net/heart/o.gif" border={0}
                    style={{ width: '20px' }} />
                <img src="https://text.glitter-graphics.net/heart/n.gif" border={0}
                    style={{ width: '20px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <figure>
                    <img src="https://floralunit.neocities.org/my-button/floralunit-button.gif"
                        style={{ width: '88px', height: '31px' }} />
                    <textarea
                        className="copy-button">&lt;a href="https://floralunit.neocities.org/" target="_blank"&gt;&lt;img src="https://floralunit.neocities.org/my-button/floralunit-button.gif"&gt;&lt;/a&gt;</textarea>
                </figure>
            </div>
            <div className="box">
                <div className="inner">
                    <div>
                        The Internet currently feels <a href="https://www.imood.com/imood"><img
                            src="https://moods.imood.com/internet/current.gif"
                            alt="The current mood of the Internet at www.imood.com" border="0" style={{ width: '48px', height: '15px' }} /></a>
                    </div>
                    <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.2em', padding: '1em' }}>Useful links</div>
                    <ul>
                        <li><a href="https://gifcities.org/" target="_blank" rel="noreferrer">gifcities.org</a> - GIF search engine</li>
                        <li><a href="https://transform.tools/html-to-jsx" target="_blank" rel="noreferrer">html-to-jsx</a> - convert html to jsx (useful for React)</li>
                        <li><a href="https://ps1.tumblr.com/smolpxl" target="_blank" rel="noreferrer">ps1.tumblr.com/smolpxl</a>- pixels collection</li>
                        <li><a href="https://www.gjtorikian.com/Earthbound-Battle-Backgrounds-JS/" target="_blank" rel="noreferrer">Earthbound-Battle-Backgrounds-JS</a> - Earthbound background generator</li>
                        <li><a href="http://www.freebackgrounds.com/" target="_blank" rel="noreferrer">freebackgrounds.com</a> - old backgrounds</li>
                        <li><a href="https://gifer.com/" target="_blank" rel="noreferrer">gifer.com</a> - big gifs collection</li>
                        <li><a href="https://codesharing.neocities.org/" target="_blank" rel="noreferrer">codesharing.neocities.org</a> - some useful layouts</li>
                        <li><a href="https://www.cursors-4u.com/" target="_blank" rel="noreferrer">cursors-4u.com</a> - cool cursors collection</li>
                        <li><a href="http://www.rw-designer.com/cursor-library/set-0/" target="_blank" rel="noreferrer">rw-designer.com</a> - another cursors collection</li>
                        <li><Link to="/bgs-icons">backgrounds, icons, pixels I found + my website color constructor <img src={require("../../resources/pixels/tEJ5Dt8.gif")} style={{ width: '15px', margin: '2px 0 0 2px' }} /></Link></li>
                    </ul>
                    <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.0em', padding: '1em' }}>Sites with cool backgrounds, icons, etc archives</div>
                    <div className="buttons">
                        <a href="https://sadgrl.online/" target="_blank" rel="noreferrer"><img
                            src="https://sadgrl.online/assets/images/buttons/sadgrlonline.gif" alt='' /></a>
                        <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img
                            src="https://foollovers.com/link/image/foollovers8826.gif" alt='' /></a>
                        <a href="https://cinni.net/" target="_blank" rel="noreferrer"><img
                            src="https://cinni.net/images/button/cinni_angelbutton3.gif" alt='' /></a>
                        <a href="https://blinkies.cafe/" target="_blank" rel="noreferrer"><img
                            src="https://64.media.tumblr.com/a465a8b97e43cd473688643cdd84de8b/03a651d7d52798ff-b4/s100x200/4dbb0ca1391d65f20327ddcf31ca1f1011139608.gif"
                            alt='' /></a>
                        <a href="https://notmerlin.com/other/horrorgifs/index.html" target="_blank"
                            rel="noreferrer"><img src="https://notmerlin.com/other/horrorgifs/hgs1.gif" alt='' /></a>
                        <a href="https://gifypet.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://gifypet.neocities.org/images/badge.gif" alt='' /></a>
                        <a href="https://murderscene.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://files.catbox.moe/9kd628.gif" alt='' /></a>
                        <a href="https://shishka.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://shishka.neocities.org/shishka/img/shishka-decarabia.gif" alt='' /></a>
                        <a href="https://artwork.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://artwork.neocities.org/000/artworkbuttontotoro.gif" alt='' /></a>
                        <a href="http://www.mazeguy.net" target="_blank" rel="noreferrer"><img
                            src="http://www.mazeguy.net/links/mazeguy88x31.gif" alt='' /></a>
                        <a href="https://www.thefrugalgamer.net/" target="_blank" rel="noreferrer"><img
                            src="https://www.thefrugalgamer.net/img/links/frugalgamer_button2.png" alt='' /></a>

                        <a href='http://www.glitter-graphics.com' title='Myspace Graphics' target="_blank"
                            rel="noreferrer">
                            <img src='http://dl2.glitter-graphics.net/pub/170/170412vrl6tuq51f.gif'
                                alt='myspace layouts, myspace codes, glitter graphics'
                                style={{ width: '176px', height: 'auto', padding: '10px 0' }} /></a>

                    </div>
                </div>
            </div>
            <div className="box">
                <div className="inner">
                    <div style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.1em', padding: '1em' }}>Internet neighbors and just sites I like :)</div>
                    <div className="buttons">
                        <a href="https://exephile.neocities.org" target="_blank" rel="noreferrer"><img
                            src="https://exephile.neocities.org/exe.gif" alt='' /></a>
                        <a href="https://planetsarah.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://planetsarah.neocities.org/psbutton8.gif" alt='' /></a>
                        <a href="https://fauux.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://hotlinecafe.com/buttons/wiredsound_linkbar.gif"
                            alt='' /></a>{/*https://fauux.neocities.org/fauux-btn-01.gif*/}
                        <a href="https://cloverbell.neocities.org" target="_blank" rel="noreferrer"><img
                            src="https://cloverbell.neocities.org/n_n/cloverbell.gif" alt='' /></a>
                        <a href="https://dimden.dev/" target="_blank" rel="noreferrer"><img
                            src="https://dimden.dev/services/images/88x31.gif" alt='' /></a>
                        <a href="https://xhyperhysteriax.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://i.imgur.com/HOj8450.png" alt='' /></a>
                        <a href="https://dannarchy.com/" target="_blank" rel="noreferrer"><img
                            src="https://dannarchy.com/images/d_now.gif" alt='' /></a>
                        <a href="https://pocl.vip/" target="_blank" rel="noreferrer"><img
                            src="https://pocl.vip/img/buttons/poclbutton.gif" alt='' /></a>
                        <a href="https://hotlinecafe.com/" target="_blank" rel="noreferrer"><img
                            src="https://hotlinecafe.com/buttons/hotlinecafebutton3.gif" alt='' /></a>
                        <a href="https://kakashi.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://hotlinecafe.com/buttons/kakashi.gif" alt='' /></a>
                        <a href="https://odditycommoddity.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://odditycommoddity.neocities.org/Images/Buttons/sites/mebuttonaiden.gif"
                            alt='' /></a>
                        <a href="https://milfgod.net/" target="_blank" rel="noreferrer"><img
                            src="https://milfgod.net/MILF%20God%20Badge%20animated).gif" alt='' /></a>
                        <a href="https://lazybones.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://lazybones.neocities.org/EXTRAS/buttons/lazybgif.gif" alt='' /></a>
                        <a href="https://humanfly.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://humanfly.neocities.org/Images/button.gif" alt='' /></a>
                        <a href="https://melonking.net" target="_blank" rel="noreferrer"><img
                            alt="Visit Melonking.Net!"
                            src="https://melonking.net/images/badges/MELON-BADGE-2.GIF"
                            style={{ imageRendering: 'pixelated' }} /></a>
                        <a href="https://daximus.site" target="_blank" rel="noreferrer"><img
                            src="https://daximus.neocities.org/images/dax_alien.gif" alt="Daximus" /></a>
                        <a href="https://mesoscale.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://mesoscale.neocities.org/images/home/meso_badge.gif" alt="" /></a>
                        <a href="https://spiritcellar.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://spiritcellar.neocities.org/images/badges/spiritcellar_badge.gif"
                            alt="" /></a>
                        <a href="https://zanarkand.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://zanarkand.neocities.org/mybuttons/BANNER9.gif" alt="" /></a>
                        <a href="https://solaria.neocities.org/" target="_blank" rel="noreferrer"><img
                            src="https://solaria.neocities.org/buttons/sites/solaria.png" alt="" /></a>
                        <a href="https://www.lejlart.com/apple.html" target="_blank" rel="noreferrer"><img
                            src="https://www.lejlart.com/flist/ad_skullsprinkles.gif"
                            alt="" /></a>
                        <a href="https://www.censorine.com/" target="_blank" rel="noreferrer"><img
                            src="https://censorine.com/images/censoria.png"
                            alt="" /></a>
                        <a href="https://pumpkin-ninja.neocities.org" target="_blank" rel="noreferrer"><img src="https://pumpkin-ninja.neocities.org/images/88X31.gif" alt="" /></a>
                        <a href="https://kidwiththechemicalz.neocities.org/" target="_blank" rel="noreferrer"><img src="https://kidwiththechemicalz.neocities.org/88x31.gif" alt="" /> </a>

                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <iframe style={{ width: '314px', height: '321px' }} scrolling="no"
                    src="https://gifypet.neocities.org/pet/pet.html?name=Radost'&dob=1693851633&gender=f&element=Air&pet=https%3A%2F%2Fartwork.neocities.org%2Fpixels%2Fkaoanis%2Fwillothewisp01.gif&map=night.gif&background=https%3A%2F%2Fsadhost.neocities.org%2Fimages%2Ftiles%2Fbrilloazul1.gif&tablecolor=white&textcolor=white"
                    frameBorder="0"></iframe>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../resources/pixels/kirby-dancing.gif')}
                    style={{ width: '176px', padding: '10px 0' }} />
            </div>
        </div>
    );
}
