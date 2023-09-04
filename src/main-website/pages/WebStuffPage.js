import React from "react";
import ScrollListener from "../../common/components/ScrollListener";
import Background from '../../common/images/backgrounds/main-background.png';
import Background1 from '../resources/Frog_Croaking.gif';
import Background2 from '../resources/ppl-roses.png';
export function WebStuffPage() {
    document.documentElement.style.removeProperty('--box-header-color');
    document.documentElement.style.removeProperty('--main-background');
    document.documentElement.style.removeProperty('--box-background');

    return (
        <div className='main' style={{maxWidth: '680px'}}>
            <div className='box'>
                <div style={{display: 'flex'}}>
                    <iframe style={{width:'314px', height:'321px', order: 1}} scrolling="no"
                            src="https://gifypet.neocities.org/pet/pet.html?name=Radost'&dob=1693851633&gender=f&element=Air&pet=https%3A%2F%2Fartwork.neocities.org%2Fpixels%2Fkaoanis%2Fwillothewisp01.gif&map=night.gif&background=https%3A%2F%2Fsadhost.neocities.org%2Fimages%2Ftiles%2Fbrilloazul1.gif&tablecolor=white&textcolor=white"
                            frameBorder="0"></iframe>

                    <div className="box08" style={{order: 2}}>
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner">
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <figure>
                                        <img src={require('../../common/my-button/floralunit-button.gif')}
                                             style={{width: '88px', height: '31px'}}/>
                                        <textarea
                                            className="copy-button">&lt;a href="https://sadgrl.online/" target="_blank"&gt;&lt;img src="https://sadgrl.online/assets/images/buttons/sadgrlonline.gif"&gt;&lt;/a&gt;</textarea>
                                        <figcaption
                                            style={{fontSize: "xx-small", margin: '0', padding: '0', textAlign: 'center'}}>my button
                                        </figcaption>
                                    </figure>
                                </div>
                                <p>Backgronds, icons etc</p>
                                <div className="buttons">
                                    <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src="https://foollovers.com/link/image/foollovers8814.gif" alt=''/></a>
                                    <a href="https://sadgrl.online/" target="_blank" rel="noreferrer"><img src="https://sadgrl.online/assets/images/buttons/sadgrlonline.gif" alt=''/></a>
                                    {/*<a href="https://www.glitter-graphics.com" target="_blank" rel="noreferrer"><img src="http://dl.glitter-graphics.net/pub/1419/1419911qlmmscl8og.gif" alt=''/></a>*/}
                                    {/*<a href="https://www.glitter-graphics.com" target="_blank" rel="noreferrer"><img src="http://dl8.glitter-graphics.net/pub/1189/1189478a3o8qj9rxk.gif" alt=''/></a>*/}
                                    <a href="https://cinni.net/" target="_blank" rel="noreferrer"><img src="https://cinni.net/images/button/cinni_angelbutton3.gif" alt=''/></a>
                                    <a href="https://blinkies.cafe/" target="_blank" rel="noreferrer"><img src="https://64.media.tumblr.com/a465a8b97e43cd473688643cdd84de8b/03a651d7d52798ff-b4/s100x200/4dbb0ca1391d65f20327ddcf31ca1f1011139608.gif" alt=''/></a>
                                    <a href="https://notmerlin.com/other/horrorgifs/index.html" target="_blank" rel="noreferrer"><img src="https://notmerlin.com/other/horrorgifs/hgs1.gif" alt=''/></a>
                                    <a href="https://gifypet.neocities.org/" target="_blank" rel="noreferrer"><img src="https://gifypet.neocities.org/images/badge.gif" alt=''/></a>
                                    <a href="https://murderscene.neocities.org/" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/XqHNuji.png" alt=''/></a>
                                    <a href="https://shishka.neocities.org/" target="_blank"  rel="noreferrer"><img src="https://shishka.neocities.org/shishka/img/shishka-decarabia.gif" alt=''/></a>
                                    <a href="https://artwork.neocities.org/" target="_blank" rel="noreferrer"><img src="https://artwork.neocities.org/000/artworkbuttontotoro.gif" alt=''/></a>
                                    <a href="http://www.mazeguy.net" target="_blank" rel="noreferrer"><img src="http://www.mazeguy.net/links/mazeguy88x31.gif" alt=''/></a>

                                    <a href='http://www.glitter-graphics.com' title='Myspace Graphics'><img
                                        target="_blank" rel="noreferrer"
                                        src='http://dl2.glitter-graphics.net/pub/170/170412vrl6tuq51f.gif'
                                        alt='myspace layouts, myspace codes, glitter graphics' style={{width: '176px', height: 'auto', padding: '10px 0'}}/></a>

                                </div>
                                <p>And just sites I like :)</p>
                                <div className="buttons">
                                    <a href="https://neocities.org/" target="_blank" rel="noreferrer"><img src="https://anlucas.neocities.org/neocities_button.gif" alt='This website is hosted by NeoCities'/></a>
                                    <a href="https://exephile.neocities.org" target="_blank" rel="noreferrer"><img src="https://exephile.neocities.org/exe.gif" alt=''/></a>
                                    <a href="https://planetsarah.neocities.org/" target="_blank" rel="noreferrer"><img src="https://planetsarah.neocities.org/psbutton8.gif" alt=''/></a>
                                    <a href="https://fauux.neocities.org/" target="_blank" rel="noreferrer"><img src="https://hotlinecafe.com/buttons/wiredsound_linkbar.gif" alt=''/></a>{/*https://fauux.neocities.org/fauux-btn-01.gif*/}
                                    <a href="https://cloverbell.neocities.org" target="_blank" rel="noreferrer"><img src="https://cloverbell.neocities.org/n_n/cloverbell.gif" alt=''/></a>
                                    <a href="https://dimden.dev/" target="_blank" rel="noreferrer"><img src="https://dimden.dev/services/images/88x31.gif" alt=''/></a>
                                    <a href="https://xhyperhysteriax.neocities.org/" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/HOj8450.png" alt=''/></a>
                                    <a href="https://dannarchy.com/" target="_blank" rel="noreferrer"><img src="https://dannarchy.com/images/d_now.gif" alt=''/></a>
                                    <img src="https://dimden.dev/images/buttons/win95.gif" alt=''/>
                                    <a href="https://pocl.vip/" target="_blank" rel="noreferrer"><img src="https://pocl.vip/img/buttons/poclbutton.gif" alt=''/></a>
                                    <a href="https://hotlinecafe.com/" target="_blank" rel="noreferrer"><img src="https://hotlinecafe.com/buttons/hotlinecafebutton3.gif" alt=''/></a>
                                    <a href="https://kakashi.neocities.org/" target="_blank" rel="noreferrer"><img src="https://hotlinecafe.com/buttons/kakashi.gif" alt=''/></a>
                                </div>
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
