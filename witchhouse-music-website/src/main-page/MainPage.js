import React, {useState} from 'react'
import './MainPage.css';
import {MovingText} from "./MovingText";
import {BloodText} from "./BloodText";


export function MainPage() {

    return (
        <div>
            <MovingText />
            <BloodText height="50px"/>
            <MovingText />
            <div className={"empty"}/>
            <h1> That's life: it's so social <br/>
                So physical <br/>
                So emotional <br/>
                So stay home ... and listen to emo music <br/>
            </h1>
            <h5>(and sometimes go 2 gigs)</h5>
            <br/><br/>
        </div>
    );
}
