import { Route, Routes } from "react-router-dom";
import { BobTilton } from "./emo-bands/bob-tilton/BobTilton";
import { EmoPage } from "./emo-main-page/EmoPage";
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
import { AlgernonCadwallader } from "./emo-bands/algernon-cadwallader/AlgernonCadwallader";
import { IHateSex } from "./emo-bands/i-hate-sex/IHateSex";
import { Kolya } from "./emo-bands/kolya/Kolya";
import { LaDispute } from "./emo-bands/la-dispute/LaDispute";
import { Mineral } from "./emo-bands/mineral/Mineral";
import { YaphetKotto } from "./emo-bands/yaphet-kotto/YaphetKotto";
import { Forfeit } from "./emo-bands/forfeit/Forfeit";
import { Saetia } from "./emo-bands/saetia/Saetia";
import { SostoyaniePtits } from "./emo-bands/sostoyanie-ptits/SostoyaniePtits";
import { SunnyDayRealEstate } from "./emo-bands/sunny-day-real-estate/SunnyDayRealEstate";
import { TheSpiritOfVersailles } from "./emo-bands/the-spirit-of-versailles/TheSpiritOfVersailles";
import { Thursday } from "./emo-bands/thursday/Thursday";
import { BrightLightsAlwaysTurnOff } from "./emo-bands/bright-lights-always-turn-off/BrightLightsAlwaysTurnOff";
import { BurialEtiquette } from "./emo-bands/burial-etiquette/BurialEtiquette";
import { Catalyst } from "./emo-bands/catalyst/Catalyst";
import { Foxtails } from "./emo-bands/foxtails/Foxtails";
import { OtrecheniePetra } from "./emo-bands/otrechenie-petra/OtrecheniePetra";
import { Lowercase } from "./emo-bands/lowercase/Lowercase";
import { Raein } from "./emo-bands/raein/Raein";

export function EmoRoutes() {

    return (
        <div>
            <Routes>
                <Route path='' element={<EmoPage />} />
                <Route path='bob-tilton' element={<BobTilton />} />
                <Route path='30-dnej-fevralya' element={<DnejFevralya />} />
                <Route path='6000000000sebya' element={<SixMilSebya />} />
                <Route path='everyone-asked-about-you' element={<EveryoneAskedAboutYou />} />
                <Route path='i-hate-myself' element={<IHateMyself />} />
                <Route path='old-gray' element={<OldGray />} />
                <Route path='love-lost-but-not-forgotten' element={<LoveLostBut />} />
                <Route path='daitro' element={<Daitro />} />
                <Route path='kashtanka' element={<Kashtanka />} />
                <Route path='strictly-ballroom' element={<StrictlyBallroom />} />
                <Route path='reasons' element={<Reasons />} />
                <Route path='asthenia' element={<Asthenia />} />
                <Route path='american-football' element={<AmericanFootball />} />
                <Route path='eora' element={<EORA />} />
                <Route path='botanichesky-sad' element={<BotanicheskySad />} />
                <Route path='sleeping-for-sunrise' element={<SleepingForSunrise />} />
                <Route path='camping-in-alaska' element={<CampingAlaska />} />
                <Route path='the-rabbit-theory' element={<RabbitTheory />} />
                <Route path='orchid' element={<Orchid />} />
                <Route path='eto' element={<EtoEmo />} />
                <Route path='oakwood' element={<Oakwood />} />
                <Route path='cerulean' element={<Cerulean />} />
                <Route path='neil-perry' element={<NeilPerry />} />
                <Route path='merchant-ships' element={<MerchantShips />} />
                <Route path='bird-bone' element={<BirdBone />} />
                <Route path='i-have-dreams' element={<IHaveDreams />} />
                <Route path='you-and-i' element={<YouAndI />} />
                <Route path='septemberistheonlytimeidontthinkofyou' element={<SeptemberIsTheOnlyTime />} />
                <Route path='seahorsechoke' element={<Seahorsechoke />} />
                <Route path='imyaneproiznosimo' element={<Imyaneproiznosimo />} />
                <Route path='algernon-cadwallader' element={<AlgernonCadwallader />} />
                <Route path='i-hate-sex' element={<IHateSex />} />
                <Route path='kolya' element={<Kolya />} />
                <Route path='la-dispute' element={<LaDispute />} />
                <Route path='mineral' element={<Mineral />} />
                <Route path='yaphet-kotto' element={<YaphetKotto />} />
                <Route path='forfeit' element={<Forfeit />} />
                <Route path='saetia' element={<Saetia />} />
                <Route path='sostoyanie-ptic' element={<SostoyaniePtits />} />
                <Route path='sunny-day-real-estate' element={<SunnyDayRealEstate />} />
                <Route path='the-spirit-of-versailles' element={<TheSpiritOfVersailles />} />
                <Route path='thursday' element={<Thursday />} />
                <Route path='bright-lights-always-turn-off' element={<BrightLightsAlwaysTurnOff />} />
                <Route path='burial-etiquette' element={<BurialEtiquette />} />
                <Route path='catalyst' element={<Catalyst />} />
                <Route path='foxtails' element={<Foxtails />} />
                <Route path='otrechenie-petra' element={<OtrecheniePetra />} />
                <Route path='lowercase' element={<Lowercase />} />
                <Route path='raein' element={<Raein />} />
            </Routes>
        </div>
    );
}
