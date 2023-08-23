import "../MainWebsite.css"

import React, {useEffect, useState} from 'react'

export function InfoPage() {

    return (
        <div className='main'>
            <div className='box'>
                <h2 id='section-1'>Welcome to my Website!</h2>
                <div className='inner'>
                    <p>This is the main div.</p>
                    <p>Honestly this page is mostly just a rehash of the WP-esque "Header Opacity"
                        stylesheet from a few months ago. I dunno what I'm doing, just having fun. I
                        guess.</p>

                    <p>This is a paragraph! Here's how you make a link: <a
                        href="https://neocities.org">Neocities</a>.</p>

                    <p>Here's how you can make <strong>bold</strong> and <em>italic</em> text.</p>

                    <p>Here's how you can add an image:</p>
                    <img/>

                    <p>Here is a big, wide full-width image:</p>
                    <img/>

                    <p>Here's how to make a list:</p>

                    <ul>
                        <li>First thing</li>
                        <li>Second thing</li>
                        <li>Third thing</li>
                    </ul>
                    <p>

                    </p>
                    <p>To learn more HTML/CSS, check out these <a
                        href="https://neocities.org/tutorials">tutorials</a>!</p>
                </div>

            </div>
            {/*                                                <div className='box'>
                            <h2 id='section-2'>Title 2</h2>
                            <div className='inner'>

                            </div>
                        </div>
                        <div className='box'>
                            <h2 id='section-3'>Section 3</h2>
                            <div className='inner'>

                            </div>
                        </div>*/}
        </div>
    );
}
