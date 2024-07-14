import React, {useEffect, useState} from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {BobTilton} from "./emo-bands/bob-tilton/BobTilton";
import {EmoPage} from "./emo-main-page/EmoPage";
import { DnejFevralya } from "./emo-bands/30-dnej-fevralya/DnejFevralya";
import { SixMilSebya } from "./emo-bands/6000000000sebya/SixMilSebya";
import { EveryoneAskedAboutYou } from "./emo-bands/everyone-asked-about-you/EveryoneAskedAboutYou";
import { IHateMyself } from "./emo-bands/i-hate-myself/IHateMyself";
import { Daitro } from "./emo-bands/daitro/Daitro";
import { LoveLostBut } from "./emo-bands/love-lost-but-not-forgotten/LoveLostBut";
import { OldGray } from "./emo-bands/old-gray/OldGray";

export function EmoRoutes() {

    return (
        <div>
            <Routes>
                <Route path='' element={<EmoPage/>}/>
                <Route path='bob-tilton' element={<BobTilton/>}/>
                <Route path='30-dnej-fevralya' element={<DnejFevralya/>}/>
                <Route path='6000000000sebya' element={<SixMilSebya/>}/>
                <Route path='everyone-asked-about-you' element={<EveryoneAskedAboutYou/>}/>
                <Route path='i-hate-myself' element={<IHateMyself/>}/>
                <Route path='old-gray' element={<OldGray/>}/>
                <Route path='love-lost-but-not-forgotten' element={<LoveLostBut/>}/>
                <Route path='daitro' element={<Daitro/>}/>
            </Routes>
        </div>
    );
}
