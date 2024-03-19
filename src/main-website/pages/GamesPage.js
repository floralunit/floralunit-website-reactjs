import "../MainWebsite.css"
import "../../common/styles/photos.css"
import "../../common/styles/lace-frame.css"

import React, { useEffect, useState } from 'react'

export function GamesPage() {
    document.documentElement.style.removeProperty('--box-header-color');
    document.documentElement.style.removeProperty('--main-background');
    document.documentElement.style.removeProperty('--box-background');
    document.documentElement.style.removeProperty('--box-text-color');
    return (
        <div className='main' style={{ maxWidth: "650px", fontSize: 'smaller' }}>
            
        </div>
    );
}
