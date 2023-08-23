import React, {useEffect, useState} from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {WitchHousePage} from "./witch-main-page/WitchHousePage";
import {RadostMojaPage} from "./witch-pages/radost-moja/RadostMojaPage";


export function WitchRoutes() {

    return (
        <div className="">
            <Routes>
                <Route path='' element={<WitchHousePage/>}/>
                <Route path='radost-moja' element={<RadostMojaPage/>}/>
                <Route path='suicidewave' element={<RadostMojaPage/>}/>
            </Routes>
        </div>
    );
}
