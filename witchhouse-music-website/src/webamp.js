import Webamp from "webamp"; // eslint-disable-line import/no-unresolved
// This import gives us a URL to llama.mp3
import llama from "./bob-tilton-gears-turn-it-just-repeats.mp3";
import salem from "./Salem_Salem_-_Sick_50538485.mp3";
import internetArchiveSkin from "./Yunaofffx.wsz";
import topazSkin from "./Yunaofffx.wsz";

if (!Webamp.browserIsSupported()) {
    alert("Oh no! Webamp does not work in this browser!");
    throw new Error("What's the point of anything?");
}

const webamp = new Webamp({
    initialTracks: [
        {
            metaData: {
                artist: "salem",
                title: "sick"
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            // file, or served with permissive CORS HTTP headers:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            url: salem,
            duration: 5.322286
        },
        {
            metaData: {
                artist: "Some Artist",
                title: "Title of Second Track"
            },
            url: llama,
            duration: 5.322286
        }
    ],
    availableSkins: [
        { url: internetArchiveSkin, name: "Internet Archvie" },
        { url: topazSkin, name: "Topaz" }
    ]
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

// Here we go! Let's show Webamp.
webamp.renderWhenReady(document.getElementById("app"));
