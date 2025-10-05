import {Route, Routes} from "react-router-dom";
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
import { Orchid } from "./emo-bands/orchid/Orchid";
import { Oakwood } from "./emo-bands/oakwood/Oakwood";
import { NeilPerry } from "./emo-bands/neil-perry/NeilPerry";
import { MerchantShips } from "./emo-bands/merchant-ships/MerchantShips";
import { EtoEmo } from "./emo-bands/eto/EtoEmo";
import { Cerulean } from "./emo-bands/cerulean/Cerulean";
import { IHaveDreams } from "./emo-bands/i-have-dreams/IHaveDreams";
import { BirdBone } from "./emo-bands/bird-bone/BirdBone";
import { YouAndI } from "./emo-bands/you-and-i/YouAndI";
import { SeptemberIsTheOnlyTime } from "./emo-bands/septemberistheonlytimeidontthinkofyou/SeptemberIsTheOnlyTime";
import { Imyaneproiznosimo } from "./emo-bands/imyaneproiznosimo/Imyaneproiznosimo";
import { Seahorsechoke } from "./emo-bands/seahorsechoke/Seahorsechoke";

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
                <Route path='orchid' element={<Orchid/>}/>
                <Route path='eto' element={<EtoEmo/>}/>
                <Route path='oakwood' element={<Oakwood/>}/>
                <Route path='cerulean' element={<Cerulean/>}/>
                <Route path='neil-perry' element={<NeilPerry/>}/>
                <Route path='merchant-ships' element={<MerchantShips/>}/>
                <Route path='bird-bone' element={<BirdBone/>}/>
                <Route path='i-have-dreams' element={<IHaveDreams/>}/>
                <Route path='you-and-i' element={<YouAndI/>}/>
                <Route path='septemberistheonlytimeidontthinkofyou' element={<SeptemberIsTheOnlyTime/>}/>
                <Route path='seahorsechoke' element={<Seahorsechoke/>}/>
                <Route path='imyaneproiznosimo' element={<Imyaneproiznosimo/>}/>
            </Routes>
        </div>
    );
}
