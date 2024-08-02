import React, {useEffect, useState} from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {WitchHousePage} from "./witch-main-page/WitchHousePage";
import "../common/styles/crt-lines.css"

import {RadostMojaPage} from "./witch-pages/radost-moja/RadostMojaPage";
import {TubfuckPage} from "./witch-pages/tubfuck/TubFuckPage.js";
import {SuicidewavePage} from "./witch-pages/suicidewave/SuicidewavePage.js";
import {TenebraePage} from "./witch-pages/tenebrae/TenebraePage.js";
import {EtalybovbPage} from "./witch-pages/etalybovb/EtalybovbPage.js";
import {CainPage} from "./witch-pages/cain/CainPage.js";
import { ScoPage } from "./witch-pages/sco/ScoPage.js";


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
            </Routes>
        </div>
    );
}
