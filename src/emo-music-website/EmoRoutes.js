import React, {useEffect, useState} from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {BobTilton} from "./emo-bands/bob-tilton/BobTilton";
import {EmoPage} from "./emo-main-page/EmoPage";

export function EmoRoutes() {

    return (
        <div className="">
            <Routes>
                <Route path='' element={<EmoPage/>}/>
                <Route path='bob-tilton' element={<BobTilton/>}/>
            </Routes>
        </div>
    );
}
