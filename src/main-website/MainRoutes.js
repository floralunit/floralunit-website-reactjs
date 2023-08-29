import "./MainWebsite.css"
import React, {useEffect, useState} from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import "../global-images"
import {LeftSideBar} from "./components/LeftSideBar";
import {RightSideBar} from "./components/RightSideBar";
import {InfoPage} from "./pages/InfoPage";
import {MoviesPage} from "./pages/MoviesPage";
import {CatsFroggiesPage} from "./pages/CatsFroggiesPage";
import {AestheticsPage} from "./pages/Aesthetics/AestheticsPage";
import {PhotoGaleryPage} from "./pages/PhotoGaleryPage";

export function MainRoutes() {

    return (
        <div className="main-page">
            <div className='main-container'>
                <div className='flex-container'>
                    <LeftSideBar/>
                    <Routes>
                        <Route path='' element={<InfoPage/>}/>
                        <Route path='movies' element={<MoviesPage/>}/>
                        <Route path='cats-frogs' element={<CatsFroggiesPage/>}/>
                        <Route path='aesthetics' element={<AestheticsPage/>}/>
                        <Route path='photos' element={<PhotoGaleryPage/>}/>
                    </Routes>
                    <RightSideBar/>
                </div>
                <br/>
                <marquee>pipi pupu</marquee>
            </div>
        </div>
    );
}
