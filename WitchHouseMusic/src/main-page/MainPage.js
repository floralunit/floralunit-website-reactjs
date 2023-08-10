import React, {useState} from 'react'
import './MainPage.css';
import {MovingText} from "./MovingText";
import {BloodText} from "./BloodText";


export function MainPage() {

    return (
        <div>
            <MovingText />
            <BloodText/>
        </div>
    );
}
