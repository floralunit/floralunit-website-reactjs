import Webamp from "webamp"; // eslint-disable-line import/no-unresolved
// This import gives us a URL to llama.mp3
import salem from "./music/Salem - Sick.mp3";
import suicidewave from "./music/SUICIDEWΛVЕ - IN ʏour ΣYΣS.mp3";
import cain from "./music/† CΛIN † - I ƉΩNŦ NΣΣƉ ΨΩƱ.mp3";
import whatami from "./music/†▼BF▼CK - WH▲T ▲M I.mp3";
import young from "./music/BLVCK CEILING - Young.mp3";
import sadist from "./music/Crystal Castles - Sadist[re_uploadマンモス].mp3";
import affection from "./music/fraunhofer diffraction - affection.mp3";
import ether from "./music/Ic3peak - Ether.mp3";
import radost from "./music/Радость Моя - Суицид.mp3";
import crim3s from "./music/Crim3s - Still Goin.mp3";
import krishna from "./skins/hare_krishna.wsz";
import react from "react";
import "../../witch-main-page/WitchHousePage.css"

if (!Webamp.browserIsSupported()) {
    alert("Oh no! Webamp does not work in this browser!");
    throw new Error("What's the point of anything?");
}

const webamp = new Webamp({
    initialTracks: [
        {
            metaData: {
                artist: "†▼BF▼CK",
                title: "WH▲T ▲M I"
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            // file, or served with permissive CORS HTTP headers:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            url: whatami,
            /*duration: 5.322286*/
        },
        {
            metaData: {
                artist: "BLVCK CEILING",
                title: "Young"
            },
            url: young,
        },
        {
            metaData: {
                artist: "Salem",
                title: "Sick"
            },
            url: salem,
        },
        {
            metaData: {
                artist: "Радость Моя",
                title: "Суицид"
            },
            url: radost,
        },
        {
            metaData: {
                artist: "IC3PEAK",
                title: "Ether"
            },
            url: ether,
        },
        {
            metaData: {
                artist: "Crystal Castles",
                title: "Sadist"
            },
            url: sadist,
        },
        {
            metaData: {
                artist: "† CΛIN †",
                title: "I ƉΩNŦ NΣΣƉ ΨΩƱ"
            },
            url: cain,
        },
        {
            metaData: {
                artist: "fraunhofer diffraction",
                title: "affection"
            },
            url: affection,
        },
        {
            metaData: {
                artist: "SUICIDEWΛVЕ",
                title: "IN ʏour ΣYΣS"
            },
            url: suicidewave,
        },
        {
            metaData: {
                artist: "Crim3s",
                title: "Still Goin"
            },
            url: crim3s,
        },
    ],
    availableSkins: [
        /*{ url: internetArchiveSkin, name: "Internet Archvie" },*/
        { url: krishna, name: "krishna" },
    ],
    initialSkin: { url: krishna, name: "krishna" },
});

// An example of handling the close button and giving a way to reopen WEebamp
webamp.onClose(() => {
    const open = document.createElement("button");
    open.innerText = "Reopen";
    document.getElementById("controls").appendChild(open);
    function handleClick() {
        webamp.reopen();
        open.remove();
        open.removeEventListener("click", handleClick);
    }
    open.addEventListener("click", handleClick);
});

// Example of adding a confirmation button before Webamp can be closed.
webamp.onWillClose((cancel) => {
    if (!window.confirm("Are you sure you want to close Webamp?")) {
        cancel();
    }
});
export default class WebampMusic extends react.Component {

    webampRef = react.createRef();

    componentDidMount() {
        webamp.renderWhenReady(this.webampRef.current);
    }

    render() {
        return <div ref={this.webampRef} className='webamp-witch' style={{ top: 0, right: '10%', position: 'fixed' }} />;
    }
}