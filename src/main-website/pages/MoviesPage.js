import "../MainWebsite.css"
import "../../common/styles/gallery.css"
import "../../common/styles/cute-white-frame.css"

import React, { useEffect, useState } from 'react'
import {
    CLOUD1_BACKGROUND,
    CLOUD_BACKGROUND,
    COPPER_BACKGROUND, EMO1_BACKGROUND, EMO_BACKGROUND,
    FLOWER1_BACKGROUND,
    FLOWER2_BACKGROUND,
    FLOWER3_BACKGROUND,
    FLOWER_BACKGROUND, HINDU1_BACKGROUND,
    HINDU_BACKGROUND,
    MAIN_BACKGROUND,
    MARBLE1_BACKGROUND,
    MARBLE_BACKGROUND,
    PINK_BACKGROUND,
    RED_BACKGROUND,
    SKY1_BACKGROUND,
    SKY_BACKGROUND,
    SUN_BACKGROUND,
    TRIPPY_BACKGROUND,
    WATER1_BACKGROUND,
    WATER_BACKGROUND,
    WHITE_BACKGROUND,
    CLOTH_BACKGROUND,
    BLUEDOTS_BACKGROUND,
    SEXY_BACKGROUND,
    FRILL_BACKGROUND,
    HYDRAGEA_BACKGROUND,
    API_URL,
    MEIMAID_SEA_BACKGROUND,
    STARDEWVALLEY_BACKGROUND,
    BEARS_BACKGROUND,
    BUBBLES2_BACKGROUND,
    BUBBLES_BACKGROUND,
    PINKCLOUDS_BACKGROUND,
    DAISY_BACKGROUND,
    DARKGRASS_BACKGROUND
} from '../../global-const';

export function MoviesPage() {
    document.documentElement.style.removeProperty('--box-text-color');
    document.documentElement.style.setProperty('--box-header-color', `url(${DARKGRASS_BACKGROUND})`);
    document.documentElement.style.setProperty('--main-background', `url(${STARDEWVALLEY_BACKGROUND})`);
    document.documentElement.style.setProperty('--box-background', `#ffebee`);
    return (
        <div className='main' style={{ maxWidth: "1000px" }}>
 
        </div>
    );
}
