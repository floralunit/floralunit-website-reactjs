import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ScrollToTop from "./common/components/ScrollToTop";
import {MainRoutes} from "./main-website/MainRoutes";
import {WitchRoutes} from "./witchhouse-music-website/WitchRoutes";
import {EmoRoutes} from "./emo-music-website/EmoRoutes";

function App() {
    return (
        <BrowserRouter>
        <ScrollToTop/>
            <Routes>
                <Route path='/*' element={<MainRoutes/>}/>
                <Route path='witch-house/*' element={<WitchRoutes/>}/>
                <Route path='emo/*' element={<EmoRoutes/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;