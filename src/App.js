import './App.css'

import React from "react";
import {BrowserRouter, Route,  Routes, Navigate} from 'react-router-dom';

import {MainPage} from "./main-page/MainPage";
import {WitchHousePage} from "./witchhouse-music-website/witch-main-page/WitchHousePage";
import {RadostMojaPage} from "./witchhouse-music-website/witch-pages/radost-moja/RadostMojaPage";
import {BobTilton} from "./emo-music-website/emo-bands/bob-tilton/BobTilton";
import {EmoPage} from "./emo-music-website/emo-main-page/EmoPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='witchhouse' element={<WitchHousePage/>}>
              <Route path='radostmoja' element={<RadostMojaPage/>} />
              <Route path='suicidewave' element={<RadostMojaPage />} />
          </Route>
            <Route path='emo' element={<EmoPage/>}>
                <Route path='emo/bobtilton' element={<BobTilton/>} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;