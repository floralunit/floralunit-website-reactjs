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
import { StrictlyBallroom } from "./emo-bands/strictly-ballroom/StrictlyBallroom";
import { Kashtanka } from "./emo-bands/kashtanka/Kashtanka";
import { Reasons } from "./emo-bands/reasons/Reasons";
import { Asthenia } from "./emo-bands/asthenia/Asthenia";
import { AmericanFootball } from "./emo-bands/americ-anfootball/AmericanFootball";
import { EORA } from "./emo-bands/eora/EORA";
import { BotanicheskySad } from "./emo-bands/botanichesky-sad/BotanicheskySad";
import { SleepingForSunrise } from "./emo-bands/sleeping-for-sunrise/SleepingForSunrise";
import { CampingAlaska } from "./emo-bands/camping-in-alaska/CampingAlaska";
import { RabbitTheory } from "./emo-bands/rabbit-theory/RabbitTheory";

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
                <Route path='kashtanka' element={<Kashtanka/>}/>
                <Route path='strictly-ballroom' element={<StrictlyBallroom/>}/>
                <Route path='reasons' element={<Reasons/>}/>
                <Route path='asthenia' element={<Asthenia/>}/>
                <Route path='american-football' element={<AmericanFootball/>}/>
                <Route path='eora' element={<EORA/>}/>
                <Route path='botanichesky-sad' element={<BotanicheskySad/>}/>
                <Route path='sleeping-for-sunrise' element={<SleepingForSunrise/>}/>
                <Route path='camping-in-alaska' element={<CampingAlaska/>}/>
                <Route path='the-rabbit-theory' element={<RabbitTheory/>}/>
            </Routes>
        </div>
    );
}
