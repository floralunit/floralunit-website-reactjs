import "./MainWebsite.css"
import React, {useEffect, useState} from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import "../global-const"
import {LeftSideBar} from "./components/LeftSideBar";
import {RightSideBar} from "./components/RightSideBar";
import {InfoPage} from "./pages/InfoPage";
import {MoviesPage} from "./pages/MoviesPage";
import {CatsFroggiesPage} from "./pages/Photos/CatsFroggiesPage";
import {AestheticsPage} from "./pages/Aesthetics/AestheticsPage";
import {FilmLofiPage} from "./pages/Photos/FilmLofiPage";
import {MyPhotosPage} from "./pages/Photos/MyPhotosPage";
import {VideosPage} from "./pages/Photos/VideosPage";
import {WebStuffPage} from "./pages/WebStuff/WebStuffPage";
import {IconsPage} from "./pages/WebStuff/IconsPage";
import {GamesPage} from "./pages/GamesPage";
import { NotFoundPage } from "../common/components/NotFoundPage";

export function MainRoutes() {
    return (
        <div className="main-page">
            <div className='main-container'>
                <div className='flex-container' style={{justifyContent: "center"}}>
                    <LeftSideBar/>
                    <Routes>
                        <Route path='' element={<InfoPage/>}/>
                        <Route path='movies' element={<MoviesPage/>}/>
                        <Route path='cats-frogs' element={<CatsFroggiesPage/>}/>
                        <Route path='aesthetics' element={<AestheticsPage/>}/>
                        <Route path='films-lofi' element={<FilmLofiPage/>}/>
                        <Route path='photos' element={<MyPhotosPage/>}/>
                        <Route path='videos' element={<VideosPage/>}/>
                        <Route path='web' element={<WebStuffPage/>}/>
                        <Route path='games' element={<GamesPage/>}/>
                        <Route path='movies' element={<MoviesPage/>}/>
                        <Route path='bgs-icons' element={<IconsPage/>}/>
                        <Route path='post-punk/*' element={<NotFoundPage/>}/>
                        <Route path='nu-metal/*' element={<NotFoundPage/>}/>
                    </Routes>
                    <RightSideBar/>
                </div>
                <br/>
            </div>
        </div>
    );
}
