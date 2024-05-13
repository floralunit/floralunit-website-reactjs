import React, {useEffect, useState} from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {WitchHousePage} from "./witch-main-page/WitchHousePage";
import {RadostMojaPage} from "./witch-pages/radost-moja/RadostMojaPage";
import {TubfuckPage} from "./witch-pages/tubfuck/TubFuckPage.js";
import {SuicidewavePage} from "./witch-pages/suicidewave/SuicidewavePage.js";
import "../common/styles/crt-lines.css"


export function WitchRoutes() {

    return (
        <div>
            <Routes>
                <Route path='' element={<WitchHousePage/>}/>
                <Route path='radost-moja' element={<RadostMojaPage/>}/>
                <Route path='suicidewave' element={<SuicidewavePage/>}/>
                <Route path='tvbfvck' element={<TubfuckPage/>}/>
            </Routes>
        </div>
    );
}
