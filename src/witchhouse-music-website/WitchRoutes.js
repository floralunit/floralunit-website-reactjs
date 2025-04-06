import React from "react";
import {Route, Routes} from "react-router-dom";
import {WitchHousePage} from "./witch-main-page/WitchHousePage";
import "../common/styles/crt-lines.css"

import {RadostMojaPage} from "./witch-pages/radost-moja/RadostMojaPage";
import {TubfuckPage} from "./witch-pages/tubfuck/TubFuckPage.js";
import {SuicidewavePage} from "./witch-pages/suicidewave/SuicidewavePage.js";
import {TenebraePage} from "./witch-pages/tenebrae/TenebraePage.js";
import {EtalybovbPage} from "./witch-pages/etalybovb/EtalybovbPage.js";
import {CainPage} from "./witch-pages/cain/CainPage.js";
import { ScoPage } from "./witch-pages/sco/ScoPage.js";
import { Depressed040Page } from "./witch-pages/depressed040/Depressed040Page.js";
import { PlachzemlyaPage } from "./witch-pages/plachzemlya/PlachzemlyaPage.js";
import { AxiusLinkPage } from "./witch-pages/axiuslink/AxiusLinkPage.js";
import { Vsn7Page } from "./witch-pages/vsn7/Vsn7Page.js";
import { FraunhoferPage } from "./witch-pages/fraunhofer/FraunhoferPage.js";
import { MuglPage } from "./witch-pages/mugl/MuglPage.js";
import { SummerOfHazePage } from "./witch-pages/summerofhaze/SummerOfHazePage.js";
import { VV17CHOU7Page } from "./witch-pages/community-pages/VV17CHOU7Page.js";
import { VedminDomPage } from "./witch-pages/community-pages/VedminDomPage.js";
import { GatePage } from "./witch-pages/community-pages/GatePage.js";
import { NedostupnostPage } from "./witch-pages/community-pages/NedostupnostPage.js";
import { CrimewavePage } from "./witch-pages/community-pages/CrimewavePage.js";
import { MarazmPage } from "./witch-pages/marazm/MarazmPage.js";
import { BlamevenusPage } from "./witch-pages/blame-venus/BlamevenusPage.js";


export function WitchRoutes() {

    return (
        <div className="witch-page">
            <Routes>
                <Route path='' element={<WitchHousePage/>}/>
                <Route path='radost-moja' element={<RadostMojaPage/>}/>
                <Route path='suicidewave' element={<SuicidewavePage/>}/>
                <Route path='tvbfvck' element={<TubfuckPage/>}/>
                <Route path='tenebrae' element={<TenebraePage/>}/>
                <Route path='etalybovb' element={<EtalybovbPage/>}/>
                <Route path='cain' element={<CainPage/>}/>
                <Route path='scowitchboy' element={<ScoPage/>}/>
                <Route path='depressed040' element={<Depressed040Page/>}/>
                <Route path='plachzemlya' element={<PlachzemlyaPage/>}/>
                <Route path='axiuslink' element={<AxiusLinkPage/>}/>
                <Route path='vsn7' element={<Vsn7Page/>}/>
                <Route path='fraunhofer-diffraction' element={<FraunhoferPage/>}/>
                <Route path='mugl' element={<MuglPage/>}/>
                <Route path='summer-of-haze' element={<SummerOfHazePage/>}/>
                <Route path='vv17chou7' element={<VV17CHOU7Page/>}/>
                <Route path='vedmin-dom' element={<VedminDomPage/>}/>
                <Route path='gate' element={<GatePage/>}/>
                <Route path='nedostupnost' element={<NedostupnostPage/>}/>
                <Route path='crimewave' element={<CrimewavePage/>}/>
                <Route path='m4r4zm' element={<MarazmPage/>}/>
                <Route path='blame-venus' element={<BlamevenusPage/>}/>
            </Routes>
        </div>
    );
}
